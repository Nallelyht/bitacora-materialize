/* jQuery para funcionalidad del modal*/
$(document).ready(function () {
	$(".modal").modal();
});
/* Variables globales y funciones para la publicacion de texto*/
var mensaje = document.getElementById("modal-message");
var titulo = document.getElementById("modal-title");
var enviarT= document.getElementById("send-text");

enviarT.addEventListener("click", mostrarTexto);
enviarT.addEventListener("click", limpiarModal);

function mostrarTexto(){
	var publicacion = document.getElementById("publication");
	var nPublicacion = document.createElement("div");
	var nTexto = document.createElement("p")
	var nTitulo = document.createElement("h3");

	nPublicacion.className="card-panel " + "hoverable";

	nTitulo.innerHTML = titulo.value;
	nTexto.innerHTML = mensaje.value;
	nPublicacion.appendChild(nTitulo);
	nPublicacion.appendChild(nTexto);
	publicacion.appendChild(nPublicacion);

}
function limpiarModal(){
	mensaje.value = "";
	titulo.value = "";
	tituloI.value = "";
	textoI.value = "";
}
$('#modal-text').modal('close');
/*termina la parte del texto*/

/*variables globales y funciones para la publicacion de imagen*/
var tituloI = document.getElementById("title-image");
var imagen = document.getElementById("image-file");
var enviarI = document.getElementById("send-image");
var textoI = document.getElementById("image-text");


imagen.addEventListener("change", subirImagen);
enviarI.addEventListener("click", limpiarModal)



function subirImagen(){

	var reader =  new FileReader ();
	reader.readAsDataURL(this.files[0])
	reader.onload = function (){
		var imagenFile = this.result;
		var nImagen = document.createElement("img");
		var publicacion = document.getElementById("publication");
		var nPublicacion = document.createElement("div");
		var nTitulo = document.createElement("h3");

		nImagen.src = imagenFile;
		console.log(nImagen);
		nPublicacion.className = "card-panel  " + "hoverable";
		nImagen.className = "image-responsive " + "col " +"s12";
		nTitulo.innerHTML = tituloI.value;

		nPublicacion.appendChild(nTitulo);
		nPublicacion.appendChild(nImagen);
		publicacion.appendChild(nPublicacion);

		
		
	}
}
