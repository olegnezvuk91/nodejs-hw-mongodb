import { setupServer } from './server';
import { initMongoConnection } from './utils/mongo.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
