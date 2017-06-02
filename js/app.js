(function imgdisplay(){
	var fotos = Array.from(document.getElementsByClassName("img-portfolio"));//tomo la clase de las imagenes
	var modal = document.getElementById("portfolioimgs");//lugar donde se va a mostrar
	var bodyModal, close, img;

	fotos.forEach(function(foto){
		foto.addEventListener("click", function(){

			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = foto.innerHTML;			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});

		})
	})
})();