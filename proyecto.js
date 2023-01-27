//aplica estilo a la opcion selccionada
function selecionar(link){
    var opciones = document.querySelector('#links a');
    opciones [0].className = "";
    opciones [1].className = "";
    opciones [2].className = "";
    opciones [3].className = "";
    opciones [4].className = "";
    link.className="seleccionado"
//desaparece menu
var x =document.getElementById("nav");
x.className = "";

}
//funcion para menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === ""){
        x.className = "responsive"
    }else{
        x.className = "";
    }
}

window.onscroll = function(){
    efectoHabilidades()
}

function efectoHabilidades() {
    var skills =document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills>=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("git").classList.add("barra-progreso4");
    }
}