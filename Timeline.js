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
    name: "1964",
    description: "IBM lanza la primera familia de computadoras System/360, las cuales podían ser configuradas para diferentes aplicaciones."
},
{
    name: "1971",
    description: "Intel lanza el primer microprocesador, el Intel 4004."
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