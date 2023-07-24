import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from "sequelize-typescript";
import { Photo } from "src/photos/models/photo.model";
import { User } from "src/users/model/user.model";

interface CommentAttr {
    user_id: number;
    photo_id: number;
    text: string;
}

@Table({ tableName: "comments" })
export class Comment extends Model<Comment, CommentAttr> {
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
        type: DataType.TEXT,
        allowNull: false,
    })
    text: string;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Photo)
    photo: Photo;
}
