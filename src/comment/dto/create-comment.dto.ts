import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @ApiProperty({ example: "Comment1", description: "Kommentariya" })
    @IsString()
    @IsNotEmpty()
    text: string;

    @ApiProperty({ example: 1, description: "User id raqami" })
    @IsNumber()
    user_id: number;

    @ApiProperty({ example: 1, description: "Photo id raqami" })
    @IsNumber()
    photo_id: number;
}
