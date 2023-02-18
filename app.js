const express = require('express');
const cors = require('cors');
const route = require('./src/routes/userRoute');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(route);

app.listen(process.env.APP_PORT, () => {
    console.log(`server running on port ${process.env.APP_PORT}`);

});