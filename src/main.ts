import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const PORT = process.env.PORT || 3030;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api");

    const config = new DocumentBuilder()
        .setTitle("Instagram-backend Project")
        .setDescription("REST API")
        .setVersion("1.0.0")
        .addTag("NestJS, Postgres, Sequelize")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);

    await app.listen(PORT, () => {
        console.log(`Listening ${PORT}-port`);
    });
}
bootstrap();
