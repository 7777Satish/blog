var nav = document.getElementById('nav');
var lastscroll = 0;
window.addEventListener('scroll',(e)=>{
    if(window.pageYOffset>lastscroll){
        nav.style.top='-80px';
    } else {
        nav.style.top = '0px'
    }
    lastscroll = window.pageYOffset;
})