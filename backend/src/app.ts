import express, { Application } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

import {router as AuthRouter } from './routes/auth-routes';

const port = 8080;

dotenv.config({path: path.resolve(__dirname, '../.env.development')});

const app: Application = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api/auth/', AuthRouter);

app.listen((port), () => {
    // tslint:disable-next-line:no-console
    console.log(`Tempest API listenining on ${port}`);
});