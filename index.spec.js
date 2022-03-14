const request = require('supertest')
const app = require('./server')

describe('Test My app server', async () =>{
    it('shoud get main routre', () =>{
        const res = await request(app).get('/')

        expect(res.body).toHaveProperty('message')
    })
})

