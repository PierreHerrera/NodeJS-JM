
const error = {
    e404: (req, res) => {
        res.status(404).render("error", { 
            title: "Error 404 NotFound", 
            message: "El recurso qu estás buscando no existe." 
        })
    },

    e500: (req, res, err) => {
        res.status(500).render("error", { 
            title: "Error 404 NotFound", 
            message: err.message 
        })
    }

}

export default error;