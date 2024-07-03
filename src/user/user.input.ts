import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  nickname: string;
  @Field()
  phone: string;
  @Field()
  gender: string;
}
