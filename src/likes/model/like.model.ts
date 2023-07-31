import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { Photo } from "../../photos/models/photo.model";
import { User } from "../../users/model/user.model";

interface LikeAttr {
    user_id: number;
    photo_id: number;
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

    @BelongsTo(() => Photo)
    photo: Photo;

    @BelongsTo(() => User)
    users: User[];
}
