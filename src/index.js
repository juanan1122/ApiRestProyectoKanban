import app from "./app.js";
import {PORT} from "./config.js";

app.listen(app.get('port'), () => {
    console.log(`Server on port http://localhost:${PORT}`);
    console.log("servidor escuchando por el puerto 3000...");
});