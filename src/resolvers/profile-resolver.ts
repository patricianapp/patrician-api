import { Resolver, Query, FieldResolver, Arg, Root, Mutation, Ctx, Int } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from './repositorities/user';
import { Container } from 'typedi';
import { CollectionItem } from '../entities/useralbum';
import { AuthCredentialsInput } from './types/auth-input';
import { AddItemInput } from './types/item-input';
import { Repository } from 'typeorm';

@Resolver()
export class ProfileResolver {
  constructor(
    @InjectRepository() private readonly userRepository: UserRepository,
    @InjectRepository() private readonly collectionRepository: Repository<CollectionItem>
  ) {
    Container.set('currentUser', 'user1');
  }

  // @Query(returns => Recipe, { nullable: true })
  // recipe(@Arg('recipeId', type => Int) recipeId: number) {
  //   return this.userRepository.findOne(recipeId);
  // }

  @Query(returns => [CollectionItem])
  async collection(): Promise<CollectionItem[]> {
    let user = await this.userRepository.findOne(Container.get('currentUser'), {
      relations: ['collection']
    });
    if(!user) {
      throw new Error('User not found');
    }
    return user.collection;
  }

  @Mutation(returns => String)
  async signUp(@Arg('credentials') authCredentials: AuthCredentialsInput): Promise<string> {
    const user = this.userRepository.create({
      ...authCredentials,
    });
    return await this.userRepository.signUp(authCredentials);
  }

  // @Mutation(returns => CollectionItem)
  // async addItem(@Arg('item') item: AddItemInput): Promise<string> {
  //   const recipe = this.collectionRepository.create({
  //     ...item,
  //   });
  //   return await this.userRepository.signUp(authCredentials);
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