import { setupServer } from './server.js';
import { initMongoConnection } from './utils/mongo.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
