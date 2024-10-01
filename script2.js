const ul = document.querySelector('ul');
function hide() {
    ul.style.display = 'none'
}
function show() {
    if(ul.style.display === "flex"){
        ul.style.display = 'flex'
    }else{
        alert('Switch to Desktop Mode..!')
    }
}