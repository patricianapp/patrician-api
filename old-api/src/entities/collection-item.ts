import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user';
import { Item } from './item';

@ObjectType()
@Entity()
export class CollectionItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  userAlbumId!: string;

  @Field({nullable: true})
  @Column({nullable: true})
  rating?: string;

  @Field({nullable: true})
  @Column({nullable: true})
  customName?: string;

  @Field({nullable: true})
  @Column({nullable: true})
  customArtist?: string;

  @Field(type => User)
  @ManyToOne(type => User, user => user.collection)
  user: User;

  @Field(type => Item)
  @ManyToOne(type => Item, item => item.userAlbums, {eager: true})
  itemDetails: Item;

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  @Field()
  @UpdateDateColumn()
  updatedDate: Date;

  @Field()
  get artist(): string {
    return this.itemDetails.artist;
  }

  @Field()
  get albumName(): string {
    return this.itemDetails.name;
  }

  @Field()
  get mbid(): string {
    return this.itemDetails.mbid;
  }
}
