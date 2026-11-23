import { Router } from 'express';
import * as service from '../services/product.service.js';

const router = Router();
const orNotFound = (res, doc) =>
  doc ? res.json(doc) : res.status(404).json({ message: 'Not found' });

router.post('/', async (req, res) => res.status(201).json(await service.create(req.body)));
router.get('/', async (req, res) => res.json(await service.findAll()));
router.get('/:id', async (req, res) => orNotFound(res, await service.findById(req.params.id)));
router.put('/:id', async (req, res) => orNotFound(res, await service.update(req.params.id, req.body)));
router.delete('/:id', async (req, res) => orNotFound(res, await service.remove(req.params.id)));

export default router;
