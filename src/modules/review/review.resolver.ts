import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';
import { Inject } from 'typedi';
import { Fields, StandardDeleteResponse, UserId } from 'warthog';

import {
  ReviewCreateInput,
  ReviewCreateManyArgs,
  ReviewUpdateArgs,
  ReviewWhereArgs,
  ReviewWhereInput,
  ReviewWhereUniqueInput,
} from '../../../generated';

import { Review } from './review.model';
import { ReviewService } from './review.service';

@Resolver(Review)
export class ReviewResolver {
  constructor(@Inject('ReviewService') public readonly service: ReviewService) {}

  @Query(() => [Review])
  async reviews(
    @Args() { where, orderBy, limit, offset }: ReviewWhereArgs,
    @Fields() fields: string[]
  ): Promise<Review[]> {
    return this.service.find<ReviewWhereInput>(where, orderBy, limit, offset, fields);
  }

  @Query(() => Review)
  async review(@Arg('where') where: ReviewWhereUniqueInput): Promise<Review> {
    return this.service.findOne<ReviewWhereUniqueInput>(where);
  }

  @Mutation(() => Review)
  async createReview(
    @Arg('data') data: ReviewCreateInput,
    @UserId() userId: string
  ): Promise<Review> {
    return this.service.create(data, userId);
  }

  @Mutation(() => [Review])
  async createManyReviews(
    @Args() { data }: ReviewCreateManyArgs,
    @UserId() userId: string
  ): Promise<Review[]> {
    return this.service.createMany(data, userId);
  }

  @Mutation(() => Review)
  async updateReview(
    @Args() { data, where }: ReviewUpdateArgs,
    @UserId() userId: string
  ): Promise<Review> {
    return this.service.update(data, where, userId);
  }

  @Mutation(() => StandardDeleteResponse)
  async deleteReview(
    @Arg('where') where: ReviewWhereUniqueInput,
    @UserId() userId: string
  ): Promise<StandardDeleteResponse> {
    return this.service.delete(where, userId);
  }
}
