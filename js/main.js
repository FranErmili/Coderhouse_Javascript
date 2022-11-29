//Pegada el fetch//
fetch('./productos.json')
  .then(response => response.json())
  .then(productoARenderizar => todoElPrograma(productoARenderizar))

//Función que contiene todo el programa//
function todoElPrograma(productoARenderizar) {

  //Función que renderiza las cards//
  function renderizarProductos(productoARenderizar) {

    let containerProductos = document.getElementById("container-productos")

    containerProductos.innerHTML = ''

    //Desestructuramos las variables del array de objetos// 
    for (const { id, nombre, precio, ingredientes, imgUrl } of productoARenderizar) {

      //Creamos el contenedor y los elementos hijos que se se crearán dentro del "container-productos" por cada objeto del array//
      let cardProducto = document.createElement('div')
      cardProducto.className = 'card'
      cardProducto.innerHTML = `
            <img class="card-img-top" src="${imgUrl}">
            <div class="card-body">
                <h4 class="card-tittle">${nombre}</h4>
                <p class="card-text"> ${ingredientes}</p>
                <h5>$ ${precio}</h5>
                <button id=${id} class="btn btn-outline-danger btn-agregar-producto" type="button">Agregar al carrito</button>
            `
      containerProductos.append(cardProducto)
    }
  }

  //llamamos a la función a que renderiza el total del array//
  renderizarProductos(productoARenderizar)

  //DOM capturamos los botones para hacer filtros//
  let filtroPromociones = document.getElementById("filtro-promociones")
  let filtroCombos = document.getElementById("filtro-combos")
  let filtroSandwichesYsnacks = document.getElementById("filtro-sandwiches-snacks")
  let filtroAcompañamientos = document.getElementById("filtro-acompañamientos")
  let filtroBebidas = document.getElementById("filtro-bebidas")
  let filtroHelados = document.getElementById("filtro-helados")
  let filtroEnsaladas = document.getElementById("filtro-ensaladas")

  //Eventos on Click para crear un array nuevo filtrado y pasarle el parámetro a la función que renderiza los productos//
  filtroPromociones.onclick = () => {
    productosFiltrados = productoARenderizar.filter((producto) => producto.tipo.includes("Promociones"))
    renderizarProductos(productosFiltrados)
  }

  filtroCombos.onclick = () => {
    productosFiltrados = productoARenderizar.filter((producto) => producto.tipo.includes("Combos"))
    renderizarProductos(productosFiltrados)
  }

  filtroSandwichesYsnacks.onclick = () => {
    productosFiltrados = productoARenderizar.filter((producto) => producto.tipo.includes("Sandwiches y Snacks"))
    renderizarProductos(productosFiltrados)
  }

  filtroAcompañamientos.onclick = () => {
    productosFiltrados = productoARenderizar.filter((producto) => producto.tipo.includes("Acompañamientos"))
    renderizarProductos(productosFiltrados)
  }

  filtroBebidas.onclick = () => {
    productosFiltrados = productoARenderizar.filter((producto) => producto.tipo.includes("Bebidas"))
    renderizarProductos(productosFiltrados)
  }

  filtroHelados.onclick = () => {
    productosFiltrados = productoARenderizar.filter((producto) => producto.tipo.includes("Helados"))
    renderizarProductos(productosFiltrados)
  }

  filtroEnsaladas.onclick = () => {
    productosFiltrados = productoARenderizar.filter((producto) => producto.tipo.includes("Ensaladas"))
    renderizarProductos(productosFiltrados)
  }

  //Función guardar carrito & localStorage
  let botones = document.getElementsByClassName('btn-agregar-producto')

  let carritoGuardado = []

  if (localStorage.getItem('carritoGuardado')) {
    carritoGuardado = JSON.parse(localStorage.getItem('carritoGuardado'))
  }

  //creamos el elemento html en el dom previo a la inicialización de la función que renderiza el carrito guardado//
  const contenedorProductosAgregados = document.createElement('div');

  //función que pushea cada producto al array de CarritoGuardado, lo pasa a json y guarda en el local storage
  for (const boton of botones) {
    boton.onclick = (e) => {
      let productoAgregado = productoARenderizar.find((producto) => producto.id == e.target.id)

      let posicionProductoEnCarrito = carritoGuardado.findIndex((producto) => producto.id == productoAgregado.id)

      if (posicionProductoEnCarrito != -1) {
        carritoGuardado[posicionProductoEnCarrito].unidades++
        carritoGuardado[posicionProductoEnCarrito].subtotal = carritoGuardado[posicionProductoEnCarrito].precioUnitario * carritoGuardado[posicionProductoEnCarrito].unidades
      } else {
        carritoGuardado.push({ id: productoAgregado.id, nombre: productoAgregado.nombre, precioUnitario: productoAgregado.precio, unidades: 1, subtotal: productoAgregado.precio, img: productoAgregado.imgUrl })
      }
      localStorage.setItem('carritoGuardado', JSON.stringify(carritoGuardado))
    }
  }

  function renderizarCarrito() {
    
    if (carritoGuardado.length === 0) {
      contenedorProductosAgregados.innerHTML = ''
      contenedorProductosAgregados.innerHTML += `
      <div class="carrito-vacio">
        <h4 class="card-tittle">No has agregado productos al carrito</h4>
      `
    } else {
      let total = 0

      contenedorProductosAgregados.innerHTML = ''

      for (const item of carritoGuardado) {
        const { subtotal, img, nombre, precioUnitario, unidades, id } = item

        total += Number(subtotal)
        contenedorProductosAgregados.innerHTML += `
        <div class="card item-carrito">
          <img class="img-carrito" src=${img}></img>
          <h4 class="card-tittle">${nombre}</h4>
          <p class="card-tittle">$ ${precioUnitario}</h4>
          <p class="card-tittle">${unidades}</p>
          <p>$ ${subtotal}</p>
          <button class="btn btn-outline-warning btn-sumar-producto"> + </button>
          <button id:"${id}" class="btn btn-outline-danger btn-restar-producto"> - </button>
        </div>
      `
      }
      contenedorProductosAgregados.innerHTML += `
      <div class="total-pedido">
        <h3>Total: $ ${total}</h3>
      </div>
      `
    }
  }

  // capturamos el botón del carrito//
  let btnCarrito = document.getElementById("abrir-carrito")

  //Creamos el evento y disparamos una función del Sweet Alert para abrir un modal que mostrará el carrito guardado
  btnCarrito.onclick = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-warning',
        cancelButton: 'btn vaciar-carrito'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Carrito guardado',
      text: 'Estos son los productos que elegiste',
      // llamamos a un elemento html que tendrá el modal de Sweet Alert
      html: contenedorProductosAgregados,
      showCancelButton: true,
      confirmButtonText: 'Confirmar pedido',
      cancelButtonText: 'Vaciar carrito',
      reverseButtons: true,
      showCloseButton: true,
      width: '90%'
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Pedido confirmado',
          'Tu pedido fue enviado',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        localStorage.clear(),
          carritoGuardado = [],
          swalWithBootstrapButtons.fire(
            'Carrito vaciado',
            'Eliminaste todos los productos del carrito',
            'error'
          )
      }
    })

    renderizarCarrito()

  }


}
