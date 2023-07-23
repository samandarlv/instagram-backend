import {
    Column,
    DataType,
    Model,
    Table,
    BelongsToMany,
} from "sequelize-typescript";
import { Photo } from "src/photos/models/photo.model";
import { UserPhoto } from "src/photos/models/userPhoto.model";

interface userAttrs {
    id: string;
    name: string;
    description: string;
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
    })
    username: string;

    @Column({
        type: DataType.STRING,
    })
    password: string;

    // photo modeli Many to Many relationship qilish uchun
    @BelongsToMany(() => Photo, () => UserPhoto)
    photos: Photo[];
}
