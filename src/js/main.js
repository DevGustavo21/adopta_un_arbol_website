const openBtn = document.querySelector('.hamburguer')
const nav = document.querySelector('.navbar')
const donate = document.querySelector('.donate')
const closeBtn = document.querySelector('.close')

openBtn.addEventListener('click', () =>{
    nav.classList.add('active_nav')
    donate.style.display='none'
})

closeBtn.addEventListener('click', ()=>{
    nav.classList.remove('active_nav')
    donate.style.display='inline'
})