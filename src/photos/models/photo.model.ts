import {
    Column,
    DataType,
    Model,
    Table,
    BelongsToMany,
    HasMany,
} from "sequelize-typescript";
import { UserPhoto } from "./userPhoto.model";
import { User } from "src/users/model/user.model";
import { Comment } from "src/comments/model/comment.model";
import { Like } from "src/likes/model/like.model";

interface photoAttrs {
    id: string;
    title: string;
    link: string;
}

@Table({ tableName: "photo" })
export class Photo extends Model<Photo, photoAttrs> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: string;

    @Column({
        type: DataType.STRING(120),
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    link: string;

    // user table bilan Many-to-Many relationship qilish uchun
    @BelongsToMany(() => User, () => UserPhoto)
    users: User[];

    @HasMany(() => Comment)
    comments: Comment[];

    @HasMany(() => Like)
    likes: Like[];
}
