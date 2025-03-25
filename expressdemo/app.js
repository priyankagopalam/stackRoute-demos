const express = require('express');
const routes = require('./routes');
const log = require('./middlewares/logger');

const app = express();
app.use(express.json());
app.use(log);
app.use('/api/v1', routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})