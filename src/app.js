import express from 'express';
import morgan from 'morgan';

import empleadosRouter from "./routes/empleados.routes.js";
import tareasRouter from "./routes/tareas.routes.js";
import indexRouter from "./routes/index.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//rutas 
app.use("/",empleadosRouter);
app.use("tablero",tareasRouter);
//app.use("/",indexRouter);

//app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    res.status(404).json({ message: "No encontrado" });
  });
  
  export default app;