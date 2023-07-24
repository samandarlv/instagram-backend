import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from "sequelize-typescript";
import { Photo } from "src/photos/models/photo.model";
import { User } from "src/users/model/user.model";

interface LikeAttr {
    user_id: number;
    photo_id: number;
    like: boolean;
}

@Table({ tableName: "likes" })
export class Like extends Model<Like, LikeAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;

    @ForeignKey(() => Photo)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    photo_id: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    like: boolean;

    @BelongsTo(() => Photo)
    photo: Photo;

    @BelongsTo(() => User)
    users: User[];
}
