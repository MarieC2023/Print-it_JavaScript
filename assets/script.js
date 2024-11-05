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
//Variables pour l'état actuel
let index = 0 // Index de l'image actuelle
const bannerImage = document.querySelector('.banner-img') // Sélection de l'image du carrousel
const bannerText = document.querySelector('#banner p') // Sélection du texte de la bannière


//Création des dots
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
	}
}
switch_dot()

//Création des events listeners des flêches

const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", () => {
	console.log("vous avez cliqué sur la flêche gauche")
})

const arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", () => {
	console.log("vous avez cliqué sur la flêche droite")
})