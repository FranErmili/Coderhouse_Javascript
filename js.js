//objetos

const comida1 = {
    nombre: "Hamburguesa con queso",
    tipo: "Comida",
    ingredientes: "Hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup",
    precio: 590
}

const comida2 = {
    nombre: "Doble hamburguesa con queso",
    tipo: "comida",
    ingredientes: "Doble hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup",
    precio: 725
}

const comida3 = {
    nombre: "Triple hamburguesa con queso",
    tipo: "Comida",
    ingredientes: "Triple hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup",
    precio: 860
}

const comida4 = {
    nombre: "Cuarto de libra",
    tipo: "Comida",
    ingredientes: "Hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup",
    precio: 860
}

const comida5 = {
    nombre: "Doble cuarto de libra",
    tipo: "Comida",
    ingredientes: "Doble hamburguesa de carne con queso cheddar, cebolla, mostaza y keptchup",
    precio: 1190
}

const comida6 = {
    nombre: "Grand Tasty",
    tipo: "comida",
    ingredientes: "Hamburguesa de carne con queso cheddar, lechuga, tomate, cebolla y salsa tasty",
    precio: 920
}

const comida7 = {
    nombre: "Grand Tasty doble",
    tipo: "comida",
    ingredientes: "Doble hamburguesa de carne con queso cheddar, lechuga, tomate, cebolla y salsa tasty",
    precio: 1190
}

const comida8 = {
    nombre: "Grand Tasty triple",
    tipo: "comida",
    ingredientes: "Triple hamburguesa de carne con queso cheddar, lechuga, tomate, cebolla y salsa tasty",
    precio: 1290
}

const comida9 = {
    nombre: "Grand Bacon",
    tipo: "comida",
    ingredientes: "Hamburguesa de carne con queso cheddar, bacon, cebolla, keptchupt y mostaza",
    precio: 920
}

const comida10 = {
    nombre: "Grand Bacon doble",
    tipo: "comida",
    ingredientes: "Doble hamburguesa de carne con queso cheddar, bacon, cebolla, keptchupt y mostaza",
    precio: 1190
}

const comida11 = {
    nombre: "Grand Bacon triple",
    tipo: "comida",
    ingredientes: "Triple Hamburguesa de carne con queso cheddar, bacon, cebolla, keptchupt y mostaza",
    precio: 1290
}

const comida12 = {
    nombre: "Big Mac",
    tipo: "comida",
    ingredientes: "Doble Hamburguesa de carne con queso cheddar, cebollas, pepinillos y salsa Big Mac",
    precio: 920
}

const bebida1 = {
    nombre: "CocaCola Chica",
    tipo: "bebida",
    precio: 330
}

const bebida2 = {
    nombre: "CocaCola Mediana",
    tipo: "bebida",
    precio: 350
}

const bebida3 = {
    nombre: "CocaCola Grande",
    tipo: "bebida",
    precio: 370
}

const bebida4 = {
    nombre: "Sprite Chica",
    tipo: "bebida",
    precio: 330
}

const bebida5 = {
    nombre: "Sprite Mediana",
    tipo: "bebida",
    precio: 350
}

const bebida6 = {
    nombre: "Sprite Grande",
    tipo: "bebida",
    precio: 370
}

const bebida7 = {
    nombre: "Fanta Chica",
    tipo: "bebida",
    precio: 330
}

const bebida8 = {
    nombre: "Fanta Mediana",
    tipo: "bebida",
    precio: 350
}

const bebida9 = {
    nombre: "Fanta Grande",
    tipo: "bebida",
    precio: 370
}

const acompañamiento1 = {
    nombre: "Nachos",
    tipo: "acompañamiento",
    ingredientes: "Nachos con salsa cheddar",
    precio: 1000
}

const acompañamiento2 = {
    nombre: "Nachos XL",
    tipo: "acompañamiento",
    ingredientes: "Nachos XL con salsa cheddar",
    precio: 1300
}

const acompañamiento3 = {
    nombre: "Papas Cheddar",
    tipo: "acompañamiento",
    ingredientes: "Papas bravas con queso cheddar",
    precio: 1100
}

const acompañamiento4 = {
    nombre: "Papas Cheddar XL",
    tipo: "acompañamiento",
    ingredientes: "Papas bravas XL con queso cheddar",
    precio: 1400
}

const acompañamiento5 = {
    nombre: "Papas ceveceras",
    tipo: "acompañamiento",
    ingredientes: "Papas bravas con salsa de panceta, cebolla de verdeo, crema y ques cheddar",
    precio: 1200
}

const acompañamiento6 = {
    nombre: "Papas cerveceras XL",
    tipo: "acompañamiento",
    ingredientes: "Papas bravas con salsa de panceta, cebolla de verdeo, crema y ques cheddar",
    precio: 1500
}

const menu = ["Comida y platos principales", "Acompañamientos", "Bebidas",]

const arrmenu = [comida1, comida2, comida3, comida4, comida5, comida6, comida7, comida7, comida9, comida10, comida11, comida12, bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7, bebida8, bebida9, acompañamiento1, acompañamiento2, acompañamiento3, acompañamiento4, acompañamiento5, acompañamiento6]
const pedido = []

//programa
function VerMenu() {

    for (let i = 0; i < menu.length; i++) {
        console.log("Presione ", (i + 1), " para ver las opciones de", menu[i]);
    }

    let menuelegido = prompt("Seleccione el menu que quieras ver")

    const resultado1 = arrmenu.filter((el) => el.tipo.includes("comida"))
    const resultado2 = arrmenu.filter((el) => el.tipo.includes("bebida"))
    const resultado3 = arrmenu.filter((el) => el.tipo.includes("acompañamiento"))

    if (menuelegido === "1") {
        for (let i = 0; i < resultado1.length; i++) {
            console.log([i + 1] + " - " + resultado1[i].nombre + " / Ingredientes: " + resultado1[i].ingredientes + " / Precio: $" + resultado1[i].precio)
        }
    }
    else if (menuelegido === "2") {
        for (let i = 0; i < resultado2.length; i++) {
            console.log([i + 1] + " - " + resultado2[i].nombre + " / Precio: $" + resultado2[i].precio)
        }
    }
    else if (menuelegido === "3") {
        for (let i = 0; i < resultado3.length; i++) {
            console.log([i + 1] + " - " + resultado3[i].nombre + " / Ingredientes: " + resultado3[i].ingredientes + " / Precio: $" + resultado3[i].precio)
        }
    }
}

function AgregarProducto() {
    let productoelegido = Number(prompt("Escrba el valor del producto que desea comprar"))
    pedido.push(productoelegido)
    
    do {
        productoelegido = Number(prompt("Si desea sumar otro producto escriba el valor del producto. Si desea saber el total de la orden escriba 0"))
        pedido.push(productoelegido)
    } while (productoelegido !== 0)

    let total = pedido.reduce((a, b) => a + b, 0);
    alert("El total de su pedido es: $" + total)
}

