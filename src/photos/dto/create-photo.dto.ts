import { User } from "src/users/model/user.model";
import {
    ArrayMaxSize,
    ArrayMinSize,
    ArrayNotEmpty,
    IsNotEmpty,
    IsString,
} from "class-validator";

export class CreatePhotoDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    link: string;

    @IsNotEmpty()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ArrayMaxSize(2)
    users: User[];
}
