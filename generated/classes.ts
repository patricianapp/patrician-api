// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
// @ts-ignore
import { GraphQLDateTime as DateTime } from "graphql-iso-date";
// @ts-ignore
import { GraphQLID as ID } from "graphql";
// @ts-ignore
import {
  ArgsType,
  Field as TypeGraphQLField,
  Float,
  InputType as TypeGraphQLInputType,
  Int
} from "type-graphql";
// @ts-ignore
import { registerEnumType } from "type-graphql";

// @ts-ignore eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require("graphql-type-json");

// @ts-ignore
import { BaseWhereInput, JsonObject, PaginationArgs } from "warthog";
// @ts-ignore
import { User } from "../src/modules/user/user.model";
// @ts-ignore
import { Item } from "../src/modules/item/item.model";
// @ts-ignore
import { Review } from "../src/modules/review/review.model";
// @ts-ignore
import { CollectionItem } from "../src/modules/collection-item/collection-item.model";

export enum UserOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  username_ASC = "username_ASC",
  username_DESC = "username_DESC",

  email_ASC = "email_ASC",
  email_DESC = "email_DESC",

  bio_ASC = "bio_ASC",
  bio_DESC = "bio_DESC"
}

registerEnumType(UserOrderByEnum, {
  name: "UserOrderByInput"
});

@TypeGraphQLInputType()
export class UserWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField({ nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField({ nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  username_eq?: string;

  @TypeGraphQLField({ nullable: true })
  username_contains?: string;

  @TypeGraphQLField({ nullable: true })
  username_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  username_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  username_in?: string[];

  @TypeGraphQLField({ nullable: true })
  email_eq?: string;

  @TypeGraphQLField({ nullable: true })
  email_contains?: string;

  @TypeGraphQLField({ nullable: true })
  email_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  email_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  email_in?: string[];

  @TypeGraphQLField({ nullable: true })
  bio_eq?: string;

  @TypeGraphQLField({ nullable: true })
  bio_contains?: string;

  @TypeGraphQLField({ nullable: true })
  bio_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  bio_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  bio_in?: string[];

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  accountSettings_json?: JsonObject;
}

@TypeGraphQLInputType()
export class UserWhereUniqueInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id?: string;

  @TypeGraphQLField(() => String, { nullable: true })
  username?: string;

  @TypeGraphQLField(() => String, { nullable: true })
  email?: string;
}

@TypeGraphQLInputType()
export class UserCreateInput {
  @TypeGraphQLField()
  username!: string;

  @TypeGraphQLField({ nullable: true })
  email?: string;

  @TypeGraphQLField()
  password!: string;

  @TypeGraphQLField({ nullable: true })
  bio?: string;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  accountSettings?: JsonObject;
}

@TypeGraphQLInputType()
export class UserUpdateInput {
  @TypeGraphQLField({ nullable: true })
  username?: string;

  @TypeGraphQLField({ nullable: true })
  email?: string;

  @TypeGraphQLField({ nullable: true })
  password?: string;

  @TypeGraphQLField({ nullable: true })
  bio?: string;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  accountSettings?: JsonObject;
}

@ArgsType()
export class UserWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

  @TypeGraphQLField(() => UserOrderByEnum, { nullable: true })
  orderBy?: UserOrderByEnum;
}

@ArgsType()
export class UserCreateManyArgs {
  @TypeGraphQLField(() => [UserCreateInput])
  data!: UserCreateInput[];
}

@ArgsType()
export class UserUpdateArgs {
  @TypeGraphQLField() data!: UserUpdateInput;
  @TypeGraphQLField() where!: UserWhereUniqueInput;
}

export enum ItemOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  mbid_ASC = "mbid_ASC",
  mbid_DESC = "mbid_DESC",

  rymId_ASC = "rymId_ASC",
  rymId_DESC = "rymId_DESC",

  spotifyId_ASC = "spotifyId_ASC",
  spotifyId_DESC = "spotifyId_DESC",

  title_ASC = "title_ASC",
  title_DESC = "title_DESC",

  disambiguation_ASC = "disambiguation_ASC",
  disambiguation_DESC = "disambiguation_DESC",

  artist_ASC = "artist_ASC",
  artist_DESC = "artist_DESC",

  coverArt_ASC = "coverArt_ASC",
  coverArt_DESC = "coverArt_DESC"
}

registerEnumType(ItemOrderByEnum, {
  name: "ItemOrderByInput"
});

