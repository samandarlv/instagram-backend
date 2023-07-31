import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateLikeDto {
    @ApiProperty({ example: 1, description: "Rasm id si" })
    @IsNumber()
    photo_id: number;
}
