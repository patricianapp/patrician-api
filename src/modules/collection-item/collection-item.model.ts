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

	@ManyToOne(() => User, (user: User) => user.collection)
	user!: User;

	@ManyToOne(() => Item, (item: Item) => item.collectionItem)
	itemDetails!: Item;

	@IntField({ nullable: true, default: 0 })
	plays?: number;

	// needs to be nullable for writes
	// FIXME: This is calling the database even though apiOnly is true
	// (Only occurs for mutation collectionItems, not collectionItem)
	// TODO: The other problem seems to be that this.itemDetails doesn't exist by the time the resolver responds
	// @StringField({ apiOnly: true, nullable: true })
	// get artist(): string {
	//   return this.itemDetails.artist;
	// }

	// these fields are not required for the field resolvers to work
	// however they may be required to make fields nullable
	// @StringField({ apiOnly: true, nullable: true })
	// get title(): string {
	//   return this.itemDetails.title;
	// }

	@StringField({ apiOnly: true, nullable: true })
	get mbid(): string | undefined {
		return this.itemDetails.mbid;
	}

	@OneToMany(() => Review, (review: Review) => review.collectionItem)
	reviews?: Review[];

	// FIXME: warthog codegen fails when using optional chaining
	// @StringField({ apiOnly: true, nullable: true })
	// get rating(): string | undefined {
	//   return this.reviews?.pop()?.rating; // TODO: Do we need the second question mark?
	// }

	// @StringField({ apiOnly: true, nullable: true })
	// get review(): string | undefined {
	//   return this.reviews?.pop()?.reviewText;
	// }
}
