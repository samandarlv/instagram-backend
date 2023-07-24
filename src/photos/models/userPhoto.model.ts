import {
    Table,
    Model,
    Column,
    ForeignKey,
    DataType,
} from "sequelize-typescript";
import { User } from "src/users/model/user.model";
import { Photo } from "./photo.model";

@Table({ tableName: "user_photo", timestamps: false })
export class UserPhoto extends Model<UserPhoto> {
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
    })
    userId: number;

    @ForeignKey(() => Photo)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
    })
    photoId: number;
}
