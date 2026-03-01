const express = require('express');
const dotenv = require('dotenv');
const ZerodhaRouter = require('./route/Zerodha.route');
dotenv.config();

const app = express();
const PORT = process.env.PORT ;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/zerodha', ZerodhaRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});