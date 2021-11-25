const icons =document.querySelectorAll('.section-1-icons i')

setInterval(()=>{

    const icon=document.querySelector('.section-1-icons.change')
    icon.classList.remove('change')
    icon.nextElementSibling.classList.add('change')

},1000)