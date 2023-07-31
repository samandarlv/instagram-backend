import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../users/model/user.model";
import {
    ArrayMaxSize,
    ArrayMinSize,
    ArrayNotEmpty,
    IsNotEmpty,
    IsString,
} from "class-validator";

export class CreatePhotoDto {
    @ApiProperty({ example: "nimadir", description: "Rasm mavzusi" })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ example: "http://img/image1", description: "Rasm linki" })
    @IsNotEmpty()
    @IsString()
    link: string;

    @ApiProperty({ example: "[1,2]", description: "Foydalanuvchilar" })
    @IsNotEmpty()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ArrayMaxSize(2)
    users: User[];
}
