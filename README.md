# Proyecto de API con MongoDB

Este proyecto implementa una API para manejar productos y carritos utilizando MongoDB como sistema de persistencia.

## Configuración

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Crea un archivo `.env` con la variable `MONGO_URI` para la conexión a MongoDB.
4. Inicia el servidor con `npm start`.

## Endpoints

### Productos

- `GET /api/products`: Obtiene una lista de productos con filtros, paginación y ordenamiento.
- `GET /api/products/:id`: Obtiene un producto por su ID.

### Carritos

- `DELETE /api/carts/:cid/products/:pid`: Elimina un producto del carrito.
- `PUT /api/carts/:cid`: Actualiza el carrito con un arreglo de productos.
- `PUT /api/carts/:cid/products/:pid`: Actualiza la cantidad de un producto en el carrito.
- `DELETE /api/carts/:cid`: Elimina todos los productos del carrito.
- `GET /api/carts/:cid`: Obtiene un carrito por su ID con los productos completos.

## Vistas

- `/products`: Muestra una lista de productos con paginación.
- `/carts/:cid`: Muestra los productos de un carrito específico.