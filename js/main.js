//Array de objetos de todos los productos
const productos = [
    { id: 1, nombre: "Hamburguesa con queso", precio: 590, ingredientes: "Hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup", tipo: "hamburguesas", imgUrl: ".img/1-min.png" },
    { id: 2, nombre: "Doble hamburguesa con queso", precio: 725, ingredientes: "Doble hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup", tipo: "hamburguesas", imgUrl: ".img/2-min.png" },
    { id: 3, nombre: "Triple hamburguesa con queso", precio: 860, ingredientes: "Triple hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup", tipo: "hamburguesas", imgUrl: ".img/3-min.png" },
    { id: 4, nombre: "Cuarto de Libra", precio: 860, ingredientes: "Hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup", tipo: "hamburguesas", imgUrl: "./img/4-min.png" },
    { id: 5, nombre: "Doble cuarto de Libra", precio: 1130, ingredientes: "Doble hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup", tipo: "hamburguesas", imgUrl: "./img/5-min.png" },
    { id: 6, nombre: "Triple cuarto de Libra", precio: 1230, ingredientes: "Triple hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup", tipo: "hamburguesas", imgUrl: "./img/6-min.png" },
    { id: 7, nombre: "Grand Tasty", precio: 920, ingredientes: "Hamburguesa de carne con queso cheddar, lechuga, tomate, cebolla y salsa tasty", tipo: "hamburguesas", imgUrl: "./img/7-min.png" },
    { id: 8, nombre: "Doble Grand Tasty", precio: 1190, ingredientes: "Doble hamburguesa de carne con queso cheddar, lechuga, tomate, cebolla y salsa tasty", tipo: "hamburguesas", imgUrl: "./img/8-min.png" },
    { id: 9, nombre: "Triple Grand Tasty", precio: 1290, ingredientes: "Triple hamburguesa de carne con queso cheddar, lechuga, tomate, cebolla y salsa tasty", tipo: "hamburguesas", imgUrl: "./img/9-min.png" },
    { id: 10, nombre: "Grand Bacon", precio: 920, ingredientes: "Hamburguesa de carne con queso cheddar, bacon, cebolla, keptchupt y mostaza", tipo: "hamburguesas", imgUrl: "./img/10-min.png" },
    { id: 11, nombre: "Doble Grand Bacon", precio: 1190, ingredientes: "Doble hamburguesa de carne con queso cheddar, bacon, cebolla, keptchupt y mostaza", tipo: "hamburguesas", imgUrl: "./img/11-min.png" },
    { id: 12, nombre: "Triple Grand Bacon", precio: 1290, ingredientes: "Triple hamburguesa de carne con queso cheddar, bacon, cebolla, keptchupt y mostaza", tipo: "hamburguesas", imgUrl: "./img/12-min.png" },
    { id: 13, nombre: "CocaCola Chica", precio: 330, tipo: "bebidas", imgUrl: "./img/13-min.png" },
    { id: 14, nombre: "CocaCola Mediana", precio: 350, tipo: "bebidas", imgUrl: "./img/14-min.png" },
    { id: 15, nombre: "CocaCola Grande", precio: 370, tipo: "bebidas", imgUrl: "./img/15-min.png" },
    { id: 16, nombre: "Sprite Chica", precio: 330, tipo: "bebidas", imgUrl: "./img/16-min.png" },
    { id: 17, nombre: "Sprite Mediana", precio: 350, tipo: "bebidas", imgUrl: "./img/17-min.png" },
    { id: 18, nombre: "Sprite Grande", precio: 370, tipo: "bebidas", imgUrl: "./img/18-min.png" },
    { id: 19, nombre: "Fanta Chica", precio: 330, tipo: "bebidas", imgUrl: "./img/19-min.png" },
    { id: 20, nombre: "Fanta Mediana", precio: 350, tipo: "bebidas", imgUrl: "./img/20-min.png" },
    { id: 21, nombre: "Fanta Grande", precio: 370, tipo: "bebidas", imgUrl: "./img/21-min.png" },
    { id: 22, nombre: "Agua", precio: 300, tipo: "bebidas", imgUrl: "./img/22-min.png" },
    { id: 23, nombre: "Sundae de Chocolate", precio: 380, ingredientes: "Helado con salsa tibia de chocolate", tipo: "helados", imgUrl: "./img/23-min.png" },
    { id: 24, nombre: "Sundae de Dulce de Leche", precio: 380, ingredientes: "Helado con salsa tibia de dulce de leche", tipo: "helados", imgUrl: "./img/24-min.png" },
    { id: 25, nombre: "Sundae de Frutilla", precio: 380, ingredientes: "Helado con salsa tibia de frutilla", tipo: "helados", imgUrl: "./img/25-min.png" },
    { id: 26, nombre: "Mc Flurry Oreo", precio: 570, ingredientes: "Helado con trocitos de Oreo y salsa tibia a eleccion", tipo: "helados", imgUrl: "./img/26-min.png" },
    { id: 27, nombre: "Mc Flurry Kit Kat", precio: 570, ingredientes: "Helado con trocitos de Kit Kat y salsa tibia a eleccion", tipo: "helados", imgUrl: "./img/27-min.png" },
    { id: 28, nombre: "Cono relleno", precio: 200, ingredientes: "Helado mixto en cono con relleno de chocolate", tipo: "helados", imgUrl: "./img/28-min.png" },
    { id: 29, nombre: "Papas Chicas", precio: 370, ingredientes: "Papas fritas chicas", tipo: "papas fritas", imgUrl: "./img/29-min.png" },
    { id: 30, nombre: "Papas Medianas", precio: 400, ingredientes: "Papas fritas medianas", tipo: "papas fritas", imgUrl: "./img/30-min.png" },
    { id: 31, nombre: "Papas Grandes", precio: 430, ingredientes: "Papas fritas grandes", tipo: "papas fritas", imgUrl: "./img/31-min.png" },
    { id: 32, nombre: "Papas Tasty", precio: 480, ingredientes: "Papas fritas con salsa Tasty", tipo: "papas fritas", imgUrl: "./img/32-min.png" },
    { id: 33, nombre: "Papas Cheddar", precio: 480, ingredientes: "Papas fritas con salsa Cheddar", tipo: "papas fritas", imgUrl: "./img/33-min.png" },
    { id: 34, nombre: "Papas Tasty y Bacon", precio: 510, ingredientes: "Papas fritas con salsa Tasty y Bacon ", tipo: "papas fritas", imgUrl: "./img/34-min.png" },
    { id: 35, nombre: "Papas Cheddar y Bacon", precio: 510, ingredientes: "Papas fritas con salsa Cheddar y Bacon", tipo: "papas fritas", imgUrl: "./img/35-min.png" },
]

