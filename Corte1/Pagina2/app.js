
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