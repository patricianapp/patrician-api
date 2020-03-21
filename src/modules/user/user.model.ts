import { BaseModel, Model, StringField } from 'warthog';

@Model()
export class User extends BaseModel {
  @StringField()
  username!: string;

  @StringField({ nullable: true })
  email?: string;
}
