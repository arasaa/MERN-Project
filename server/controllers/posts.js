import PostMessage from '../models/postMessage.js'
import mongoose  from 'mongoose';


export const getPosts = async (req, res) =>{
    try{
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    const body = req.body
    const newPost = new PostMessage(body)

    try {
        await newPost.save()
        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

//updating method 
//this function is depends with routes/Posts
//(router.dispatch('./:id', updatePost))
export const updatePost =  async (req, res) => {
    const {id} = req.params
    const post = req.body
    //chicking if the _id is from Mongoose
    if(!mongoose.Types.Object.isValid(_id)) return res.status(404).send('no post with that id');

    //updating Message logic
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
    res.jeson(updatedPost)
}