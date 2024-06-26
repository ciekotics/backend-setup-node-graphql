import request from 'supertest';
import { type Express } from 'express';
import { createApp } from '../server';

describe('/api/users', () => {
  let app: Express;

  beforeAll(() => {
    app = createApp();
  })

  // beforeAll(async () => {
  //   app = await createApp();
  // })

  it('should return an empty array when getting /api/users', async () => {
    const response = await request(app).get('/api/users');

    expect(response.body).toStrictEqual([]);
  })
})