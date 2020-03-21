import { InputType, Field } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class AddItemInput {
  @Field()
  @IsNotEmpty()
  artist: string;

  @Field()
  @IsNotEmpty()
  album: string;

  @Field()
  mbid: string;

  @Field({ nullable: true })
  rating: string;

  // TODO: Add year, mbid, etc as optionals
}
