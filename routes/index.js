import express from 'express';
import apis from './api';
const routers = express();

routers.use('/api', apis);

export default routers;
