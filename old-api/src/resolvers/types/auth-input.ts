import { InputType, Field } from 'type-graphql';
import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

@InputType()
export class AuthCredentialsInput {
  @Field()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @Field()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: 'password too weak' },
  )
  password: string;
}
