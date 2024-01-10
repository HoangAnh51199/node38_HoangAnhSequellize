import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';


const app = express();
// add middleware đễ express hiểu body nhận về là object (json)
app.use(express.json()); //1 middleware
app.use(rootRoutes);//1 middleware

//b6: setup port cho BE -> 8000
app.listen("8080", () => {
    console.log("BE is starting");
});