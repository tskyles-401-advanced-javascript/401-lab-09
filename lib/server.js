'use strict';

require('dotenv').config('../.env');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const errorHandler = require('./middleware/500');
const notFoundHandler = require('./middleware/404');

const apiRouter = require('../routes/routes');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.json());

app.use('/docs', express.static('docs'));

app.get('/', (req,res,next) => {
  res.json('Welcome!');
});
app.use(apiRouter);
app.use('*', notFoundHandler);
app.use(errorHandler);

console.log('hello');
/** 
 * @module server
*/
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  },
};