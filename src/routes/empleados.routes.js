import {Router} from 'express';
import {
    getEmpleado, 
    getEmpleados,
    deleteUsuarios } 
from "../controllers/empleadosController.js";

const router = Router();

router.get('/empleados', getEmpleados);
router.get('/empleado', getEmpleado);
router.delete('/borroUsuarios', deleteUsuarios);
//router.post('/añadoUsuarios', postusuarios);

export default router;