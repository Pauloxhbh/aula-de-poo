var celular1 = new Celular(
    "Samsung",
    "Galaxy A32",
    "4 GB",
    "128 GB",
    "2x 2.0 GHz Cortex-A75 + 6x 1.8 GHz Cortex-A55",
    "5",
    "589299.jpg"
)
var celular2 = new Celular(
    "Apple",
    "Iphone14",
    "6 GB",
    "524 GB",
    "2x 3.22 GHz Avalanche + 4x 1.82 GHz Blizzard",
    "3",
    "638678.jpg"
)
var celular3 = new Celular(
    "Apple",
    "Iphone13",
    "4 GB",
    "512 GB",
    "2x 3.22 GHz Avalanche + 4x 1.82 GHz Blizzard",
    "3",
    "590579.jpg"
)

var celular4 = new Celular(
    "Motorola",
    "Moto G 2023",
    "4 GB",
    "128 GB",
    "2x 2.2 GHz Kryo 460 + 6x 1.8 GHz Kryo 460",
    "3",
    "667518.webp"
)

var celular5 = new Celular(
    "Nokia",
    "XR21",
    "6 GB",
    "128 GB",
    "2x 2.2 GHz Kryo 660 Gold + 6x 1.7 GHz Kryo 660 Silver",
    "3",
    "667542.webp"
)

var celulares = []
celulares.push(celular1,celular2,celular3,celular4,celular5)
document.write(`
<div class='card'>

    <img class='foto' src='img/${celular1.foto}'/>
    <div class='info'>

        <h3 class='modelo'>${celular1.modelo}</h3>
        <p class='marca'>${celular1.marca}</p>

    <span class='outros'>${celular1.processador}</span>
    <span class='separador'>|</span>
    <span class='outros'>${celular1.armazenamento}</span>
    <span class='separador'>|</span>
    <span class='outros'>${celular1.ram}</span>
    <span class='separador'>|</span>
    <span class='outros'>${celular1.cameras}</span>
    <span class='separador'>|</span>
    
    </div>
    </div>
    `)
