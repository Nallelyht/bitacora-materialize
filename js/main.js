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
//variable para guardar el id de la entrada llamada autor
//var autor = document.getElementById("autor");
//var boton = document.getElementById("boton");
//
////eventos para el contador de clicks, cuando se da click en la textarea o el input no cuenta el click
//document.addEventListener("click", contadorClick);
//tweet.addEventListener("click", sinClick);
//autor.addEventListener("click", sinClick);
//boton.addEventListener("click", sinClick);
//
///*funcion para mostrar los tweets, se declara la variable ponerTweet para guardar el id donde se va a enviar los nuevos tweets, las variables nTweet, linea,salto crean nuevos elementos, div, hr y br respectivamente, en el div se guarda el valor de la text area y el autor, todo se agrega al nodo ponerTweet*/
//function mostrarTweet(){
//
//	var ponerTweet = document.getElementById("nuevoTweet");
//	var nTweet = document.createElement("div");
//	var linea = document.createElement("hr");
//	var salto = document.createElement("br");
//
//	nTweet.innerHTML = tweet.value +"<br> Por "+ autor.value;
//
//	ponerTweet.appendChild(nTweet);
//	ponerTweet.appendChild(linea);
//}