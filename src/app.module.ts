import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { PhotosModule } from "./photos/photos.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { LikesModule } from "./likes/likes.module";
import { CommentModule } from "./comment/comment.module";
import { User } from "./users/model/user.model";
import { Photo } from "./photos/models/photo.model";
import { UserPhoto } from "./photos/models/userPhoto.model";
import { JwtModule } from "@nestjs/jwt";
import { Comment } from "./comment/models/comment.model";
import { Like } from "./likes/model/like.model";
import { Asset } from "./assets/model/asset.model";
import { Role } from "./roles/models/role.model";
import { UserRoles } from "./roles/models/user-role.model";

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
            models: [
                User,
                Photo,
                UserPhoto,
                Comment,
                Like,
                Asset,
                Role,
                UserRoles,
            ],
            autoLoadModels: true,
            logging: false,
        }),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: "60s" },
        }),
        UsersModule,
        PhotosModule,
        AuthModule,
        CommentModule,
        LikesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
