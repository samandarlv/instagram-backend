import { HttpException, HttpStatus, Injectable, Req } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Like } from "./model/like.model";
import { CreateLikeDto } from "./dto/create-like.dto";

@Injectable()
export class LikesService {
    constructor(@InjectModel(Like) private likeRepo: typeof Like) {}

    async likePhoto(req: Request, createLikeDto: CreateLikeDto) {
        const like = await this.likeRepo.findOne({
            where: {
                photo_id: createLikeDto.photo_id,
            },
        });

        if (like) {
            const deletedCount = await this.likeRepo.destroy({
                where: {
                    id: like.id,
                },
            });

            if (deletedCount < 1) {
                throw new HttpException(
                    "Error while dislike",
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
            return {
                message: "disliked successfully",
            };
        }
        // @ts-ignore
        console.log(req.user.id);

        await this.likeRepo.create({
            photo_id: createLikeDto.photo_id,
            // @ts-ignore
            user_id: req.user.id,
        });

        return {
            message: "liked successfully",
        };
    }

    async getAll() {
        return this.likeRepo.findAll();
    }
}
