import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle("Your API Title")
    .setDescription("Your API Description")
    .setVersion("1.0")
    .addBearerAuth() // Add this line to enable bearer token authentication
    .build();

  const document = SwaggerModule.createDocument(app, options);

  // Add security definitions
  document.components.securitySchemes = {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  };

  SwaggerModule.setup("api", app, document);

  await app.listen(8080);
}
bootstrap();
