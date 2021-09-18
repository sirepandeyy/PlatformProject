"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
require('dotenv').config();
const port = process.env.port || 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: "http://localhost:4200",
        credentials: true
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('StudentCourse-Registration Microservice')
        .setDescription('StudentCourse-Registration Microservice API Documentation')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.startAllMicroservicesAsync();
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map