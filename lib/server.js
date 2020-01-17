'use strict';

require('dotenv').config('../.env');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const errorHandler = ('./middleware/500.js');
const notFoundHandler = ('./middleware/404.js');

const apiRouter = require('../routes');

const app = express();

app.use(express.json());
app.use(apiRouter);
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  };
}