console.log('hello world!')
document.querySelector('div#mobile-menu').addEventListener('click', ()=>{
    console.log('hamburger click')
    let dropdown = document.querySelector('div.drop-down')

    console.log('drop down element')
    console.log(dropdown)

    console.log('dropdown class list')
    console.log(dropdown.classList) 

    console.log('class list type')
    console.log(typeof dropdown.classList)

    console.log(dropdown.classList.contains('sanity-check'))

    if(dropdown.classList.contains('hidden')){
        console.log('hidden')
        dropdown.classList.remove('hidden') 
        dropdown.style.display = 'block'
        //dropdown.setAttribute('hidden', 'false')
    }else{
        console.log('not hidden')
        dropdown.classList.add('hidden') 
        dropdown.style.display = 'none'
        //dropdown.setAttribute('hidden', 'true')
    }

})