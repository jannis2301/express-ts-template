import app from './app/app.js';
import { PORT } from './config/envConfig.js';

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port: http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
