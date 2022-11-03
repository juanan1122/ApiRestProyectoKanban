import {Router} from 'express';
import { IndexPing } from "../controllers/indexController.js";

const router = Router();

router.get('/ping', IndexPing);

export default router;