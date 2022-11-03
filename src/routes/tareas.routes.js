import {Router} from 'express';
import { 
    listTareas,
    añadirTareas,
    deleteTareas,
    updateTareas,
    todasTareas
} from "../controllers/tareasController.js";

const router = Router();

router.get('/tareas/:id_grupoTrabajo', listTareas);
router.post('/añadirTareas', añadirTareas);
router.delete('/borrarTareas/:idTarea', deleteTareas);
router.patch('/actualizoTareas/:idTarea,:id_grupoTrabajo', updateTareas);
router.get('/todasTareas/',todasTareas);

export default router;