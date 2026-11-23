import express from 'express';
import productRoutes from './routes/product.routes.js';

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use((err, req, res, next) => res.status(400).json({ message: err.message }));

export default app;
