import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./../users/users.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}
}
