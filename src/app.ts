import express from 'express';
import issueRoutes from './routes/issueRoutes';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', issueRoutes);
app.use(errorHandler);
export default app;
