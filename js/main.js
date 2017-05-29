$(document).ready(function () {
	$(".modal").modal();
});

var mensaje = document.getElementById("modal-message");
var titulo = document.getElementById("modal-title");
var enviar= document.getElementById("send-text");

enviar.addEventListener("click", mostrarPublicacion);

function mostrarPublicacion(){
	var publicacion = document.getElementById("publication");
	var nPublicacion = document.createElement("div");
	var nTexto = document.createElement("p")
	var nTitulo = document.createElement("h3");

	nPublicacion.className="card-panel" +" " + "hoverable";

	nTitulo.innerHTML = titulo.value;
	nTexto.innerHTML = mensaje.value;
	nPublicacion.appendChild(nTitulo);
	nPublicacion.appendChild(nTexto);
	publicacion.appendChild(nPublicacion);
	
}
