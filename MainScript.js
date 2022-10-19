

let bebida1sm = {
    nombre: "CocaCola",
    tipo: "bebida",
    medida: "Pequeño",
    precio: 100,
}

let bebida1md = {
    nombre: "CocaCola",
    tipo: "bebida",
    medida: "mediano",
    precio: 160,
}

let bebida1xl = {
    nombre: "CocaCola",
    tipo: "bebida",
    medida: "grande",
    precio: 200,
}

let bebida2sm = {
    nombre: "Sprite",
    tipo: "bebida",
    medida: "Pequeño",
    precio: 100,
}

let bebida2md = {
    nombre: "Sprite",
    tipo: "bebida",
    medida: "Mediano",
    precio: 160,
}

let bebida2xl = {
    nombre: "Sprite",
    tipo: "bebida",
    medida: "Grande",
    precio: 200,
}

let bebida3sm = {
    nombre: "Fanta",
    tipo: "bebida",
    medida: "Pequeña",
    precio: 100,
}

let bebida3md = {
    nombre: "Fanta",
    tipo: "bebida",
    medida: "Mediana",
    precio: 160,
}

let bebida3xl = {
    nombre: "Fanta",
    tipo: "bebida",
    medida: "Grande",
    precio: 200,
}

let haburguesa1sm = {
    nombre: "Cuarto de libra",
    tipo: "hamburguesa",
    Ingredientes: "Carne, queso cheddar y cebolla",
    medida: "simple",
    precio: 600,
}

let haburguesa1md = {
    nombre: "Doble Cuarto de libra",
    tipo: "hamburguesa",
    Ingredientes: "Doble carne, queso cheddar y cebolla",
    medida: "Doble",
    precio: 800,
}

let haburguesa1xl = {
    nombre: "Triple Cuarto de libra",
    tipo: "hamburguesa",
    Ingredientes: "Triple carne, queso cheddar y cebolla",
    medida: "Triple",
    precio: 900,
}

let haburguesa2sm = {
    nombre: "Grand Tasty",
    tipo: "hamburguesa",
    Ingredientes: "Carne, queso cheddar, cebolla, lechuga y salsa tasty",
    medida: "Simple",
    precio: 700,
}

let haburguesa2md = {
    nombre: "Grand Tasty Doble",
    tipo: "hamburguesa",
    Ingredientes: "Doble carne, queso cheddar, cebolla, lechuga y salsa tasty",
    medida: "Doble",
    precio: 900,
}

let haburguesa2xl = {
    nombre: "Grand Tasty Triple",
    tipo: "hamburguesa",
    Ingredientes: "Triple carne, queso cheddar, cebolla, lechuga y salsa tasty",
    medida: "Triple",
    precio: 1100,
}

let acompañamiento1sm = {
    nombre: "Papas Fritas",
    tipo: "Acompañamiento",
    medida: "pequeñas",
    precio: 300,
}

let acompañamiento1md = {
    nombre: "Papas Fritas",
    tipo: "Acompañamiento",
    medida: "medianas",
    precio: 360,
}

let acompañamiento1xl = {
    nombre: "Papas Fritas",
    tipo: "Acompañamiento",
    medida: "Grandes",
    precio: 400,
}

let acompañamiento2sm = {
    nombre: "Papas Max",
    tipo: "Acompañamiento",
    Ingredientes: "Papas fritas con salsa cheddar y bacon",
    medida: "Pequeñas",
    precio: 400,
}

let acompañamiento2md = {
    nombre: "Papas Max",
    tipo: "Acompañamiento",
    Ingredientes: "Papas fritas con salsa cheddar y bacon",
    medida: "Medianas",
    precio: 470,
}

let acompañamiento2xl = {
    nombre: "Papas Max",
    tipo: "Acompañamiento",
    Ingredientes: "Papas fritas con salsa cheddar y bacon",
    medida: "Grandes",
    precio: 500,
}

let postre1 = {
    nombre: "Sundae",
    tipo: "helado",
    precio: 400,
}

let postre2 = {
    nombre: "Mc Flurry",
    tipo: "Helado",
    Precio: 600
}

let postre3 = {
    nombre: "Cono",
    tipo: "Helado",
    precio: 250,
}

