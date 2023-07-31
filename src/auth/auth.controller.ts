import { Controller, Get, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-auth.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: "Login qilish" })
    @Post()
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
