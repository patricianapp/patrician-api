import { Field, ObjectType, Int } from 'type-graphql';
import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { CollectionItem } from './useralbum';

@ObjectType()
@Entity()
export class Album extends BaseEntity {
  @Field()
  @PrimaryColumn()
  mbid: string;

  @Field(type => Int)
  @Column({ type: 'int' })
  rymId: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({nullable: true})
  disambiguation: string;

  // @OneToMany(type => ReleaseGroupAlias)
  // aliases: string[];

  @Field()
  @Column()
  artist: string;

  @OneToMany(type => CollectionItem, userAlbum => userAlbum.albumDetails)
  userAlbums: CollectionItem[];

}
