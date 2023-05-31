
/* Menu Corte 1 */
const contenedor = document.querySelector('.primerCorte')
const menu = document.querySelector('.navegacion1')
const boton = document.querySelector('.corte1')

contenedor.addEventListener('mouseenter', function(){
    menu.style.display = 'block'
    boton.style.opacity = '0.7'
    setTimeout( function(){
    menu.style.opacity = '1'
    }, 100)
})

contenedor.addEventListener('mouseleave', function(){
    menu.style.opacity = '0'
    setTimeout(()=>{
    menu.style.display = 'none'
    }, 300)
    boton.style.opacity = '1'
})


/* Menu Corte 2 */
const contenedor2 = document.querySelector('.segundoCorte')
const menu2 = document.querySelector('.navegacion2')
const boton2 = document.querySelector('.corte2')

contenedor2.addEventListener('mouseenter', function(){
    menu2.style.display = 'block'
    setTimeout( function(){
    menu2.style.opacity = '1'
    }, 100)
    boton2.style.opacity = '0.7'
})

contenedor2.addEventListener('mouseleave', function(){
    menu2.style.opacity = '0'
    setTimeout(()=>{
    menu2.style.display = 'none'
    }, 300)
    boton2.style.opacity = '1'
})


// Menu corte 3
const contenedor3 = document.querySelector('.tercerCorte')
const menu3 = document.querySelector('.navegacion3')
const boton3 = document.querySelector('.corte3')

contenedor3.addEventListener('mouseenter', function(){
    menu3.style.display = 'block'
    setTimeout( function(){
    menu3.style.opacity = '1'
    }, 100)
    boton3.style.opacity = '0.7'
})

contenedor3.addEventListener('mouseleave', function(){
    menu3.style.opacity = '0'
    setTimeout(()=>{
    menu3.style.display = 'none'
    }, 300)
    boton3.style.opacity = '1'
})
