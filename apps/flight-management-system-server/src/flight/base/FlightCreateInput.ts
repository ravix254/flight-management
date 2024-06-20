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
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsDate,
  ValidateNested,
} from "class-validator";
import { EnumFlightApproveStatus } from "./EnumFlightApproveStatus";
import { Type } from "class-transformer";
import { MaintenanceRecordCreateNestedManyWithoutFlightsInput } from "./MaintenanceRecordCreateNestedManyWithoutFlightsInput";
import { EnumFlightStatus } from "./EnumFlightStatus";

@InputType()
class FlightCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  approvalComments?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  approvalStatus?: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumFlightApproveStatus,
  })
  @IsEnum(EnumFlightApproveStatus)
  @IsOptional()
  @Field(() => EnumFlightApproveStatus, {
    nullable: true,
  })
  approveStatus?: "agreed" | "rejected" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  arrivalAirport?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  arrivalTime?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  associatedPilot?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  departureAirport?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  departureTime?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  flightNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => MaintenanceRecordCreateNestedManyWithoutFlightsInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceRecordCreateNestedManyWithoutFlightsInput)
  @IsOptional()
  @Field(() => MaintenanceRecordCreateNestedManyWithoutFlightsInput, {
    nullable: true,
  })
  maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutFlightsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  remark?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumFlightStatus,
  })
  @IsEnum(EnumFlightStatus)
  @IsOptional()
  @Field(() => EnumFlightStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { FlightCreateInput as FlightCreateInput };
