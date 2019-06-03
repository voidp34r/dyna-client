import express from 'express';
import favicon from 'serve-favicon';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

import config from './config';

const {
  app: {
    packageInfo,
    name,
    version,
    hostname,
    port,
    nodeEvn,
  },
} = config();


const app = express();

// app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: '128mb' }));
app.use(express.static('.'));

export default () => {
  app.get('/', (req, res) => {
    const {
      hostname,
      port,
      method,
      headers,
      params,
    } = req;


    const serverInfo = {
      hostname,
      port,
    };

    const info = {
      name,
      version,
    };

    const request = {
      headers: JSON.stringify(headers),
      method,
      params,
    }

    const data = {
      serverInfo,
      info,
      request,
      packageInfo,
      nodeEvn,
    };

    return res.status(200).json(data);
  });

  app.get('/void', (req, res) => {
    const {
      hostname,
      port,
      method,
      headers,
      params,
    } = req;


    const serverInfo = {
      hostname,
      port,
    };

    const info = {
      name,
      version,
    };

    const request = {
      headers: JSON.stringify(headers),
      method,
      params,
    }

    const data = {
      serverInfo,
      info,
      request,
      packageInfo,
      nodeEvn,
    };

    return res.status(200).json(data);
  });

  return app;
};
