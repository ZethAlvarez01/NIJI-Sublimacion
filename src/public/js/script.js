
function desplegar(){

    let menu = document.getElementById("menuh");
    let menuf = document.getElementById("fondoF");
    
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        menuf.classList.remove("activef");
    }else{
        menu.classList.add("active");
        menuf.classList.add("activef");
    }

}


function notification(){
    let noti = document.getElementById('noti');

    if(noti.innerHTML == "0"){
        noti.style.visibility = "hidden";
    }else{
        noti.style.visibility = "visible";
    }

}
