import {pool} from '../db.js';

export const IndexPing = async (req, res) =>{ 
    const [result] = await pool.query('select tareas.titulo, tareas.descripcion, tareas.estado, tareas.create_at, empleados.username from tareas inner join empleados on tareas.empleado_id = empleados.idUsu where tareas.id_grupoTrabajo = 1')
    //for (let index = 0; index < result.length; index++) {
        res.json(result[0])
    //}   
};