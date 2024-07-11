import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/user';
import { productRouter } from './routes/product';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/products", productRouter);

mongoose.connect("mongodb+srv://pranjalgram:ecommercepassword@ecommerce.y1c2eqr.mongodb.net/ecommerce");

app.listen(3001, () => console.log("SERVER STARTED"));