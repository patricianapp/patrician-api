import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, BaseEntity, Unique, OneToMany, PrimaryColumn, ManyToMany, JoinTable, RelationCount  } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CollectionItem } from './collection-item';

@ObjectType()
@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @Field()
  @PrimaryColumn()
  username: string;

  @Field({nullable: true})
  @Column({nullable: true})
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Field(type => [CollectionItem])
  @OneToMany(type => CollectionItem, collectionItem => collectionItem.user)
  collection: CollectionItem[];

  @Field(type => [User])
  @ManyToMany(type => User, user => user.following)
  @JoinTable()
  followers: User[];

  @Field(type => [User])
  @ManyToMany(type => User, user => user.followers)
  following: User[];

  @RelationCount((user: User) => user.followers)
  followersCount: number;

  @RelationCount((user: User) => user.following)
  followingCount: number;


  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

}