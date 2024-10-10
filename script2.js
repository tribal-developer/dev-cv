

const ul = document.querySelector('.ul');
const show = document.querySelector('.show-btn');
const hide = document.querySelector('.toggle-btn');

show.addEventListener('click', (e)=>{
    ul.style.display = 'flex';
    ul.style.top = '0';
    ul.style.transition = 'all .5s'
})
hide.addEventListener('click', (e)=>{
    ul.style.display = 'none';
    ul.style.top = '-16rem';
     ul.style.transition = 'all 6s'
})