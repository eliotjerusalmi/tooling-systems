export default {
  env: 'preprod',
  port: Number(process.env.PORT) || 3002,
  mongo: { uri: process.env.MONGO_URI, dbName: 'app_preprod' },
};
