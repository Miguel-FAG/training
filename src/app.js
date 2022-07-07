import express from "express";         
import ejs from "ejs";                 
import {dirname,join} from "path";     //Obtiene los metodos __dirname (para configurar la ruta) y join (configurar las carpetas public y views) 
import { fileURLToPath } from "url";   //Decodifica la url de nuestros archivos a una ruta 
import rutas from "./rutas/rutas.js";  //Obtiene la configuracion del modulo Router de Express de otro archivo

const app = express()   //

const port = process.env.PORT || 4000                       //Obtiene el puerto ya sea de las variables de entorno
const __dirname = dirname(fileURLToPath(import.meta.url))   //Se configura la ruta principal

//Settings
app.use(express.urlencoded({extended:true}))       //Reconoce el objeto entrante como cadenas o matrices
app.use(express.json())                            //Reconoce objetos tipo JSON
app.use(express.static(join(__dirname,'public')))  //Configura la ruta para la carpeta 'public'

//Middleware
app.set('views', join(__dirname,'views'))          //Configura la ruta para la carpeta 'views'
app.set('view engine', 'ejs')                      //Configura el motor de plantilla en este caso es EJS

app.use(rutas)                                     //Usa la configuracion importada

app.listen(port, () => {
   console.log(`Server running on port ${port}`);  //Arranca el servidor en el puerto dado
})