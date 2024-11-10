const error404 = (req, res) => {
    res.status(404).render("error", { title: "Error 404 NotFound", message: "El recurso qu estás buscando no existe." })
}

export default {
    error404,
}