export default {
  env: 'staging',
  port: Number(process.env.PORT) || 3001,
  mongo: { uri: process.env.MONGO_URI, dbName: 'app_staging' },
};
