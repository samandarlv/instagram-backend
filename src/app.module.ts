import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { PhotosModule } from "./photos/photos.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { LikesModule } from "./likes/likes.module";
import { CommentsModule } from "./comments/comments.module";
import { User } from "./users/model/user.model";
import { Photo } from "./photos/models/photo.model";
import { UserPhoto } from "./photos/models/userPhoto.model";
import { JwtModule } from "@nestjs/jwt";
import { Comment } from "./comments/model/comment.model";
import { Like } from "./likes/model/like.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
        }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [User, Photo, UserPhoto, Comment, Like],
            autoLoadModels: true,
            logging: (res) => {
                console.log(res);
            },
        }),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: "60s" },
        }),
        UsersModule,
        PhotosModule,
        AuthModule,
        CommentsModule,
        LikesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
