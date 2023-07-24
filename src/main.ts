import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const PORT = process.env.PORT || 3030;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api");
    await app.listen(PORT, () => {
        console.log(`Listening ${PORT}-port`);
    });
}
bootstrap();
