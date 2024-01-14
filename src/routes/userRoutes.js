import express from 'express';
import { createLike, createOrder, createRate, deleteLike, getLike, getListLikeByUser } from '../controllers/userControllers.js';

const userRoutes = express.Router();

userRoutes.get("/getlike", getLike);
userRoutes.post("/createlike", createLike); // ko can them like_id
userRoutes.delete("/deleteLike/:UserId/:ResId", deleteLike); 
//userRoutes.delete("/deleteLike/", deleteLike); // http://localhost:8080/user/deleteLike/?userId=4&resId=5 query
userRoutes.get("/getListLikeByUser/:UserId", getListLikeByUser);
userRoutes.post("/create-rate", createRate);
userRoutes.post("/create-order", createOrder);


export default userRoutes;