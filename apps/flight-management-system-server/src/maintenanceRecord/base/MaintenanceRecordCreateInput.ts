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
import { FlightWhereUniqueInput } from "../../flight/base/FlightWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MaintenanceRecordCreateInput {
  @ApiProperty({
    required: false,
    type: () => FlightWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlightWhereUniqueInput)
  @IsOptional()
  @Field(() => FlightWhereUniqueInput, {
    nullable: true,
  })
  flight?: FlightWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  maintainer?: string | null;
}

export { MaintenanceRecordCreateInput as MaintenanceRecordCreateInput };
