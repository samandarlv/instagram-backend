import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import * as bcrypt from "bcrypt";
import { User } from "./model/user.model";
import { UserPhoto } from "../photos/models/userPhoto.model";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepo: typeof User) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
        const { name, username } = createUserDto;
        return this.userRepo.create({
            name,
            username,
            hashed_password: hashedPassword,
        });
    }

    findAll(): Promise<User[]> {
        return this.userRepo.findAll({
            attributes: {
                // qaysi rowlarni qaytarmasligimizni aytamiz, men create va update datelarni qaytarmoqchi emasman
                exclude: ["createdAt", "updatedAt"],
            },
            include: {
                // userga barcha relation qilingan tablelarni qo'shish
                all: true,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            },
        });
    }

    findOne(id: number): Promise<User> {
        return this.userRepo.findByPk(id, {
            include: {
                all: true,
                attributes: {
                    exclude: ["createdAt", "updatedAt", "UserPhoto"],
                },
            },
        });
    }

    async update(
        id: number,
        updateUserDto: UpdateUserDto
    ): Promise<User | { msg: string }> {
        const [updatedCount, updatedUsers] = await this.userRepo.update(
            updateUserDto,
            { where: { id }, returning: true }
        );

        if (updatedCount > 0) return updatedUsers[0];

        return { msg: "Not found by given id" };
    }

    async remove(id: number): Promise<{ msg: string }> {
        const deletedCount = await this.userRepo.destroy({
            where: { id },
        });

        if (deletedCount > 0) return { msg: "deleted successfully" };

        return { msg: "Not found by given id" };
    }

    async getUserByUsername(username: string): Promise<User> {
        const user = await this.userRepo.findOne({
            where: { username },
            include: { all: true },
        });
        return user;
    }
}
