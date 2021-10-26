import app from '../src/app';
import request from 'supertest';

describe('GET /task', () => {

    test('should respond with a 200 status code',async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.status).toBe(200)
    });

})

