import { BaseModel, IntField, Model, OneToMany, StringField } from 'warthog';
import { CollectionItem } from '../collection-item/collection-item.model';

@Model()
export class Item extends BaseModel {
  @StringField({ nullable: true })
  mbid?: string;

  @IntField({ nullable: true })
  rymId?: number;

  @StringField({ nullable: true })
  spotifyId?: string;

  @StringField({ nullable: true })
  title?: string;

  @StringField({ nullable: true })
  disambiguation?: string;

  @StringField({ nullable: true })
  artist?: string;

  @OneToMany(
    () => CollectionItem,
    (collectionItem: CollectionItem) => collectionItem.itemDetails
  )
  collectionItem?: CollectionItem[];
}
