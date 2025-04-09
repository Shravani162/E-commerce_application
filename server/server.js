import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();
import healthRouter from './routes/healthRoutes.js';
import usersRouter from './routes/userRoutes.js';
import baseRouter from './routes/baseRoutes.js';
import adminRouter from './routes/adminRoutes.js';

const app = express();
connectDB();
const allowedOrigins = [
    'http://localhost:5173',
    
];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// API Routes
app.use('/', healthRouter);
app.use('/api', baseRouter);
app.use('/api/user', usersRouter);
app.use('/api/admin', adminRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