//Dom elementos para buscar y filtrar productos

let inputBusqueda = document.getElementById("busqueda")
let btnBuscar = document.getElementById("btn-buscar")

//Función click para activar filtro
btnBuscar.onclick = () => {
    let productosFiltrados = productos.filter(producto => producto.tipo.includes(inputBusqueda.value))
    renderizarProductos(productosFiltrados)
}

//Función que renderiza los productos filtrados desde el input
function renderizarProductos(productosFiltrados) {
    let productosARenderizar = productos
    if (productosFiltrados) {
        productosARenderizar = productosFiltrados
    }

    let containerProductos = document.getElementById("container-productos")
    containerProductos.innerHTML = ''
    for (const producto of productosARenderizar) {
        let cardProducto = document.createElement('div')
        cardProducto.className = 'card'
        cardProducto.innerHTML = `
        <img class="card-img-top" src="${producto.imgUrl}">
        <div class="card-body">
            <h4 class="card-tittle">${producto.nombre}</h4>
            <p class="card-text"> ${producto.ingredientes}</p>
            <h5>$ ${producto.precio}</h5>
            <button id=${producto.id} class="btn btn-outline-danger btn-agregar-producto" type="button">Agregar al carrito</button>
        `
        containerProductos.append(cardProducto)
    }
}
renderizarProductos()

