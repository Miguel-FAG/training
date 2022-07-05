import { Router } from "express";

const rutas = Router()

rutas.get('/', (req, res) => {
   res.render("index")
})

rutas.get('/about', (req, res) => {
   res.send("HOLA MUNDO")
})


export default rutas