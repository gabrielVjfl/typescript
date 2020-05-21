import {Router} from 'express'

const routes = Router()

routes.get('/oi', (req,res) => {
    res.send("testando routes")
});


export default routes