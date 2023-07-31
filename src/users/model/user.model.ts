import {
    Column,
    DataType,
    Model,
    Table,
    BelongsToMany,
    HasMany,
} from "sequelize-typescript";
import { Like } from "../../likes/model/like.model";
import { Photo } from "../../photos/models/photo.model";
import { UserPhoto } from "../../photos/models/userPhoto.model";

interface userAttrs {
    name: string;
    username: string;
    hashed_password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, userAttrs> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: string;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @Column({
        type: DataType.TEXT,
        unique: true,
    })
    username: string;

    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;

    // photo modeli Many to Many relationship qilish uchun
    @BelongsToMany(() => Photo, () => UserPhoto)
    photos: Photo[];

    @HasMany(() => Like)
    likes: Like[];
}
