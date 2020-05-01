import { CollectionItem } from './collection-item.model';
import { ArgsType, Field, InputType, ObjectType } from 'type-graphql';

@ArgsType()
export class CollectionAddInput {
	@Field(() => [CollectionAddInputItem])
	data!: CollectionAddInputItem[];
}

@InputType()
export class CollectionAddInputItem {
	@Field({ nullable: true })
	artist?: string;

	@Field({ nullable: true })
	artistId?: string;

	@Field({ nullable: true })
	customTitle?: string;

	@Field({ nullable: true })
	customArtist?: string;

	@Field(() => [String], { nullable: true })
	dislikes?: Array<string>;

	@Field(() => [String], { nullable: true })
	genres?: Array<string>;

	@Field(() => [String], { nullable: true })
	likes?: Array<string>;

	@Field({ nullable: true })
	mbid?: string;

	@Field({ nullable: true })
	plays?: number;

	@Field({ nullable: true })
	rating?: string;

	@Field({ nullable: true })
	releaseDate?: string;

	@Field({ nullable: true })
	review?: string;

	@Field({ nullable: true })
	rymId?: string;

	@Field({ nullable: true })
	spotifyId?: string;

	@Field(() => [String], { nullable: true })
	tags?: Array<string>;

	@Field({ nullable: true })
	title?: string;
}

@ObjectType()
export class CollectionAddResponse {
	@Field(() => [CollectionItem])
	itemsAdded!: Array<CollectionItem>;

	@Field(() => [CollectionItem])
	itemsUpdated!: Array<CollectionItem>;
}
