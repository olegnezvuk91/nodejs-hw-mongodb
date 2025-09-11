import { setupServer } from './server.js';
import { initMongoConnection } from './utils/getEnvVar.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
