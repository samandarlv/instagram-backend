import { Controller, Post, Body, UseGuards, Req, Get } from "@nestjs/common";
import { LikesService } from "./likes.service";
import { CreateLikeDto } from "./dto/create-like.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";

@ApiTags("Like")
@UseGuards(JwtAuthGuard)
@Controller("likes")
export class LikesController {
    constructor(private readonly likesService: LikesService) {}

    @ApiOperation({ summary: "like bosish va dislike qilish" })
    @Post()
    create(@Req() req: Request, @Body() createLikeDto: CreateLikeDto) {
        return this.likesService.likePhoto(req, createLikeDto);
    }
}
