import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';
import { Inject } from 'typedi';
import { Fields, StandardDeleteResponse, UserId } from 'warthog';

import {
  ItemCreateInput,
  ItemCreateManyArgs,
  ItemUpdateArgs,
  ItemWhereArgs,
  ItemWhereInput,
  ItemWhereUniqueInput
} from '../../../generated';

import { Item } from './item.model';
import { ItemService } from './item.service';

@Resolver(Item)
export class ItemResolver {
  constructor(@Inject('ItemService') public readonly service: ItemService) {}

  @Query(() => [Item])
  async items(
    @Args() { where, orderBy, limit, offset }: ItemWhereArgs,
    @Fields() fields: string[]
  ): Promise<Item[]> {
    return this.service.find<ItemWhereInput>(where, orderBy, limit, offset, fields);
  }

  @Query(() => Item)
  async item(@Arg('where') where: ItemWhereUniqueInput): Promise<Item> {
    return this.service.findOne<ItemWhereUniqueInput>(where);
  }

  @Mutation(() => Item)
  async createItem(@Arg('data') data: ItemCreateInput, @UserId() userId: string): Promise<Item> {
    return this.service.create(data, userId);
  }

  @Mutation(() => [Item])
  async createManyItems(
    @Args() { data }: ItemCreateManyArgs,
    @UserId() userId: string
  ): Promise<Item[]> {
    return this.service.createMany(data, userId);
  }

  @Mutation(() => Item)
  async updateItem(
    @Args() { data, where }: ItemUpdateArgs,
    @UserId() userId: string
  ): Promise<Item> {
    return this.service.update(data, where, userId);
  }

  @Mutation(() => StandardDeleteResponse)
  async deleteItem(
    @Arg('where') where: ItemWhereUniqueInput,
    @UserId() userId: string
  ): Promise<StandardDeleteResponse> {
    return this.service.delete(where, userId);
  }
}
