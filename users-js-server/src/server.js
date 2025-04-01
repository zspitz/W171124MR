import express, { json } from 'express';
import userRouter from './routes/users.js';
import { dbConnect } from './db.js';
import cors from 'cors';
import expressListRoutes from 'express-list-routes';

dbConnect();

const app = express();
app.use(cors());
app.use(json());

app.use('/users', userRouter);

app.use('/', (req, res) => res.sendStatus(404));

expressListRoutes(app);

app.listen(3000, () => console.log('Listening on port 3000'));
