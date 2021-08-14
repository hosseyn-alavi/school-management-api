import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNumber, IsString, IsUUID, Min, MinLength } from 'class-validator';

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

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  @IsUUID('4')
  @Field()
  id: string;
}
