import { BaseModel, Model, StringField, ManyToOne } from 'warthog';
import { CollectionItem } from '../collection-item/collection-item.model';

@Model()
export class Review extends BaseModel {
  @ManyToOne(
    () => CollectionItem,
    (collectionItem: CollectionItem) => collectionItem.reviews
  )
  collectionItem!: CollectionItem;

  @StringField({ nullable: true })
  rating?: string;

  @StringField({ nullable: true })
  title?: string;

  @StringField({ nullable: true })
  body?: string;
}
