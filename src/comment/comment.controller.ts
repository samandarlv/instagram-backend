import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Req,
    UseGuards,
} from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { UserSelfGuard } from "src/guards/user-self.guard";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Kommentariya")
@UseGuards(JwtAuthGuard)
@Controller("comment")
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @ApiOperation({ summary: "Kommentariya qo'shish" })
    @Post()
    create(@Body() createCommentDto: CreateCommentDto) {
        return this.commentService.create(createCommentDto);
    }

    @ApiOperation({ summary: "Kommentariyalarni ko'rish" })
    @Get()
    findAll() {
        return this.commentService.findAll();
    }

    @ApiOperation({ summary: "Kommentariyalarga like/dislike bosish" })
    @Patch("like/:id")
    likeComment(@Param("id") id: string, @Req() req: Request) {
        // @ts-ignore
        const userId = req.user.id;

        return this.commentService.likeComment(+id, userId);
    }

    @ApiOperation({ summary: "Kommentariyani id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.commentService.findOne(+id);
    }

    @ApiOperation({ summary: "Kommentariyalarni photo_id orqali ko'rish" })
    @Get("photo/:id")
    findByPhotoId(@Param("id") id: string) {
        return this.commentService.findByPhotoId(+id);
    }

    @ApiOperation({ summary: "Kommentariyalarni id orqali yangilash" })
    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateCommentDto: UpdateCommentDto
    ) {
        return this.commentService.update(+id, updateCommentDto);
    }

    @ApiOperation({ summary: "Kommentariyalarni id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.commentService.remove(+id);
    }
}
