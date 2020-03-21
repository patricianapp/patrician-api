import { Resolver, Query, FieldResolver, Arg, Root, Mutation, Ctx, Int } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from './repositorities/user';
import { ItemRepository } from './repositorities/item';
import { Container } from 'typedi';
import { CollectionItem } from '../entities/collection-item';
import { AuthCredentialsInput } from './types/auth-input';
import { AddItemInput } from './types/item-input';
import { Repository } from 'typeorm';
import { Item } from '../entities/item';
import { User } from '../entities/user';

@Resolver()
export class UserResolver {
  constructor(
    @InjectRepository() private readonly userRepository: UserRepository,
    @InjectRepository(CollectionItem) private readonly collectionRepository: Repository<CollectionItem>,
    @InjectRepository() private readonly itemRepository: ItemRepository
  ) {

  }

  @Query(returns => User)
  getUser(@Arg('username') username: string) {
    return this.userRepository.findOne(username, {
      relations: ['collection', 'collection.itemDetails'] // I think if we use an "eager" relation, we won't need to do this
    });
  }

  // TODO: Item needs tag column
  // TODO: Add album with tag "folder:inbox" to user
  // @Mutation(returns => Item)
  // async recommend(@Arg('user') username: string, @Arg('item') addItemInput: AddItemInput) {
  //
  // }

  // @Query(returns => Recipe, { nullable: true })
  // recipe(@Arg('recipeId', type => Int) recipeId: number) {
  //   return this.userRepository.findOne(recipeId);
  // }



  // @Mutation(returns => Recipe)
  // async rate(@Arg('rate') rateInput: RateInput, @Ctx() { user }: Context): Promise<Recipe> {
  //   // find the recipe
  //   const recipe = await this.userRepository.findOne(rateInput.recipeId, {
  //     relations: ['ratings'],
  //   });
  //   if (!recipe) {
  //     throw new Error('Invalid recipe ID');
  //   }

  //   // set the new recipe rate
  //   const newRate = this.ratingsRepository.create({
  //     recipe,
  //     value: rateInput.value,
  //     user,
  //   });
  //   recipe.ratings.push(newRate);

  //   // update the recipe
  //   await this.userRepository.save(recipe);
  //   return recipe;
  // }

  // @FieldResolver()
  // ratings(@Root() recipe: Recipe) {
  //   return this.ratingsRepository.find({
  //     cache: 1000,
  //     where: { recipeId: recipe.id },
  //   });
  // }

  // @FieldResolver()
  // async author(@Root() recipe: Recipe): Promise<User> {
  //   return (await this.userRepository.findOne(recipe.authorId, { cache: 1000 }))!;
  // }
}