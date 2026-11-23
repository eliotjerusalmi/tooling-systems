import app from './app.js';
import config from './config/index.js';
import { connectDatabase } from './db/mongoose.js';

await connectDatabase(config.mongo);
app.listen(config.port, () => console.log(`[${config.env}] listening on ${config.port}`));
