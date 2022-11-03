import {pool} from '../db.js';

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error" });
  }
};

export const getEmpleado = async (req, res) => {
    try {
        const { username, password } = req.body;
        const [rows] = await pool.query("SELECT * FROM empleados WHERE username = ? AND password = ?",
        [
          username,password
        ]);
    
        if (rows.length <= 0) {
          return res.status(404).json({ message: "No exite un empleado con esas credenciales" });
        }
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido algún error" });
      }
};

export const deleteUsuarios = async (req, res) => {
    try {
        const { username} = req.params;
        const [rows] = await pool.query("DELETE FROM empleados WHERE username = ?", [
          username
        ]);
    
        if (rows.affectedRows <= 0) {
          return res.status(404).json({ message: "No exite un empleado con ese usuario" });
        }
    
        res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: "ha ocurrido algún error" });
      }
};

/* export const updateEmpleado = async (req, res) => {
    try {
      const { id } = req.params;
      const { } = req.body;
  
      const [result] = await pool.query(
        "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
        [name, salary, id]
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Empleado no encontrado" });
  
      const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
        id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Ha ocurrido un error" });
    }
  }; */