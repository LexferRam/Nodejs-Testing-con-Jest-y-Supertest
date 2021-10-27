import app from '../src/app';
import request from 'supertest';

describe('GET /tasks', () => {

    test('should respond with a 200 status code',async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.status).toBe(200)
    });

    test('should respond with an array', async() => {
        const response = await request(app).get('/tasks').send()
        expect(response.body).toBeInstanceOf(Array)
    });

})

describe('POST /tasks', () => {
    
    describe('given a title and description', () => {

        const newTask = {
            title: "test task",
            description: "test task description"
        }

        test('should respond with a 200 status code', async() => {
            const response = await request(app).post('/tasks').send(newTask)
            expect(response.statusCode).toBe(200)
        })
    
        test("should have a content type: application/json in header", async() => {
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.headers['content-type']).toEqual(
                expect.stringContaining("json")
            )
        })
    
        test("should respond with an task id", async() => {
            const response = await request(app).post("/tasks").send(newTask)
            expect(response.body.id).toBeDefined()
        })
    })

    
})