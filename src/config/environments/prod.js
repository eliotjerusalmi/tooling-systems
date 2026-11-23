export default {
  env: 'prod',
  port: Number(process.env.PORT) || 3000,
  mongo: { uri: process.env.MONGO_URI, dbName: 'app_prod' },
};
