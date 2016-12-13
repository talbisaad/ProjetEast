function newSlide() {
	var container = document.getElementById('slide-container');
	var newSlide  = document.createElement('div');
	newSlide.className = "col-md-10 slide";
	var slideHTML = '<h1 contenteditable="true">Tapez votre Titre<\/h1>'
                                                    +'<p contenteditable="true">You just make slides in plain old HTML, and the framework will present them for you.  You can create themes and layouts with CSS.<\/p>';
	newSlide.innerHTML = slideHTML;
	container.appendChild(newSlide);
}