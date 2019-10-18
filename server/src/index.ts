import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/login.controller';
import './controllers/root.controller';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['laskdjf'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
