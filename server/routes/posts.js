//this file is for Routes and their logic will be in the posts.js in controller folder
import express from "express";
import {getPosts, createPost, updatePost} from "../controllers/posts.js"

const router = express.Router();



//sending respons for 5000/posts
router.get('/', getPosts);
router.post('/', createPost);
//the calling of the function controller Posts
router.patch('/:id', updatePost)

export default router;