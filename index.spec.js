const request = require('supertest')
const app = require('./server')

describe('Test My app server',  () =>{
    it('shoud get main routre', async () =>{
        const res = await request(app).get('/')

        expect(res.body).toHaveProperty('message')
    })
})

