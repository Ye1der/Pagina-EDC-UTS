// TIMELINE 

//Array
const lineaDeTiempo = [

{
    name: "1946",
    description: "La primera computadora electrónica de uso general, ENIAC, es creada por J. Presper Eckert y John Mauchly en la Universidad de Pensilvania."
},
{
    name: "1951",
    description: "La UNIVAC I, la primera computadora comercial, es lanzada por la compañía Remington Rand."
},
{
    name: "1953",
    description: "IBM lanza su primera computadora, la IBM 701."
},
{
    name: "1958",
    description: "Se crea el primer chip, el transistor, por parte de Texas Instruments y Fairchild Semiconductor."
},
{
    name: "1958",
    description: "se presenta el Bell 101 dataset, el primer módem comercial capaz de transmitir datos digitales sobre una línea telefónica convencional"

},
{
    name: "1964",
    description: "IBM lanza la primera familia de computadoras System/360, las cuales podían ser configuradas para diferentes aplicaciones."
},
{
    name: "1971",
    description: "Intel lanza el primer microprocesador, el Intel 4004."
},
{
    name: "1975",
    description: "Se funda Microsoft por Bill Gates y Paul Allen."
},
{
    name: "1981",
    description: "IBM lanza la primera computadora personal, la IBM PC."
},
{
    name: "1983",
    description: "ARPANET, la red precursora de Internet, cambia a TCP/IP, el protocolo que se utiliza hoy en día."
},
{
    name: "1984",
    description: "Apple lanza la primera Macintosh con una interfaz de usuario gráfica."
},
{
    name: "1989",
    description: "Tim Berners-Lee inventa la World Wide Web."
},
{
    name: "1991",
    description: "Linus Torvalds crea el sistema operativo Linux."
},
{
    name: "1993",
    description: "El primer navegador web, Mosaic, es lanzado por Marc Andreessen."
},
{
    name: "1995",
    description: "Microsoft lanza Windows 95, el primer sistema operativo de la compañía en incluir soporte para USB y el primer sistema operativo en integrar Internet Explorer."
},
{
    name: "1998",
    description: "Google es fundado por Larry Page y Sergey Brin."
},
{
    name: "2001",
    description: "Apple lanza el iPod, que revoluciona la forma en que se escucha y se compra música."
},
{
    name: "2003",
    description: "Se lanza la primera versión de WordPress, un popular sistema de gestión de contenido."
},
{
    name: "2007",
    description: "Apple lanza el iPhone, que cambia para siempre la forma en que las personas usan los teléfonos móviles."
},
{
    name: "2010",
    description: "Se lanza el iPad, que populariza las tabletas."
},
{
    name: "2015",
    description: "Se lanza la primera versión de TensorFlow, una biblioteca de aprendizaje automático de código abierto."
},
{
    name: "2020",
    description: "La pandemia del COVID-19 acelera la adopción del trabajo remoto y la educación en línea, lo que lleva a un aumento en la demanda de hardware y software relacionados con la tecnología de la información."
}

]

// render html

var html = "";
lineaDeTiempo.forEach(e=>{
    html +="<div class='child'><div class='content'> <h4>"+e.name+"</h4><p>"+e.description+"</p></div> </div>"
})

timeline.innerHTML = html

// Animacione

var _items = document.querySelectorAll(".child")

_items.forEach(element =>{
    if(element.offsetTop < 200)
        element.classList.add("_show")
})

window.addEventListener("scroll", e => {
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEach(elem => {
        if (elem.offsetTop - window.innerHeight / 2 < scroll) {
            elem.classList.remove("_hide")
            elem.classList.add("_show")
        } else {
            elem.classList.remove("_show")
            elem.classList.add("_hide")
        }
    })
})

