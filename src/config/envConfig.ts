import { config } from 'dotenv';

// Environment config
config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;

export { PORT, NODE_ENV };
