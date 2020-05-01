import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { BaseService } from 'warthog';

import { Item } from './item.model';
import { ItemSearchIdInput } from './item-inputs';

@Service('ItemService')
export class ItemService extends BaseService<Item> {
	constructor(@InjectRepository(Item) protected readonly repository: Repository<Item>) {
		super(Item, repository);
	}

	async searchByIdentifiers(searchInput: ItemSearchIdInput): Promise<Item | string> {
		const { mbid, name } = searchInput;
		if (mbid) {
			// TODO: Figure out more elegant way to ignore these errors, instead of an empty catch block
			try {
				let itemByMbid = await this.findOne({ mbid });
				if (itemByMbid) {
					return itemByMbid;
				}
			} catch (e) {
				// .
			}
		}
		if (name) {
			try {
				const { artist, title } = name;
				let itemByName = await this.findOne({ artist, title });
				if (itemByName) {
					return itemByName;
				}
			} catch (e) {
				// .
			}
		}
		return 'Item not found';
	}

	async save(item: Item) {
		this.repository.save(item);
	}
}
