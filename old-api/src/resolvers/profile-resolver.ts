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

@Resolver()
export class ProfileResolver {
  constructor(
    @InjectRepository() private readonly userRepository: UserRepository,
    @InjectRepository(CollectionItem) private readonly collectionRepository: Repository<CollectionItem>,
    @InjectRepository() private readonly itemRepository: ItemRepository
  ) {

  }

  // @Query(returns => Recipe, { nullable: true })
  // recipe(@Arg('recipeId', type => Int) recipeId: number) {
  //   return this.userRepository.findOne(recipeId);
  // }

  // creates a test user. run this if database has been reset
  @Query(returns => String)
  async debugInit(): Promise<string> {
    let currentUser = await this.userRepository.signUp({
      username: 'user1',
      password: 'TestPa$$word123'
    });


    return 'all set';
  }

  @Query(returns => [CollectionItem])
  async collection(): Promise<CollectionItem[]> {
    let user = await this.userRepository.findOne(Container.get('currentUser'), {
      relations: ['collection', 'collection.itemDetails']
    });
    if(!user) {
      throw new Error('User not found');
    }
    return user.collection;
  }

  @Mutation(returns => String)
  async signUp(@Arg('credentials') authCredentials: AuthCredentialsInput): Promise<string> {
    return await this.userRepository.signUp(authCredentials);
  }

  @Mutation(returns => CollectionItem)
  async addItem(@Arg('item') itemInput: AddItemInput): Promise<CollectionItem> {
    const item = await this.itemRepository.initItem(itemInput)
    let user = await this.userRepository.findOne(Container.get('currentUser'));
    const userItem = new CollectionItem();
    userItem.itemDetails = item as Item;
    userItem.user = user;
    return await this.collectionRepository.save(userItem);
  }

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