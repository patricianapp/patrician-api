import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';
import { Inject } from 'typedi';
import { Fields, StandardDeleteResponse, UserId } from 'warthog';

import {
  CollectionItemCreateInput,
  CollectionItemCreateManyArgs,
  CollectionItemUpdateArgs,
  CollectionItemWhereArgs,
  CollectionItemWhereInput,
  CollectionItemWhereUniqueInput
} from '../../../generated';

import { CollectionItem } from './collection-item.model';
import { CollectionItemService } from './collection-item.service';

@Resolver(CollectionItem)
export class CollectionItemResolver {
  constructor(@Inject('CollectionItemService') public readonly service: CollectionItemService) {}

  @Query(() => [CollectionItem])
  async collectionItems(
    @Args() { where, orderBy, limit, offset }: CollectionItemWhereArgs,
    @Fields() fields: string[]
  ): Promise<CollectionItem[]> {
    return this.service.find<CollectionItemWhereInput>(where, orderBy, limit, offset, fields);
  }

  @Query(() => CollectionItem)
  async collectionItem(
    @Arg('where') where: CollectionItemWhereUniqueInput
  ): Promise<CollectionItem> {
    return this.service.findOne<CollectionItemWhereUniqueInput>(where);
  }

  @Mutation(() => CollectionItem)
  async createCollectionItem(
    @Arg('data') data: CollectionItemCreateInput,
    @UserId() userId: string
  ): Promise<CollectionItem> {
    return this.service.create(data, userId);
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
  async deleteCollectionItem(
    @Arg('where') where: CollectionItemWhereUniqueInput,
    @UserId() userId: string
  ): Promise<StandardDeleteResponse> {
    return this.service.delete(where, userId);
  }
}
