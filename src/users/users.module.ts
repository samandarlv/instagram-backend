import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { User } from "./model/user.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { Photo } from "../photos/models/photo.model";
import { UserPhoto } from "../photos/models/userPhoto.model";
import { Like } from "../likes/model/like.model";

@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
