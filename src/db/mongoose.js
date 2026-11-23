import mongoose from 'mongoose';

export const connectDatabase = ({ uri, dbName }) => mongoose.connect(uri, { dbName });
