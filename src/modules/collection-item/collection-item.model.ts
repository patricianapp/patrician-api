import { BaseModel, Model, StringField, ManyToOne, OneToMany, IntField } from 'warthog';
import { User } from '../user/user.model';
import { Item } from '../item/item.model';
import { Review } from '../review/review.model';

@Model()
export class CollectionItem extends BaseModel {
  @StringField({ nullable: true })
  customTitle?: string;

  @StringField({ nullable: true })
  customArtist?: string;

  @ManyToOne(
    () => User,
    (user: User) => user.collection
  )
  user!: User;

  @ManyToOne(
    () => Item,
    (item: Item) => item.collectionItem
  )
  itemDetails!: Item;

  @IntField({ nullable: true, default: 0 })
  plays?: number

  @StringField({ apiOnly: true })
  get artist(): string {
    return this.itemDetails.artist;
  }

  @StringField({ apiOnly: true })
  get title(): string {
    return this.itemDetails.title;
  }

  @StringField({ apiOnly: true, nullable: true })
  get mbid(): string | undefined {
    return this.itemDetails.mbid;
  }

  @OneToMany(
    () => Review,
    (review: Review) => review.collectionItem
  )
  reviews?: Review[];

  // FIXME: warthog codegen fails because of optional chaining
  // @StringField({ apiOnly: true, nullable: true })
  // get rating(): string | undefined {
  //   return this.reviews?.pop()?.rating; // TODO: Do we need the second question mark?
  // }

  // @StringField({ apiOnly: true, nullable: true })
  // get review(): string | undefined {
  //   return this.reviews?.pop()?.reviewText;
  // }
}
