import "./tracing";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ProductModule } from './product/product.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5500','https://www.xyz.com'],
    methods: 'GET,POST',
    allowHeaders: 'Content-Type, Authorization'
  });

  const config = new DocumentBuilder()
  .setTitle('Product API')
  .setDescription('Product API Documentation for Developers')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [ProductModule]
  });
  
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();