@TypeGraphQLInputType()
export class ItemWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField({ nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField({ nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  mbid_eq?: string;

  @TypeGraphQLField({ nullable: true })
  mbid_contains?: string;

  @TypeGraphQLField({ nullable: true })
  mbid_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  mbid_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  mbid_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  rymId_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  rymId_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  rymId_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  rymId_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  rymId_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  rymId_in?: number[];

  @TypeGraphQLField({ nullable: true })
  spotifyId_eq?: string;

  @TypeGraphQLField({ nullable: true })
  spotifyId_contains?: string;

  @TypeGraphQLField({ nullable: true })
  spotifyId_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  spotifyId_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  spotifyId_in?: string[];

  @TypeGraphQLField({ nullable: true })
  title_eq?: string;

  @TypeGraphQLField({ nullable: true })
  title_contains?: string;

  @TypeGraphQLField({ nullable: true })
  title_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  title_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  title_in?: string[];

  @TypeGraphQLField({ nullable: true })
  disambiguation_eq?: string;

  @TypeGraphQLField({ nullable: true })
  disambiguation_contains?: string;

  @TypeGraphQLField({ nullable: true })
  disambiguation_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  disambiguation_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  disambiguation_in?: string[];

  @TypeGraphQLField({ nullable: true })
  artist_eq?: string;

  @TypeGraphQLField({ nullable: true })
  artist_contains?: string;

  @TypeGraphQLField({ nullable: true })
  artist_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  artist_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  artist_in?: string[];

  @TypeGraphQLField({ nullable: true })
  coverArt_eq?: string;

  @TypeGraphQLField({ nullable: true })
  coverArt_contains?: string;

  @TypeGraphQLField({ nullable: true })
  coverArt_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  coverArt_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  coverArt_in?: string[];
}

@TypeGraphQLInputType()
export class ItemWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class ItemCreateInput {
  @TypeGraphQLField({ nullable: true })
  mbid?: string;

  @TypeGraphQLField({ nullable: true })
  rymId?: number;

  @TypeGraphQLField({ nullable: true })
  spotifyId?: string;

  @TypeGraphQLField()
  title!: string;

  @TypeGraphQLField({ nullable: true })
  disambiguation?: string;

  @TypeGraphQLField()
  artist!: string;

  @TypeGraphQLField({ nullable: true })
  coverArt?: string;
}

@TypeGraphQLInputType()
export class ItemUpdateInput {
  @TypeGraphQLField({ nullable: true })
  mbid?: string;

  @TypeGraphQLField({ nullable: true })
  rymId?: number;

  @TypeGraphQLField({ nullable: true })
  spotifyId?: string;

  @TypeGraphQLField({ nullable: true })
  title?: string;

  @TypeGraphQLField({ nullable: true })
  disambiguation?: string;

  @TypeGraphQLField({ nullable: true })
  artist?: string;

  @TypeGraphQLField({ nullable: true })
  coverArt?: string;
}

@ArgsType()
export class ItemWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => ItemWhereInput, { nullable: true })
  where?: ItemWhereInput;

  @TypeGraphQLField(() => ItemOrderByEnum, { nullable: true })
  orderBy?: ItemOrderByEnum;
}

@ArgsType()
export class ItemCreateManyArgs {
  @TypeGraphQLField(() => [ItemCreateInput])
  data!: ItemCreateInput[];
}

@ArgsType()
export class ItemUpdateArgs {
  @TypeGraphQLField() data!: ItemUpdateInput;
  @TypeGraphQLField() where!: ItemWhereUniqueInput;
}

export enum ReviewOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  collectionItemId_ASC = "collectionItemId_ASC",
  collectionItemId_DESC = "collectionItemId_DESC",

  rating_ASC = "rating_ASC",
  rating_DESC = "rating_DESC",

  title_ASC = "title_ASC",
  title_DESC = "title_DESC",

  body_ASC = "body_ASC",
  body_DESC = "body_DESC"
}

registerEnumType(ReviewOrderByEnum, {
  name: "ReviewOrderByInput"
});

@TypeGraphQLInputType()
export class ReviewWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField({ nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField({ nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField(() => ID, { nullable: true })
  collectionItemId_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  collectionItemId_in?: string[];

  @TypeGraphQLField({ nullable: true })
  rating_eq?: string;

  @TypeGraphQLField({ nullable: true })
  rating_contains?: string;

  @TypeGraphQLField({ nullable: true })
  rating_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  rating_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  rating_in?: string[];

  @TypeGraphQLField({ nullable: true })
  title_eq?: string;

  @TypeGraphQLField({ nullable: true })
  title_contains?: string;

  @TypeGraphQLField({ nullable: true })
  title_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  title_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  title_in?: string[];

  @TypeGraphQLField({ nullable: true })
  body_eq?: string;

  @TypeGraphQLField({ nullable: true })
  body_contains?: string;

  @TypeGraphQLField({ nullable: true })
  body_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  body_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  body_in?: string[];
}

@TypeGraphQLInputType()
export class ReviewWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class ReviewCreateInput {
  @TypeGraphQLField(() => ID)
  collectionItemId!: string;

  @TypeGraphQLField({ nullable: true })
  rating?: string;

  @TypeGraphQLField({ nullable: true })
  title?: string;

  @TypeGraphQLField({ nullable: true })
  body?: string;
}

@TypeGraphQLInputType()
export class ReviewUpdateInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  collectionItemId?: string;

  @TypeGraphQLField({ nullable: true })
  rating?: string;

  @TypeGraphQLField({ nullable: true })
  title?: string;

  @TypeGraphQLField({ nullable: true })
  body?: string;
}

@ArgsType()
export class ReviewWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => ReviewWhereInput, { nullable: true })
  where?: ReviewWhereInput;

  @TypeGraphQLField(() => ReviewOrderByEnum, { nullable: true })
  orderBy?: ReviewOrderByEnum;
}

