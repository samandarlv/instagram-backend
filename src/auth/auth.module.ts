import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: "MyVeryVerySecret",
            signOptions: {
                expiresIn: "24h",
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
