//this file is for Routes and their logic will be in the posts.js in controller folder
import express from "express";
import {getPosts, createPost} from "../controllers/posts.js"

const router = express.Router();



//sending respons for 5000/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;