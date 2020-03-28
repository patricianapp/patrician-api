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

  @StringField()
  title!: string;

  @StringField({ nullable: true })
  disambiguation?: string;

  @StringField()
  artist!: string;

  @OneToMany(
    () => CollectionItem,
    (collectionItem: CollectionItem) => collectionItem.itemDetails
  )
  collectionItem?: CollectionItem[];
}
