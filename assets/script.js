// Images du carrousel
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Variables pour l'état actuel
let index = 0 // Index de l'image actuelle
const bannerImage = document.querySelector('.banner-img') // Sélection de l'image du carrousel
const bannerText = document.querySelector('#banner p') // Sélection du texte de la bannière


// Création des dots
const dotsContainer = document.querySelector(".dots")

function switch_dot(){
	dotsContainer.innerHTML = "" //Réinitialisation des dots
	for (let image_slide = 0; image_slide < slides.length; image_slide++){
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dotsContainer.appendChild(dot)
		if (image_slide === index){
			dot.classList.add("dot_selected")
		}
		// Événement de clic sur le dot
		dot.addEventListener('click', () => {
			index = image_slide; // Met à jour l'index sur clic
			updateBanner(); // Met à jour la bannière
		});
	}
}
switch_dot()


// Fonction pour mettre à jour l'image et le texte de la bannière
function updateBanner() {
	bannerImage.src = `./assets/images/slideshow/${slides[index].image}` // Met à jour l'image
	bannerText.innerHTML = slides[index].tagLine; // Met à jour le texte

	// Met à jour les dots
	const dots = document.querySelectorAll('.dot')
	dots.forEach(dot => dot.classList.remove('dot_selected')) // Réinitialise les classes
	dots[index].classList.add('dot_selected') // Ajoute la classe active au dot courant

	// Vérifie l'image et le texte
	console.log(`Image source: ${bannerImage.src}, Texte: ${bannerText.innerHTML}`) 
}

//Création des events listeners des flèches

const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", () => {
	console.log("vous avez cliqué sur la flèche gauche")
	index = (index - 1 + slides.length) % slides.length // Décrémentation et boucle
	updateBanner() // Met à jour la bannière
})

const arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", () => {
	console.log("vous avez cliqué sur la flèche droite")
	index = (index + 1 + slides.length) % slides.length // Incrémentation et boucle
	updateBanner() // Met à jour la bannière
})

// Initialisation du carrousel
switch_dot(); // Appel initial pour créer les dots
updateBanner(); // Appel initial pour mettre à jour la bannière avec la première image
console.log("Initialisation du carrousel")
