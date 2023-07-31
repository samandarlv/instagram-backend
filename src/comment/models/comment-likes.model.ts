import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { Photo } from 'src/photos/models/photo.model';
import { User } from 'src/users/model/user.model';
import { Comment } from './comment.model';

@Table({ tableName: 'comment_like' })
export class CommentLike extends Model<CommentLike> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Comment)
  @Column({
    type: DataType.INTEGER,
  })
  comment_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;

  @BelongsTo(() => Comment)
  photo: Comment;
}
