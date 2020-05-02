import { Inject, Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { BaseService, StandardDeleteResponse } from 'warthog';

import { CollectionItem } from './collection-item.model';
import { CollectionAddInputItem } from './collection-inputs';
import { Item } from '../item/item.model';
import { ItemService } from '../item/item.service';
import { ItemSearchIdInput } from '../item/item-inputs';
import { UserService } from '../user/user.service';

@Service('CollectionItemService')
export class CollectionItemService extends BaseService<CollectionItem> {
	constructor(
		@InjectRepository(CollectionItem)
		protected readonly repository: Repository<CollectionItem>,
		@Inject('ItemService') public readonly itemService: ItemService,
		@Inject('UserService') public readonly userService: UserService
	) {
		super(CollectionItem, repository);
	}

	async addItems(items: Array<CollectionAddInputItem>, userId: string) {
		const itemsAdded: Array<CollectionItem> = [];
		const itemsUpdated: Array<CollectionItem> = [];

		// const userFields: Array<keyof CollectionAddInput> = ['rating', 'review', 'tags'];
		const user = await this.userService.findOne({ id: userId });

		// TODO: Duplicate checking

		for (let item of items) {
			const userItemData: any = {};
			// for(let userField of userFields) {
			// 	userItemData[userField] = item[userField] || undefined;
			// }

			// assuming it's a new collectionItem
			if (item.review) {
				userItemData.reviews = [item.review];
			}

			let result = new Item();
			// Step 1. Search to see if item exists
			let searchInput: ItemSearchIdInput = {};
			if (item.mbid) {
				searchInput.mbid = item.mbid;
			}
			if (item.artist && item.title) {
				searchInput = {
					...searchInput,
					name: {
						artist: item.artist,
						title: item.title,
					},
				};
			}
			let searchResult = await this.itemService.searchByIdentifiers(searchInput);
			if (searchResult !== 'Item not found') {
				result = searchResult as Item;
				if (item.mbid && !result.mbid) {
					result.mbid = item.mbid;
				}
				this.itemService.save(result);
			} else {
				if (item.mbid) {
					result.mbid = item.mbid;
				}
				if (item.artist && item.title) {
					result.artist = item.artist;
					result.title = item.title;
				}
				result = await this.itemService.create(result, userId);
			}

			let newCollectionItemPayload = {
				user,
				itemDetails: result,
				...userItemData,
			};

			// TODO: See if there's a way to combine super.create and repository.save
			let collectionItemSearch = await this.repository.findOne({
				user,
				itemDetails: result,
			});
			if (collectionItemSearch) {
				// TODO: add userItemData fields
				this.repository.save(collectionItemSearch);
				itemsUpdated.push(collectionItemSearch);
			} else {
				const newCollectionItem = await super.create(newCollectionItemPayload, userId);
				itemsAdded.push(newCollectionItem);
			}
		}
		return {
			itemsAdded,
			itemsUpdated,
		};
	}

	async deleteCollectionItem(
		itemId: string,
		userId: string
	): Promise<StandardDeleteResponse> {
		// note: typeorm findOne does not filter deleted items,
		// but we're using it because warthog's find() function throws
		// 'column collectionitem.undefined does not exist'
		const collectionItemToDelete = await this.repository.findOne({
			where: {
				user: { id: userId },
				itemDetails: { id: itemId },
			},
		});

		if (collectionItemToDelete && !collectionItemToDelete.deletedById) {
			return this.delete(collectionItemToDelete.id, userId);
		} else {
			throw `Cannot find item ${itemId} in ${userId}'s collection`;
		}
	}
}
