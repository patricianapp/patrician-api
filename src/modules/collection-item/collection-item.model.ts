import { BaseModel, Model, StringField, ManyToOne } from 'warthog';
import { User } from '../user/user.model';
import { Item } from '../item/item.model';

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
  user?: User;

  @ManyToOne(
    () => Item,
    (item: Item) => item.collectionItem
  )
  itemDetails?: Item;
}
