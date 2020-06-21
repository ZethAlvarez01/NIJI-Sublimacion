
function desplegar(){

    let menu = document.getElementById("menuh");
    let menuf = document.getElementById("fondoF");
    let face = document.getElementById("face-li");
    let what = document.getElementById("what");
    let goo = document.getElementById("google");
    let icon = document.getElementById("icon");
    
    if(menu.classList.contains("active")){
        face.classList.remove("aparecer");
        face.classList.add("lista-li-color");
        face.classList.remove("indice");

        what.classList.remove("aparecer");
        what.classList.add("lista-li-color");
        what.classList.remove("indice");

        goo.classList.remove("aparecer");
        goo.classList.add("lista-li-color");
        goo.classList.remove("indice");

        menu.classList.remove("active");
        menuf.classList.remove("activef");

        icon.classList.remove("active");
        
        
    }else{
        face.classList.add("aparecer");
        face.classList.remove("lista-li-color");
        face.classList.add("indice");

        what.classList.add("aparecer");
        what.classList.remove("lista-li-color");
        what.classList.add("indice");

        goo.classList.add("aparecer");
        goo.classList.remove("lista-li-color");
        goo.classList.add("indice");

        menu.classList.add("active");
        menuf.classList.add("activef");

        icon.classList.add("active");
        
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
