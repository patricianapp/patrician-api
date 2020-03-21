import { Field, ObjectType, Int } from 'type-graphql';
import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany, EventSubscriber, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { CollectionItem } from './collection-item';

@ObjectType()
@Entity()
export class Item extends BaseEntity {
  @Field()
  @PrimaryColumn()
  mbid: string;

  @Field(type => Int)
  @Column({ type: 'int', nullable: true })
  rymId?: number;

  @Field()
  @Column({ nullable: true })
  spotifyId?: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({nullable: true})
  disambiguation?: string;

  // @OneToMany(type => ReleaseGroupAlias)
  // aliases: string[];

  @Column()
  

  @Field()
  @Column()
  artist: string;

  @OneToMany(type => CollectionItem, collectionItem => collectionItem.itemDetails)
  userAlbums: CollectionItem[];

}

@EventSubscriber()
export class ItemSubscriber implements EntitySubscriberInterface<Item> {
  listenTo () { 
    return Item;
  }

  afterInsert(event: InsertEvent<Item>) {
    
  }
}