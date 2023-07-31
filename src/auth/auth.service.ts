import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./../users/users.service";
import {
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { User } from "../users/model/user.model";
import { LoginDto } from "./dto/login-auth.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    private async generateToken(user: User) {
        const payload = { id: user.id, name: user.name };
        return { token: this.jwtService.sign(payload) };
    }

    async login(loginDto: LoginDto) {
        const user = await this.validateUser(loginDto);
        if (!user) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND);
            // throw new NotFoundException("User not found")
        }
        return this.generateToken(user);
    }

    private async validateUser(loginDto: LoginDto) {
        const user = await this.usersService.getUserByUsername(
            loginDto.username
        );
        if (!user) {
            throw new UnauthorizedException(
                "Email or Password is incorrect!!!"
            );
        }
        const validPassword = await bcrypt.compare(
            loginDto.password,
            user.hashed_password
        );
        if (validPassword) {
            return user;
        }
        throw new UnauthorizedException("Email or Password is incorrect!!!");
    }
}
