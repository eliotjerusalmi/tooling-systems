import dotenv from 'dotenv';

const ENVS = ['staging', 'preprod', 'prod'];
const env = process.env.NODE_ENV ?? 'staging';
if (!ENVS.includes(env)) throw new Error(`Unknown NODE_ENV "${env}"`);

dotenv.config({ path: `.env.${env}`, quiet: true });
const { default: config } = await import(`./environments/${env}.js`);
if (!config.mongo.uri) throw new Error(`MONGO_URI missing in .env.${env}`);

export default config;
