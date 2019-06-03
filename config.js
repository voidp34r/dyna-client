import 'dotenv/config';
import packageInfo from './package.json';

export default () => {
  const {
    NAME: name = 'Void Cli',
    VERSION: version = '1.0.0',
    HOST: hostname = 'localhost',
    PORT: port = 3000,
    NODE_ENV: nodeEvn = 'development',
    PROJECT: packageInfo,
  } = process.env;

  const structuredSettings = {
    app: {
      packageInfo,
      name,
      version,
      hostname,
      port,
      nodeEvn,
    },
  };

  return structuredSettings;
};
