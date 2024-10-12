var hidden_nav = document.getElementById('hidden_nav');
var n_up = true;
function togle_nav(){
    if(n_up){
        hidden_nav.style.top = "50px";
    }else{
        hidden_nav.style.top = "-300px";
    }
    n_up = !n_up;
}