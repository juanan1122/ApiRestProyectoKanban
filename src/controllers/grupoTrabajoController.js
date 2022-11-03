import {pool} from '../db.js';

export const creoGrupoTrabajo = async (req, res) => {
    try {
      const { nombre_grupo} = req.body;
      const [rows] = await pool.query(
        "INSERT INTO grupoTrabajo (nombre_grupo) VALUES (?)",
        [nombre_grupo]
      );
      res.status(201).json({ id: rows.insertId, nombre_grupo });
    } catch (error) {
      return res.status(500).json({ message: "Ha ocurrido algún error" });
    }
  };

export const deleteGrupoTrabajo = async (req, res) => {
    try {
        const { nombre_grupo} = req.params;
        const [rows] = await pool.query("DELETE FROM grupoTrabajo WHERE nombre_grupo = ?", [
          nombre_grupo
        ]);
    
        if (rows.affectedRows <= 0) {
          return res.status(404).json({ message: "No exite un grupo de trabajo con con ese nombre" });
        }
    
        res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: "ha ocurrido algún error" });
      }
};