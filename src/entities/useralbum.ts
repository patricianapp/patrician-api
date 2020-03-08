import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user';
import { Album } from './album';

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

  @Field(type => Album)
  @ManyToOne(type => Album, album => album.userAlbums)
  albumDetails: Album;

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  @Field()
  @UpdateDateColumn()
  updatedDate: Date;

  @Field()
  get artist(): string {
    return this.albumDetails.artist;
  }

  @Field()
  get albumName(): string {
    return this.albumDetails.title;
  }

  @Field()
  get mbid(): string {
    return this.albumDetails.mbid;
  }
}
