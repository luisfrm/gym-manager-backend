import request from 'supertest';
import { createApp, PORT, connectDB } from '../app.js';
import { jest } from '@jest/globals'

describe('Express App', () => {
  let app, server;
  app = createApp();

  beforeAll(async (done) => {
    server = app.listen(PORT);
    await connectDB();
    done();
  });

  afterAll((done) => {
    server.close();
    done();
  });

  it('should respond with "Hello World!" for the root route', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});