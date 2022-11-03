import {pool} from '../db.js';

const consulta = "select tareas.idTarea,  tareas.titulo, tareas.id_grupoTrabajo, tareas.descripcion, tareas.estado, tareas.create_at, tareas.empleado_id, empleados.username"+
" from tareas inner join empleados on tareas.empleado_id = empleados.idUsu where tareas.id_grupoTrabajo = ?";

export const todasTareas = async (req, res) => {
  try {
    const [result] = await pool.query("Select * from tareas where id_grupoTrabajo = 2");
    if (result.length <= 0) {
      return res.status(104).json({ message: "Grupo de trabajo no encontrado" });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

export const listTareas = async (req, res) => {
    try {
      const { id_grupoTrabajo } = req.params;
    
      const [result] = await pool.query(consulta,[id_grupoTrabajo,]);
      if (result.length <= 0) {
        return res.status(104).json({ message: "Grupo de trabajo no encontrado" });
      }
  
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Ha ocurrido un error" });
    }
  };
export const añadirTareas = async (req, res) => {
    try {
      const {id_grupoTrabajo} = req.params;
      const {titulo,descripcion,estado} = req.body;

      const [result] = await pool.query(
        "INSERT INTO tareas (titulo,descripcion,estado,id_grupoTrabajo) VALUES (?,?,?,?)",
        [titulo, descripcion, estado, id_grupoTrabajo]
      );
      if (result.affectedRows === 0)
      return res.status(101).json({ message: "Tarea no creada" });

      const [rows] = await pool.query(consulta, [id_grupoTrabajo]);
      res.json(rows);

    } catch (error) {
      return res.status(500).json({ message: "Ha ocurrido un error" });
    }
  };
export const deleteTareas = async (req, res) => {
    try {
      const { idTarea } = req.params;
      const [result] = await pool.query("DELETE FROM tareas WHERE idTarea = ?", [idTarea]);
  
      if (result.affectedRows <= 0) {
        return res.status(102).json({ message: "Id de tarea no encontrado" });
      }
  
      const [rows] = await pool.query(consulta, [id_grupoTrabajo]);
      res.json(rows);

    } catch (error) {
      return res.status(500).json({ message: "Ha ocurrido un error" });
    }
  };
export const updateTareas = async (req, res) => {
    try {
      const {idTarea,id_grupoTrabajo} = req.params;
      const {titulo,descripcion,estado} = req.body;
  
      const [result] = await pool.query(
        "UPDATE tareas SET titulo = IFNULL(?, titulo),"+
        " descripcion = IFNULL(?, descripcion),"+
        " estado = IFNULL(?,estado)"+
        " WHERE idTarea = ?",
        [titulo, descripcion, estado,idTarea]
      );
      if (result.affectedRows === 0)
        return res.status(103).json({ message: "Tarea no encontrada" });
     
       const [rows] = await pool.query(consulta, [id_grupoTrabajo]);
      
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Ocurrio un error" });
    }
  };
