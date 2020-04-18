import { BaseModel, Model, OneToMany, StringField, EmailField, JSONField } from 'warthog';
import { CollectionItem } from '../collection-item/collection-item.model';
import { AccountSettings } from '../../interfaces/account-settings';

@Model()
export class User extends BaseModel {
  @StringField({ unique: true })
  username!: string;

  @EmailField({ nullable: true })
  email?: string;

  @StringField({ writeonly: true })
  password!: string;

  @StringField({ dbOnly: true })
  salt!: string;

  @StringField({ nullable: true })
  bio?: string;

  @JSONField({ nullable: true })
  accountSettings?: AccountSettings;

  @OneToMany(
    () => CollectionItem,
    (collectionItem: CollectionItem) => collectionItem.user
  )
  collection?: CollectionItem[];
  }
