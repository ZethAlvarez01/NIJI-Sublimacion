function prueba(){

    console.log("Hola");
    
}

function notification(){
    let noti = document.getElementById('noti');

    if(noti.innerHTML == "0"){
        noti.style.visibility = "hidden";
    }else{
        noti.style.visibility = "visible";
    }

}