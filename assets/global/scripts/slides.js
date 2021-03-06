function newSlide() {
	var container      = document.getElementById('slide-container');
	var lastSlideId    = container.lastChild.id;
	var newSlide       = document.createElement('div');
	newSlide.className = "col-md-10 slide";
	newSlide.id        = parseInt(lastSlideId)+1;
	var slideHTML      = '<h1 contenteditable="true">Tapez votre Titre<\/h1><p contenteditable="true">'
					   + 'You just make slides in plain old HTML, and the framework will present them for you.  You can create themes and layouts with CSS.<\/p>';
	newSlide.innerHTML = slideHTML;
	document.getElementById('currentSlide').innerHTML = newSlide.id;
	container.appendChild(newSlide);
	showSlide(newSlide.id);
}

function showSlide(indice) {
	var slides = document.getElementsByClassName('slide');
	for (var i = 0; i < slides.length; i++) {
		if (parseInt(slides[i].id) == indice) {
			slides[i].style.display = 'block';
		}
		else{
			slides[i].style.display = 'none';
		}
	}
	document.getElementById('currentSlide').innerHTML = indice+" sur "+slides.length;
}

function next() {
	var slides       = document.getElementsByClassName('slide');
	var currentSlide = parseInt(document.getElementById('currentSlide').innerHTML);
	if(currentSlide == slides.length){
		newSlide();
	}
	else{
		showSlide(currentSlide+1);
	}
}

function previous() {
	var slides       = document.getElementsByClassName('slide');
	var currentSlide = parseInt(document.getElementById('currentSlide').innerHTML);
	if(currentSlide > 1){
		showSlide(currentSlide-1);
	}
}

function setChapitre() {
	var currentSlide = parseInt(document.getElementById('currentSlide').innerHTML);
	var slides = document.getElementsByClassName('slide');
	for (var i = 0; i < slides.length; i++) {
		if (parseInt(slides[i].id) == currentSlide) {
			var slideHTML = '<h1 contenteditable="true" class="chapitre" style="text-align: center; margin : auto">Titre du chapitre<\/h1>';
			slides[i].innerHTML = slideHTML;
		}
	}
}

function supprimer() {
	var slides       = document.getElementsByClassName('slide');
	var currentSlide = parseInt(document.getElementById('currentSlide').innerHTML);
	if(parseInt(slides[currentSlide-1].id) > 1){
		slides[currentSlide-1].parentNode.removeChild(slides[currentSlide-1]);
		showSlide(currentSlide-1);
	}
}