import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @ApiProperty({ example: "user1", description: "Foydalanuvchi usernamei" })
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({
        example: "password",
        description: "Foydalanuvchi username ining paroli",
    })
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}
