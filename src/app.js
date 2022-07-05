import express from "express";
import ejs from "ejs";
import {dirname,join} from "path";
import { fileURLToPath } from "url";
import rutas from "./rutas/rutas.js";

const app = express()

const port = process.env.PORT || 4000
const __dirname = dirname(fileURLToPath(import.meta.url))

//Settings
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(join(__dirname,'public')))

//Middleware
app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(rutas)

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
})