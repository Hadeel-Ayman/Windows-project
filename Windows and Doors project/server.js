const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const dbConnection = require('./config/dbConnection');
const globalError = require('./middlewares/errorMiddleware');
const ApiError = require('./utils/ApiError');
const bodyParser = require('body-parser');

// Import routes
const AllRoutes = require('./routes');

dotenv.config({ path: 'config.env' });

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // السماح بإرسال بيانات الاعتماد
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// لتتمكن من التعامل مع بيانات JSON
app.use(express.json());


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`${process.env.NODE_ENV}`);
}

// Connect to DB
dbConnection();

// Routes
AllRoutes(app);

// Handle unknown routes
app.all('*', (req, res, next) => {
    return next(new ApiError(`Can't find this route ${req.originalUrl}`, 400));
});

// Global error handling
app.use(globalError);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
    console.error(`Unhandled Rejection: ${error}`);
    server.close(() => {
        console.log('Shutting down...');
        process.exit(1);
    });
});
