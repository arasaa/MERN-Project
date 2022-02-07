import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import router from './routes/posts.js';


const app = express();

app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
app.use(cors());


//localhost:5000/posts
app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://Mern:me123@cluster0.pj5pk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
.then(() => 
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
.catch(err => console.log(err.message))



