import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import UserModel from './model/User.model.js'

// import router from './router/route.js';

const app = express();

// const userModel=require('./model/User.model.js')
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); 

const port = 8080;

/** HTTP GET Request */
app.post('/register',function (req,res) {
    const requestData = req.body;
    // UserModel.findOne({email:email})
    // .then(user=>{
    //     if(user){
    //         res.json("Exist")
    //     }
    // })
    UserModel.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))

})

app.post('/login',function (req,res) {
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password) {
                res.json("Success")
            }
            else{
                res.json("Pwd")
            }
        }
        else{
            res.json("Email")
        }
    })
})
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});




/** api routes */
// app.use('/api', router)

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})
