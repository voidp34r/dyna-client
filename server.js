
import 'babel-polyfill';
import 'dotenv/config';
import appBoostrap from './app';
import config from './config';

const {
  app: {
    name,
    version,
    hostname,
    port,
  },
} = config();

const app = appBoostrap();


app.on('error', () => {
  console.log(`${name} -v:${version} rodando em http://${hostname}:${port}`)
  console.log(`Não foi possível executar o servidor em ${hostname}:${port}`);
});

app.listen(port, () => {
  console.log(`${name} -v:${version} rodando em http://${hostname}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
});
