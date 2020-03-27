import { BaseModel, Model, OneToMany, StringField } from 'warthog';
import { CollectionItem } from '../collection-item/collection-item.model';

@Model()
export class User extends BaseModel {
  @StringField()
  username!: string;

  @StringField({ nullable: true })
  email?: string;

  @StringField({ nullable: true })
  bio?: string;

  @OneToMany(
    () => CollectionItem,
    (collectionItem: CollectionItem) => collectionItem.user
  )
  collection?: CollectionItem[];
  }
