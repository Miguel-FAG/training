import { Router } from "express";

const rutas = Router()

rutas.get('/', (req, res) => {
   res.render("index")
})

rutas.post('/contacto', (req, res) => {
   const { nombre, email, telefono, empresa, mensaje} = req.body

   res.json({nombre,email,telefono,empresa,mensaje})
})


export default rutas