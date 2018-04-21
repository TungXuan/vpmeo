import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
import path from 'path';
import { Server } from 'http';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Agenda from 'agenda';

import { dbUrl } from './config';
import routes from './routes';
import { initData } from './startUp';
import { sendPostcard } from './controllers/postcards';
const agenda = new Agenda({ db: { address: 'mongodb://127.0.0.1/agenda' } });

agenda.define('send postcard', async (job, done) => {
  await sendPostcard(job.attrs.data);
  done();
});
agenda.on('ready', () => {
  agenda.start();
});
dotenv.config();

export const app = express();
mongoose.connect(dbUrl).then(() => {
  initData();
}, (err) => {
  console.log(err);
});

const appPort = process.env.PORT;

app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // eslint-disable-line
app.use(express.static(path.join(__dirname, 'public'))); // eslint-disable-line
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 1000000,
}));
app.use(cookieParser());
app.use(logger('dev'));

export const server = Server(app);

app.use('/', routes);

/* ----------  Errors  ---------- */

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * development error handler
 * will print stacktrace
 */
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    new Error(err); // eslint-disable-line no-new
  });
}

/**
 * production error handler
 * no stacktraces leaked to user
 */
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

server.listen(appPort);

export default app;
