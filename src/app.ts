import 'reflect-metadata';
import express, { Express } from 'express';
require('dotenv').config();
import bodyParser from 'body-parser';
import cors from 'cors';

import { UserModule } from './users'
import { AuthModule } from './auth';
import { SongModule } from './songs';

// initialize modules
const userModule = new UserModule().getModule();
const authModule = new AuthModule().getModule();
const songModule = new SongModule().getModule();


const app: Express = express();
const port = process.env.PORT;

// import external modules into application
app.use(bodyParser.json());
app.use(cors());

// import internal modules into application
app.use(userModule);
app.use(authModule);
app.use(songModule);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
