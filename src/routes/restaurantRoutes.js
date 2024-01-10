import express from 'express';
import { getListLikeByRes, getListRateByRes} from '../controllers/restaurauntControllers.js';

const restaurantRoutes = express.Router();
 
 restaurantRoutes.get("/getListresLike-byRes/:ResId", getListLikeByRes);
 restaurantRoutes.get("/getListresRate-byRes/:ResId", getListRateByRes);


export default restaurantRoutes;