import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { PhotosService } from "./photos.service";
import { CreatePhotoDto } from "./dto/create-photo.dto";
import { UpdatePhotoDto } from "./dto/update-photo.dto";
import { Photo } from "./models/photo.model";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Postlar")
@Controller("photo")
export class PhotosController {
    constructor(private readonly photosService: PhotosService) {}

    @ApiOperation({ summary: "Yangi post qo'shish" })
    @Post()
    create(@Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
        return this.photosService.create(createPhotoDto);
    }

    @ApiOperation({ summary: "Postlarni ko'rish" })
    @Get()
    findAll(): Promise<Photo[]> {
        return this.photosService.findAll();
    }

    @ApiOperation({ summary: "Postlarni id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Photo> {
        return this.photosService.findOne(+id);
    }

    @ApiOperation({ summary: "faqat shu user yaratgan photolarni olish uchun" })
    @Get("user/:id")
    findOneByUser(@Param("id") id: string): Promise<Photo[]> {
        return this.photosService.findByUserId(+id);
    }

    @ApiOperation({ summary: "Postlarni id orqali yangilash" })
    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updatePhotoDto: UpdatePhotoDto
    ): Promise<
        | Photo
        | {
              msg: string;
          }
    > {
        return this.photosService.update(+id, updatePhotoDto);
    }

    @ApiOperation({ summary: "Postlarni id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string): Promise<
        | Photo
        | {
              msg: string;
          }
    > {
        return this.photosService.remove(+id);
    }
}
