const express = require('express');
const appRouter = require('./routes/index')

const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../build')));

app.use('/', appRouter);

app.get('/', (_, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port);
