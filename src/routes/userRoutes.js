import express from 'express';
import { createLike, createOrder, createRate, deleteLike, getLike, getListLikeByUser } from '../controllers/userControllers.js';

const userRoutes = express.Router();

userRoutes.get("/getlike", getLike);
userRoutes.post("/createlike", createLike); // ko can them like_id
userRoutes.delete("/deleteLike/:UserId/:ResId", deleteLike); // vd:http://localhost:8080/user/deleteLike/4/14
// userRoutes.delete("/deleteLike/?UserId=4&ResId=14", deleteLike);
userRoutes.get("/getListLikeByUser/:UserId", getListLikeByUser);
userRoutes.post("/create-rate", createRate);
userRoutes.post("/create-order", createOrder);


export default userRoutes;