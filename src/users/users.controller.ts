import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./model/user.model";

@ApiTags("Foydalanuvchilar")
@Controller("user")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({ summary: "Foydalanuvchi yaratish" })
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @ApiOperation({ summary: "Foydalanuvchilarni ko'rish" })
    @ApiResponse({ status: 200, description: "List of users", type: [User] })
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @ApiOperation({ summary: "Foydalanuvchini ID si orqali ko'rish" })
    @ApiResponse({ status: 200, description: "List of users", type: [User] })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.usersService.findOne(+id);
    }

    @ApiOperation({ summary: "Foydalanuvchini ID si orqali yangilash" })
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @ApiOperation({ summary: "Foydalanuvchini ID si orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.usersService.remove(+id);
    }
}
