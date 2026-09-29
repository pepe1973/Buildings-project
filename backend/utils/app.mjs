import express from 'express';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.json());

app.set('view engine', ejs);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route-ok
import mainRouter from '../routes/backendroutes/mainRoutes.mjs';
app.use('/api', mainRouter);

import newBuildingRouter from '../routes/backendroutes/building/newBuildingRoutes.mjs';
app.use('/api/new-building', newBuildingRouter);

import buildingsRouter from '../routes/backendroutes/building/buildingsRoutes.mjs';
app.use('/api/buildings', buildingsRouter);

export default app;
