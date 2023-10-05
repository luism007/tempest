import express from 'express';
import bodyParser from 'body-parser';
const port = 8080;
const app = express();

app.use(bodyParser.json());


app.listen((port), () => {
    // tslint:disable-next-line:no-console
    console.log(`Tempest API listenining on ${port}`);
});