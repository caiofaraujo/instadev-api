require('dotenv').config();
const routes = require('./routes');
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(routes);
app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});