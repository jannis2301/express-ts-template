import { Router } from 'express';
import { sendMessage } from '../controllers/messageController.js';

const router = Router();

router.get('/', sendMessage);

export default router;
