/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PilotWhereInput } from "./PilotWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PilotListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PilotWhereInput,
  })
  @ValidateNested()
  @Type(() => PilotWhereInput)
  @IsOptional()
  @Field(() => PilotWhereInput, {
    nullable: true,
  })
  every?: PilotWhereInput;

  @ApiProperty({
    required: false,
    type: () => PilotWhereInput,
  })
  @ValidateNested()
  @Type(() => PilotWhereInput)
  @IsOptional()
  @Field(() => PilotWhereInput, {
    nullable: true,
  })
  some?: PilotWhereInput;

  @ApiProperty({
    required: false,
    type: () => PilotWhereInput,
  })
  @ValidateNested()
  @Type(() => PilotWhereInput)
  @IsOptional()
  @Field(() => PilotWhereInput, {
    nullable: true,
  })
  none?: PilotWhereInput;
}
export { PilotListRelationFilter as PilotListRelationFilter };
