function SubirScroll(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function amostrarScroll(){
    if(window.scrollY === 0){
        document.querySelector('#scroll').style.display = 'none';
    } else{
        document.querySelector('#scroll').style.display = 'block';
    }
}
window.addEventListener('scroll', amostrarScroll);