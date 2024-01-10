// tổng hợp tất cả các routes của các routes khác: , userRoutes,......

import express from 'express';
import restaurantRoutes from './restaurantRoutes.js';
import userRoutes from './userRoutes.js';

const rootRoutes = express.Router();

rootRoutes.use("/user", userRoutes);
 rootRoutes.use("/restaurant", restaurantRoutes);

export default rootRoutes;