import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import * as schema from  './schema.graphql'

export interface Query {
    collectionItems: <T = Array<CollectionItem>>(args: { offset?: Int | null, limit?: Int | null, where?: CollectionItemWhereInput | null, orderBy?: CollectionItemOrderByInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    collectionItem: <T = CollectionItem>(args: { where: CollectionItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Array<Item>>(args: { offset?: Int | null, limit?: Int | null, where?: ItemWhereInput | null, orderBy?: ItemOrderByInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    item: <T = Item>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User>>(args: { offset?: Int | null, limit?: Int | null, where?: UserWhereInput | null, orderBy?: UserOrderByInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createCollectionItem: <T = CollectionItem>(args: { data: CollectionItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createManyCollectionItems: <T = Array<CollectionItem>>(args: { data: Array<CollectionItemCreateInput> }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCollectionItem: <T = CollectionItem>(args: { data: CollectionItemUpdateInput, where: CollectionItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCollectionItem: <T = StandardDeleteResponse>(args: { where: CollectionItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createManyItems: <T = Array<Item>>(args: { data: Array<ItemCreateInput> }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateItem: <T = Item>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteItem: <T = StandardDeleteResponse>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createManyUsers: <T = Array<User>>(args: { data: Array<UserCreateInput> }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = StandardDeleteResponse>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {}

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args: any[]): T
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })

/**
 * Types
*/

export type CollectionItemOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'customTitle_ASC' |
  'customTitle_DESC' |
  'customArtist_ASC' |
  'customArtist_DESC' |
  'userId_ASC' |
  'userId_DESC' |
  'itemDetailsId_ASC' |
  'itemDetailsId_DESC'

export type ItemOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'mbid_ASC' |
  'mbid_DESC' |
  'rymId_ASC' |
  'rymId_DESC' |
  'spotifyId_ASC' |
  'spotifyId_DESC' |
  'title_ASC' |
  'title_DESC' |
  'disambiguation_ASC' |
  'disambiguation_DESC' |
  'artist_ASC' |
  'artist_DESC'

export type UserOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'username_ASC' |
  'username_DESC' |
  'email_ASC' |
  'email_DESC' |
  'bio_ASC' |
  'bio_DESC'

export interface BaseWhereInput {
  id_eq?: String | null
  id_in?: String[] | String | null
  createdAt_eq?: String | null
  createdAt_lt?: String | null
  createdAt_lte?: String | null
  createdAt_gt?: String | null
  createdAt_gte?: String | null
  createdById_eq?: String | null
  updatedAt_eq?: String | null
  updatedAt_lt?: String | null
  updatedAt_lte?: String | null
  updatedAt_gt?: String | null
  updatedAt_gte?: String | null
  updatedById_eq?: String | null
  deletedAt_all?: Boolean | null
  deletedAt_eq?: String | null
  deletedAt_lt?: String | null
  deletedAt_lte?: String | null
  deletedAt_gt?: String | null
  deletedAt_gte?: String | null
  deletedById_eq?: String | null
}

export interface CollectionItemCreateInput {
  customTitle?: String | null
  customArtist?: String | null
  userId: ID_Output
  itemDetailsId: ID_Output
}

export interface CollectionItemUpdateInput {
  customTitle?: String | null
  customArtist?: String | null
  userId?: ID_Input | null
  itemDetailsId?: ID_Input | null
}

export interface CollectionItemWhereInput {
  id_eq?: String | null
  id_in?: String[] | String | null
  createdAt_eq?: String | null
  createdAt_lt?: String | null
  createdAt_lte?: String | null
  createdAt_gt?: String | null
  createdAt_gte?: String | null
  createdById_eq?: String | null
  updatedAt_eq?: String | null
  updatedAt_lt?: String | null
  updatedAt_lte?: String | null
  updatedAt_gt?: String | null
  updatedAt_gte?: String | null
  updatedById_eq?: String | null
  deletedAt_all?: Boolean | null
  deletedAt_eq?: String | null
  deletedAt_lt?: String | null
  deletedAt_lte?: String | null
  deletedAt_gt?: String | null
  deletedAt_gte?: String | null
  deletedById_eq?: String | null
  customTitle_eq?: String | null
  customTitle_contains?: String | null
  customTitle_startsWith?: String | null
  customTitle_endsWith?: String | null
  customTitle_in?: String[] | String | null
  customArtist_eq?: String | null
  customArtist_contains?: String | null
  customArtist_startsWith?: String | null
  customArtist_endsWith?: String | null
  customArtist_in?: String[] | String | null
  userId_eq?: ID_Input | null
  userId_in?: ID_Output[] | ID_Output | null
  itemDetailsId_eq?: ID_Input | null
  itemDetailsId_in?: ID_Output[] | ID_Output | null
}

export interface CollectionItemWhereUniqueInput {
  id: String
}

export interface ItemCreateInput {
  mbid?: String | null
  rymId?: Float | null
  spotifyId?: ID_Input | null
  title?: String | null
  disambiguation?: String | null
  artist?: String | null
}

export interface ItemUpdateInput {
  mbid?: String | null
  rymId?: Float | null
  spotifyId?: ID_Input | null
  title?: String | null
  disambiguation?: String | null
  artist?: String | null
}

export interface ItemWhereInput {
  id_eq?: String | null
  id_in?: String[] | String | null
  createdAt_eq?: String | null
  createdAt_lt?: String | null
  createdAt_lte?: String | null
  createdAt_gt?: String | null
  createdAt_gte?: String | null
  createdById_eq?: String | null
  updatedAt_eq?: String | null
  updatedAt_lt?: String | null
  updatedAt_lte?: String | null
  updatedAt_gt?: String | null
  updatedAt_gte?: String | null
  updatedById_eq?: String | null
  deletedAt_all?: Boolean | null
  deletedAt_eq?: String | null
  deletedAt_lt?: String | null
  deletedAt_lte?: String | null
  deletedAt_gt?: String | null
  deletedAt_gte?: String | null
  deletedById_eq?: String | null
  mbid_eq?: String | null
  mbid_contains?: String | null
  mbid_startsWith?: String | null
  mbid_endsWith?: String | null
  mbid_in?: String[] | String | null
  rymId_eq?: Int | null
  rymId_gt?: Int | null
  rymId_gte?: Int | null
  rymId_lt?: Int | null
  rymId_lte?: Int | null
  rymId_in?: Int[] | Int | null
  spotifyId_eq?: ID_Input | null
  spotifyId_in?: ID_Output[] | ID_Output | null
  title_eq?: String | null
  title_contains?: String | null
  title_startsWith?: String | null
  title_endsWith?: String | null
  title_in?: String[] | String | null
  disambiguation_eq?: String | null
  disambiguation_contains?: String | null
  disambiguation_startsWith?: String | null
  disambiguation_endsWith?: String | null
  disambiguation_in?: String[] | String | null
  artist_eq?: String | null
  artist_contains?: String | null
  artist_startsWith?: String | null
  artist_endsWith?: String | null
  artist_in?: String[] | String | null
}

export interface ItemWhereUniqueInput {
  id: String
}

export interface UserCreateInput {
  username: String
  email?: String | null
  bio?: String | null
}

export interface UserUpdateInput {
  username?: String | null
  email?: String | null
  bio?: String | null
}

export interface UserWhereInput {
  id_eq?: String | null
  id_in?: String[] | String | null
  createdAt_eq?: String | null
  createdAt_lt?: String | null
  createdAt_lte?: String | null
  createdAt_gt?: String | null
  createdAt_gte?: String | null
  createdById_eq?: String | null
  updatedAt_eq?: String | null
  updatedAt_lt?: String | null
  updatedAt_lte?: String | null
  updatedAt_gt?: String | null
  updatedAt_gte?: String | null
  updatedById_eq?: String | null
  deletedAt_all?: Boolean | null
  deletedAt_eq?: String | null
  deletedAt_lt?: String | null
  deletedAt_lte?: String | null
  deletedAt_gt?: String | null
  deletedAt_gte?: String | null
  deletedById_eq?: String | null
  username_eq?: String | null
  username_contains?: String | null
  username_startsWith?: String | null
  username_endsWith?: String | null
  username_in?: String[] | String | null
  email_eq?: String | null
  email_contains?: String | null
  email_startsWith?: String | null
  email_endsWith?: String | null
  email_in?: String[] | String | null
  bio_eq?: String | null
  bio_contains?: String | null
  bio_startsWith?: String | null
  bio_endsWith?: String | null
  bio_in?: String[] | String | null
}

export interface UserWhereUniqueInput {
  id: String
}

export interface BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
}

export interface DeleteResponse {
  id: ID_Output
}

export interface BaseModel extends BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
}

export interface BaseModelUUID extends BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
}

export interface CollectionItem extends BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
  customTitle?: String | null
  customArtist?: String | null
  user?: User | null
  userId: String
  itemDetails?: Item | null
  itemDetailsId: String
}

export interface Item extends BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
  mbid?: String | null
  rymId?: Int | null
  spotifyId?: String | null
  title?: String | null
  disambiguation?: String | null
  artist?: String | null
  collectionItem?: Array<CollectionItem> | null
}

export interface StandardDeleteResponse {
  id: ID_Output
}

export interface User extends BaseGraphQLObject {
  id: ID_Output
  createdAt: DateTime
  createdById: String
  updatedAt?: DateTime | null
  updatedById?: String | null
  deletedAt?: DateTime | null
  deletedById?: String | null
  version: Int
  username: String
  email?: String | null
  bio?: String | null
  collection?: Array<CollectionItem> | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The javascript `Date` as string. Type represents date and time as the ISO Date string.
*/
export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string