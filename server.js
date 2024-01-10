const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const ConnectDB = require('./config/ConnectDB');

dotenv.config();

//connect to db
ConnectDB();



//rest object

const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

//routes

app.use('/api/v1/users', require('./routes/UserRoute'));

//port
const port = 8080

//listen serve

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})