//Función guardar carrito & localStorage
let botones = document.getElementsByClassName('btn-agregar-producto')
let carrito = document.getElementById('carrito')

let carritoGuardado = []

if (localStorage.getItem('carritoGuardado')) {
    carritoGuardado = JSON.parse(localStorage.getItem('carritoGuardado'))
}

renderizarCarrito()

/*/Iterador que renderiza los productos agregados al carrito
for (const item of carritoGuardado) {
    let productoAgregado = productos.find(producto => producto.id == item.id)
    carrito.innerHTML += `
        <div class="card item-carrito container">
            <img class="img-carrito" src=${productoAgregado.imgUrl}></img
            <h4 class="card-tittle">${productoAgregado.nombre}</h4>
            <h5>$ ${productoAgregado.precio}</h5>
            <button class="btn btn-outline-dark"> + </button>
            <button class="btn btn-outline-dark"> - </button>
        </div>
    `
}
*/

//función que pushea cada producto al array de CarritoGuardado y lo pasa a json 
for (const boton of botones) {
    boton.onclick = (e) => {
        let productoAgregado = productos.find(producto => producto.id == e.target.id)

        let posicionProductoEnCarrito = carritoGuardado.findIndex(producto => producto.id == productoBuscado.id)

        if (posicionProductoEnCarrito != -1) {
            carritoGuardado[posicionProductoEnCarrito].unidades++ 
            carritoGuardado[posicionProductoEnCarrito].subtotal = carritoGuardado[posicionProductoEnCarrito].precioUnidad * carritoGuardado[posicionProductoEnCarrito].unidades
          } else {
            carritoGuardado.push({ id: productoAgregado.id, nombre: productoAgregado.nombre, precioUnitario: productoAgregado.precio, unidades: 1, subtotal: productoBuscado.precio })
        }

        /*carrito.innerHTML += `
        <div class="card item-carrito container">
            <img class="img-carrito" src=${productoAgregado.imgUrl}></img
            <h4 class="card-tittle">${productoAgregado.nombre}</h4>
            <h5>$ ${productoAgregado.precio}</h5>
            <button class="btn btn-outline-dark"> + </button>
            <button class="btn btn-outline-dark"> - </button>
        </div>
      `*/

        localStorage.setItem('carritoGuardado', JSON.stringify(carritoGuardado))
        renderizarCarrito()
    }
}

//Función que renderiza el carrito
function renderizarCarrito() {
    let carritoVacio = document.createElement("div")
    carritoVacio.innerHTML = `
    <div class="carrito-vacio">
        <P>Su carrito está vacío<p>
    </div>
    `
    carrito.append(carritoVacio)

    let total = 0

    for (const item of carritoGuardado) {
        total += item.subtotal
        let cardsCarrito = document.createElement("div")
        cardsCarrito.innerHTML += `
        <div class="card item-carrito container">
            <img class="img-carrito" src=${item.imgUrl}></img
            <h4 class="card-tittle">${item.nombre}</h4>
            <h4 class="card-tittle">${item.unidades}</h4>
            <h5>$ ${item.subtotal}</h5>
            <button class="btn btn-outline-dark"> + </button>
            <button class="btn btn-outline-dark"> - </button>
        </div>
        `
        carrito.append(cardsCarrito)
    }

    carrito.innerHTML += `
    <div class="itemCarrito">
      <h3>total: ${total}</h3>
    </div>
  `
}



//función para abrir y cerrar el modal del carrito

let abrirCarrito = document.getElementById("abrir-carrito")
let cerrarCarrito = document.getElementById("cerrar-carrito")

abrirCarrito.onclick = () => {
    carrito.classList.remove("none")
}

cerrarCarrito.onclick = () => {
    carrito.classList.add("none")
}

