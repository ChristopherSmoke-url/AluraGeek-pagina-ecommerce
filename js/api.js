//ACÁ ES DONDE DEJO ESTE ESPACIO LIBRE, PUESTO A QUE NO LOGRÉ CONSEGUIR IMPORTAR LA API CORRECTAMENTE. LES DEJO CON TODOS LOS OTROS PASOS CORRESPONDIENTES, NO OBSTANTE, LA API NO FUNCIONA. SE COMPRENDEN LAS MEDIDAS TOMADAS EN EL CASO DE CONSIDERARLO COMO "INCOMPLETO".

async function listarProductos(API_URL) {
    try {
        const response = await fetch(API_URL);

        if(!response.ok) {
            throw new Error("No se pudo obtener la lista de productos.");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
}

async function crearProducto(nombre, precio, imagen, url) {
    try {
        const response = await fetch(url,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            })
        });

        if(!response.ok) {
            throw new Error("No se pudo crear el nuevo producto.");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error("Error al crear el nuevo producto:", error);
        throw error;
    }
}

async function eliminarProducto(id, url) {
    try {
        const response = await fetch(`${url}${id}`, {
            method: "DELETE"
        });

        if(!response.ok) {
            throw new Error("No se pudo eliminar el producto.");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error("Error al eliminar el producto:", error);
        throw error;
    }
}

export const API = { listarProductos, crearProducto, eliminarProducto };