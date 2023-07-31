import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "Sobir", description: "Foydalanuvchi ismi" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: "sobir", description: "Foydalanuvchi nomi" })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: "password", description: "Foydalanuvchi paroli" })
    @IsString()
    @IsNotEmpty()
    password: string;
}
