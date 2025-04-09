import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { MongoMemoryServer } from "mongodb-memory-server";
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from '../src/todo/todo.module';
import mongoose from 'mongoose';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    process.env.MONGO_URI = uri;

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TodoModule, MongooseModule.forRoot(uri)],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async()=>{
    await app.close();
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('POST new Todo', async () => {
    const todo = { _id: '1', description: 'Meeting at 9 AM', isCompleted: false };
    const res = await request(app.getHttpServer())
      .post('/todo')
      .send(todo)
      .expect(201)
    expect(res.body.description).toEqual('Meeting at 9 AM');
  });

  it('GET All Todos', async () => {
    const res = await request(app.getHttpServer())
      .get('/todo')
      .expect(200)
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET Todo By Id', async () => {
    const res = await request(app.getHttpServer())
      .get('/todo/1')
      .expect(200)
    expect(res.body.description).toEqual('Meeting at 9 AM')
  });

});
