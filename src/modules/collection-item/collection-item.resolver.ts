import {
	Arg,
	Args,
	Mutation,
	Query,
	Resolver,
	FieldResolver,
	Root,
	Ctx,
} from 'type-graphql';
import { Inject } from 'typedi';
import { Fields, StandardDeleteResponse, UserId, BaseContext } from 'warthog';

import {
	CollectionItemCreateInput,
	CollectionItemCreateManyArgs,
	CollectionItemUpdateArgs,
	CollectionItemWhereArgs,
	CollectionItemWhereInput,
	CollectionItemWhereUniqueInput,
} from '../../../generated';

import { CollectionItem } from './collection-item.model';
import { CollectionItemService } from './collection-item.service';
import { User } from '../user/user.model';
import { Item } from '../item/item.model';
import { CollectionAddInput, CollectionAddResponse } from './collection-inputs';

@Resolver(CollectionItem)
export class CollectionItemResolver {
	constructor(
		@Inject('CollectionItemService')
		public readonly service: CollectionItemService
	) {}

	@Query(() => [CollectionItem])
	async collectionItems(
		@Args() { where, orderBy, limit, offset }: CollectionItemWhereArgs,
		@Fields() fields: string[]
	): Promise<CollectionItem[]> {
		// TODO: Be able to use fields here without breaking artist/title fieldResolvers
		return this.service.find<CollectionItemWhereInput>(where, orderBy, limit, offset);
	}

	@Query(() => CollectionItem)
	async collectionItem(
		@Arg('where') where: CollectionItemWhereUniqueInput
	): Promise<CollectionItem> {
		return this.service.findOne<CollectionItemWhereUniqueInput>(where);
	}

	@FieldResolver(() => String)
	async artist(
		@Root() collectionItem: CollectionItem,
		@Ctx() ctx: BaseContext
	): Promise<string> {
		let itemDetails = await ctx.dataLoader.loaders.CollectionItem.itemDetails.load(
			collectionItem
		);
		return itemDetails.artist;
	}

	@FieldResolver(() => String)
	async title(
		@Root() collectionItem: CollectionItem,
		@Ctx() ctx: BaseContext
	): Promise<string> {
		let itemDetails = await ctx.dataLoader.loaders.CollectionItem.itemDetails.load(
			collectionItem
		);
		return itemDetails.title;
	}

	// TODO: "Cannot return null for non-nullable field CollectionItem.mbid."
	// @FieldResolver(() => String)
	// async mbid(@Root() collectionItem: CollectionItem, @Ctx() ctx: BaseContext): Promise<string> {
	//   let itemDetails = await ctx.dataLoader.loaders.CollectionItem.itemDetails.load(collectionItem);
	//   if(itemDetails.mbid) {
	//     return itemDetails.mbid;
	//   }
	//   else {
	//     return '';
	//   }
	// }

	@FieldResolver(() => String)
	async rating(
		@Root() collectionItem: CollectionItem,
		@Ctx() ctx: BaseContext
	): Promise<string> {
		let reviews = await ctx.dataLoader.loaders.CollectionItem.reviews.load(
			collectionItem
		);
		if (reviews.length > 0) {
			return reviews[reviews.length - 1].rating;
		} else {
			return '';
		}
	}

	@FieldResolver(() => String)
	async reviewBody(
		@Root() collectionItem: CollectionItem,
		@Ctx() ctx: BaseContext
	): Promise<string> {
		// TODO: Only load the most recent review
		let reviews = await ctx.dataLoader.loaders.CollectionItem.reviews.load(
			collectionItem
		);
		if (reviews.length > 0) {
			return reviews[reviews.length - 1].body;
		} else {
			return '';
		}
	}

	@FieldResolver(() => [Item])
	itemDetails(
		@Root() collectionItem: CollectionItem,
		@Ctx() ctx: BaseContext
	): Promise<Item[]> {
		return ctx.dataLoader.loaders.CollectionItem.itemDetails.load(collectionItem);
	}

	@FieldResolver(() => [Item])
	reviews(
		@Root() collectionItem: CollectionItem,
		@Ctx() ctx: BaseContext
	): Promise<Item[]> {
		return ctx.dataLoader.loaders.CollectionItem.reviews.load(collectionItem);
	}

	@Mutation(() => CollectionItem)
	async createCollectionItem(
		@Arg('data') data: CollectionItemCreateInput,
		@UserId() userId: string
	): Promise<CollectionItem> {
		return this.service.create(data, userId);
	}

	@Mutation(() => CollectionAddResponse)
	async addToCollection(@Args() { data }: CollectionAddInput, @UserId() userId: string) {
		return this.service.addItems(data, userId);
	}

	@Mutation(() => [CollectionItem])
	async createManyCollectionItems(
		@Args() { data }: CollectionItemCreateManyArgs,
		@UserId() userId: string
	): Promise<CollectionItem[]> {
		return this.service.createMany(data, userId);
	}

	@Mutation(() => CollectionItem)
	async updateCollectionItem(
		@Args() { data, where }: CollectionItemUpdateArgs,
		@UserId() userId: string
	): Promise<CollectionItem> {
		return this.service.update(data, where, userId);
	}

	@Mutation(() => StandardDeleteResponse)
	async removeFromCollection(
		@Arg('itemId') itemId: string,
		@UserId() userId: string
	): Promise<StandardDeleteResponse> {
		return this.service.deleteCollectionItem(itemId, userId);
	}
}