function ShowPrompt() {

    
    console.log("Opción 1: ", haburguesa1sm.nombre + " - $",haburguesa1sm.precio)
    console.log("Opción 2: ", haburguesa1md.nombre + " - $",haburguesa1md.precio)
    console.log("Opción 3: ", haburguesa1xl.nombre + " - $",haburguesa1xl.precio)
    console.log("Opción 4: ", haburguesa2sm.nombre + " - $",haburguesa2sm.precio)
    console.log("Opción 5: ", haburguesa2md.nombre + " - $",haburguesa2md.precio)
    console.log("Opción 6: ", haburguesa2xl.nombre + " - $",haburguesa2xl.precio)

    
    let hamburguesa = prompt("Elija una opción para comenzar su pedido");

    while (!hamburguesa) {
        hamburguesa = prompt("por favor elija una opción")
    }

    console.log("Opción 1: ", bebida1sm.nombre + " - $",bebida1sm.precio)
    console.log("Opción 2: ", bebida1md.nombre + " - $",bebida1md.precio)
    console.log("Opción 3: ", bebida1xl.nombre + " - $",bebida1xl.precio)
    console.log("Opción 4: ", bebida2sm.nombre + " - $",bebida2sm.precio)
    console.log("Opción 5: ", bebida2md.nombre + " - $",bebida2md.precio)
    console.log("Opción 6: ", bebida2xl.nombre + " - $",bebida2xl.precio)

    let bebida = prompt("Elija la bebida");

    while (!bebida) {
        bebida = prompt("por favor elija una opción")
    }
    
    console.log("Opción 1: ", acompañamiento1sm.nombre + " - $",acompañamiento1sm.precio)
    console.log("Opción 2: ", acompañamiento1md.nombre + " - $",acompañamiento1md.precio)
    console.log("Opción 3: ", acompañamiento1xl.nombre + " - $",acompañamiento1xl.precio)
    console.log("Opción 4: ", acompañamiento2sm.nombre + " - $",acompañamiento2sm.precio)
    console.log("Opción 5: ", acompañamiento2md.nombre + " - $",acompañamiento2md.precio)
    console.log("Opción 6: ", acompañamiento2xl.nombre + " - $",acompañamiento2xl.precio)

    let acompañamiento = prompt("Elija el acompañamiento");

    while (!acompañamiento) {
        acompañamiento = prompt("por favor elija una opción")
    }
    

    let hamburguesaprecio = 0;
    let bebidaprecio = 0;
    let acompañamientoprecio = 0; 

    preciohamburguesaelegida();
    preciobebidaelegida();
    precioacompañamientoelegido()


    let total = hamburguesaprecio + bebidaprecio + acompañamientoprecio
    alert("El total a abonar es: "+ total) 



    function preciohamburguesaelegida(){
        if (hamburguesa == 1) {
            console.log("Usted Eligió: " + haburguesa1sm.nombre)
            console.log("Que contiene: "+ haburguesa1sm.Ingredientes)
            console.log("Valor: "+ haburguesa1sm.precio)
            hamburguesaprecio = haburguesa1sm.precio
        } 
        else if (hamburguesa == 2) {
            console.log("Usted Eligió: " + haburguesa1md.nombre)
            console.log("Que contiene: "+ haburguesa1md.Ingredientes)
            console.log("Valor: "+ haburguesa1md.precio)
            hamburguesaprecio = haburguesa1md.precio
        }
        else if (hamburguesa == 3) {
            console.log("Usted Eligió: " + haburguesa1xl.nombre)
            console.log("Que contiene: "+ haburguesa1xl.Ingredientes)
            console.log("Valor: "+ haburguesa1xl.precio)
            hamburguesaprecio = haburguesa1xl.precio
        }
        else if (hamburguesa == 4) {
            console.log("Usted Eligió: " + haburguesa2sm.nombre)
            console.log("Que contiene: "+ haburguesa2sm.Ingredientes)
            console.log("Valor: "+ haburguesa2sm.precio)
            hamburguesaprecio = haburguesa2sm.precio
        }
        else if (hamburguesa == 5) {
            console.log("Usted Eligió: " + haburguesa2md.nombre)
            console.log("Que contiene: "+ haburguesa2md.Ingredientes)
            console.log("Valor: "+ haburguesa2md.precio)
            hamburguesaprecio = haburguesa2md.precio
        }
        else if (hamburguesa == 6) {
            console.log("Usted Eligió: " + haburguesa2xl.nombre)
            console.log("Que contiene: "+ haburguesa2xl.Ingredientes)
            console.log("Valor: "+ haburguesa2xl.precio)
            hamburguesaprecio = haburguesa2xl.precio
        } 
    }
   
    function preciobebidaelegida(){
        if (bebida == 1) {
            console.log("Usted Eligió: " + bebida1sm.nombre)
            console.log("Que contiene: "+ bebida1sm.Ingredientes)
            console.log("Valor: "+ bebida1sm.precio)
            bebidaprecio = bebida1sm.precio
        } 
        else if (bebida == 2) {
            console.log("Usted Eligió: " + bebida1md.nombre)
            console.log("Que contiene: "+ bebida1md.Ingredientes)
            console.log("Valor: "+ bebida1md.precio)
            bebidaprecio = bebida1md.precio
        }
        else if (bebida == 3) {
            console.log("Usted Eligió: " + bebida1xl.nombre)
            console.log("Que contiene: "+ bebida1xl.Ingredientes)
            console.log("Valor: "+ bebida1xl.precio)
            bebidaprecio = bebida1xl.precio
        }
        else if (bebida == 4) {
            console.log("Usted Eligió: " + bebida2sm.nombre)
            console.log("Que contiene: "+ bebida2sm.Ingredientes)
            console.log("Valor: "+ bebida2sm.precio)
            bebidaprecio = bebida2sm.precio
        }
        else if (bebida == 5) {
            console.log("Usted Eligió: " + bebida2md.nombre)
            console.log("Que contiene: "+ bebida2md.Ingredientes)
            console.log("Valor: "+ bebida2md.precio)
            bebidaprecio = bebida2md.precio
        }
        else if (bebida == 6) {
            console.log("Usted Eligió: " + bebida2xl.nombre)
            console.log("Que contiene: "+ bebida2xl.Ingredientes)
            console.log("Valor: "+ bebida2xl.precio)
            bebidaprecio = bebida2xl.precio
        } 
    }

    function precioacompañamientoelegido() {
        if (acompañamiento == 1) {
            console.log("Usted Eligió: " + acompañamiento1sm.nombre)
            console.log("Que contiene: "+ acompañamiento1sm.Ingredientes)
            console.log("Valor: "+ acompañamiento1sm.precio)
            acompañamientoprecio = acompañamiento1sm.precio
        } 
        else if (acompañamiento == 2) {
            console.log("Usted Eligió: " + acompañamiento1md.nombre)
            console.log("Que contiene: "+ acompañamiento1md.Ingredientes)
            console.log("Valor: "+ acompañamiento1md.precio)
            acompañamientoprecio = acompañamiento1md.precio
        }
        else if (acompañamiento == 3) {
            console.log("Usted Eligió: " + acompañamiento1xl.nombre)
            console.log("Que contiene: "+ acompañamiento1xl.Ingredientes)
            console.log("Valor: "+ acompañamiento1xl.precio)
            acompañamientoprecio = acompañamiento1xl.precio
        }
        else if (acompañamiento == 4) {
            console.log("Usted Eligió: " + acompañamiento2sm.nombre)
            console.log("Que contiene: "+ acompañamiento2sm.Ingredientes)
            console.log("Valor: "+ acompañamiento2sm.precio)
            acompañamientoprecio = acompañamiento2sm.precio
        }
        else if (acompañamiento == 5) {
            console.log("Usted Eligió: " + acompañamiento2md.nombre)
            console.log("Que contiene: "+ acompañamiento2md.Ingredientes)
            console.log("Valor: "+ acompañamiento2md.precio)
            acompañamientoprecio = acompañamiento2md.precio
        }
        else if (acompañamiento == 6) {
            console.log("Usted Eligió: " + acompañamiento2xl.nombre)
            console.log("Que contiene: "+ acompañamiento2xl.Ingredientes)
            console.log("Valor: "+ acompañamiento2xl.precio)
            acompañamientoprecio = acompañamiento2xl.precio
        } 
    }
}