@ArgsType()
export class ReviewCreateManyArgs {
  @TypeGraphQLField(() => [ReviewCreateInput])
  data!: ReviewCreateInput[];
}

@ArgsType()
export class ReviewUpdateArgs {
  @TypeGraphQLField() data!: ReviewUpdateInput;
  @TypeGraphQLField() where!: ReviewWhereUniqueInput;
}

export enum CollectionItemOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  customTitle_ASC = "customTitle_ASC",
  customTitle_DESC = "customTitle_DESC",

  customArtist_ASC = "customArtist_ASC",
  customArtist_DESC = "customArtist_DESC",

  userId_ASC = "userId_ASC",
  userId_DESC = "userId_DESC",

  itemDetailsId_ASC = "itemDetailsId_ASC",
  itemDetailsId_DESC = "itemDetailsId_DESC",

  plays_ASC = "plays_ASC",
  plays_DESC = "plays_DESC",

  mbid_ASC = "mbid_ASC",
  mbid_DESC = "mbid_DESC"
}

registerEnumType(CollectionItemOrderByEnum, {
  name: "CollectionItemOrderByInput"
});

@TypeGraphQLInputType()
export class CollectionItemWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField({ nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField({ nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  customTitle_eq?: string;

  @TypeGraphQLField({ nullable: true })
  customTitle_contains?: string;

  @TypeGraphQLField({ nullable: true })
  customTitle_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  customTitle_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  customTitle_in?: string[];

  @TypeGraphQLField({ nullable: true })
  customArtist_eq?: string;

  @TypeGraphQLField({ nullable: true })
  customArtist_contains?: string;

  @TypeGraphQLField({ nullable: true })
  customArtist_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  customArtist_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  customArtist_in?: string[];

  @TypeGraphQLField(() => ID, { nullable: true })
  userId_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  userId_in?: string[];

  @TypeGraphQLField(() => ID, { nullable: true })
  itemDetailsId_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  itemDetailsId_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  plays_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  plays_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  plays_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  plays_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  plays_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  plays_in?: number[];

  @TypeGraphQLField({ nullable: true })
  mbid_eq?: string;

  @TypeGraphQLField({ nullable: true })
  mbid_contains?: string;

  @TypeGraphQLField({ nullable: true })
  mbid_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  mbid_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  mbid_in?: string[];
}

@TypeGraphQLInputType()
export class CollectionItemWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class CollectionItemCreateInput {
  @TypeGraphQLField({ nullable: true })
  customTitle?: string;

  @TypeGraphQLField({ nullable: true })
  customArtist?: string;

  @TypeGraphQLField(() => ID)
  userId!: string;

  @TypeGraphQLField(() => ID)
  itemDetailsId!: string;

  @TypeGraphQLField({ nullable: true })
  plays?: number;

  @TypeGraphQLField({ nullable: true })
  mbid?: string;
}

@TypeGraphQLInputType()
export class CollectionItemUpdateInput {
  @TypeGraphQLField({ nullable: true })
  customTitle?: string;

  @TypeGraphQLField({ nullable: true })
  customArtist?: string;

  @TypeGraphQLField(() => ID, { nullable: true })
  userId?: string;

  @TypeGraphQLField(() => ID, { nullable: true })
  itemDetailsId?: string;

  @TypeGraphQLField({ nullable: true })
  plays?: number;

  @TypeGraphQLField({ nullable: true })
  mbid?: string;
}

@ArgsType()
export class CollectionItemWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => CollectionItemWhereInput, { nullable: true })
  where?: CollectionItemWhereInput;

  @TypeGraphQLField(() => CollectionItemOrderByEnum, { nullable: true })
  orderBy?: CollectionItemOrderByEnum;
}

@ArgsType()
export class CollectionItemCreateManyArgs {
  @TypeGraphQLField(() => [CollectionItemCreateInput])
  data!: CollectionItemCreateInput[];
}

@ArgsType()
export class CollectionItemUpdateArgs {
  @TypeGraphQLField() data!: CollectionItemUpdateInput;
  @TypeGraphQLField() where!: CollectionItemWhereUniqueInput;
}
