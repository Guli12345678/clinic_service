import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import * as cookieParser from "cookie-parser";
import { WinstonModule } from "nest-winston";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { winstonConfig } from "./common/logging/winston.logging";
import { AllExceptionsFilter } from "./common/errors/error.handling";
async function start() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig),
  });
  app.useGlobalFilters(new AllExceptionsFilter());

  const config = new DocumentBuilder()
    .setTitle("Medical API")
    .setDescription(
      "API for managing appointments, diagnostics, treatments, and more."
    )
    .addServer("api")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  app.setGlobalPrefix("api");
  app.use(cookieParser());

  app.enableCors({
    origin: "http://localhost:3311",
    credentials: true,
  });

  const PORT = process.env.PORT;
  await app.listen(PORT ?? 3001, () => {
    console.log(
      " + ====================================================================== +"
    );
    console.log(
      `| |                                                                      | |`
    );
    console.log(
      `| | 📚             Server started at: http://localhost:${PORT}         📚   | |`
    );
    console.log(
      `| | 📚             Swagger included: http://localhost:${PORT}/docs     📚   | |`
    );
    console.log(
      `| |                                                                      | |`
    );
    console.log(
      " + ====================================================================== +"
    );
  });
}

start();
