import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString, Min, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @IsString()
  @MinLength(2)
  @Field()
  name: string;

  @IsString()
  @MinLength(2)
  @Field()
  lastName: string;

  @IsNumber()
  @Min(0)
  @Field()
  age: number;
}
