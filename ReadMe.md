# **Carrousel d'Images**

![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Ce projet est un carrousel d'images interactif qui permet de naviguer entre différentes diapositives. Les utilisateurs peuvent faire défiler les images en cliquant sur les flèches de navigation ou en sélectionnant des points (dots) pour afficher une image spécifique. 


## **Fonctionnalités**

- **Navigation par flèches :** Les utilisateurs peuvent passer d'une image à l'autre à l'aide des flèches gauche et droite. <br>
- **Navigation par points :** Des points de navigation en bas du carrousel indiquent l'image sélectionnée et permettent de sauter directement à une image spécifique.<br>
- **Mise à jour du texte :** Chaque image est accompagnée d'un texte descriptif qui se met à jour en fonction de l'image affichée.<br>

## **Aperçu du Code**

Le projet utilise HTML, CSS et JavaScript pour créer une expérience de carrousel fluide et interactive. Voici un aperçu des principales sections du code :

- ```slides``` : Un tableau d'objets contenant les images et les textes associés pour chaque diapositive.<br>
- ```switch_dot()``` : Génère les points de navigation et les met à jour en fonction de l'image active.<br>
- ```updateBanner()``` : Met à jour l'image, le texte, et les points de navigation en fonction de l'index de l'image actuellement affichée.<br>
- **Écouteurs d'événements :** Gère les clics sur les flèches et les points pour naviguer dans le carrousel.<br>

## **Installation**

1. **Clonez le dépôt** ou téléchargez les fichiers sources : https://github.com/MarieC2023/Print-it_JavaScript.git

2. **Placez les images dans le dossier** ```./assets/images/slideshow/``` en suivant la structure des fichiers mentionnés dans le tableau ```slides``` du code (par exemple ```slide1.jpg```, ```slide2.jpg```, etc.).

3. **Ouvrez le fichier ```index.html```** dans votre navigateur pour voir le carrousel en action.

## **Utilisation du Code**

Voici un aperçu de l'utilisation des fonctions principales :

- ```switch_dot()``` : Cette fonction est appelée lors de l'initialisation pour créer les points en fonction du nombre d'images dans le tableau ```slides```. Chaque point est cliquable et met à jour l'image affichée lorsqu'il est sélectionné.<br>

- ```updateBanner()``` : Cette fonction est également appelée à l'initialisation pour afficher la première image. Elle est ensuite rappelée chaque fois qu'un utilisateur clique sur une flèche ou un point. Elle met à jour :<br>
    - L'image en fonction de ```slides[index].image```.<br>
    - Le texte en fonction de ```slides[index].tagLine```.<br>
    - Le style des points pour indiquer l'image actuellement sélectionnée.<br>

## **Explications Techniques**

- **HTML :** Le fichier ```index.html``` contient la structure de base du carrousel, incluant les conteneurs pour l'image, le texte, les flèches, et les points de navigation.<br>
- **CSS :** Utilisé pour le style de la bannière, l'affichage des flèches, et l'apparence des points.<br>
- **JavaScript :** Le fichier ```script.js``` contrôle la logique du carrousel, comme le changement d'image, la mise à jour des points et les animations de transition.<br>

## **Améliorations futures**

Des améliorations sont en cours de développement pour enrichir l'expérience utilisateur et optimiser le carrousel. Voici les principales évolutions prévues :<br>

### **1. Rendre le Carrousel Automatique**

Je souhaite ajouter une fonctionnalité de défilement automatique, permettant aux images de changer toutes les quelques secondes sans intervention de l’utilisateur. Cette fonctionnalité inclura :
- Un intervalle de temps configurable pour le changement d'image.
- Une option pour mettre en pause le défilement automatique dès que l'utilisateur interagit avec le carrousel (en cliquant sur une flèche ou un point).
- Un éventuel bouton pour activer/désactiver le mode automatique, offrant ainsi plus de contrôle à l'utilisateur.

### **2. Améliorer la Visibilité des Points de Navigation (Dots)**

Pour améliorer l'accessibilité visuelle, nous allons modifier le style des points de navigation :
- Une couleur de fond plus contrastée pour les dots, avec une couleur spécifique pour le dot actif.
- Potentiellement, une ombre ou un effet de surbrillance pour les rendre plus visibles sur des images de différentes luminosités.

### **3. Rendre le site Responsive**

Pour garantir une expérience utilisateur optimale sur toutes les tailles d’écran, le site sera rendu responsive :
- **Structure Responsive :** Adapter les mises en page pour les écrans de toutes tailles (ordinateurs de bureau, tablettes, et mobiles), en réorganisant certains éléments pour une meilleure lisibilité sur les petits écrans.
- **Typographie et Éléments Visuels :** Ajuster les tailles de police, les marges et les paddings pour garantir une bonne lisibilité et un affichage harmonieux.
- **Images et Médias :** Utiliser des images adaptatives, en intégrant des techniques de chargement conditionnel (responsive images) pour réduire la bande passante sur les mobiles.
- **Navigation Mobile :** Ajouter une navigation simplifiée sur mobile pour faciliter l'accès aux différentes sections du site sur de petits écrans.

Ces améliorations visent à offrir une expérience utilisateur cohérente et optimisée sur tous les appareils, garantissant que le site soit accessible, esthétique et fonctionnel pour tous les visiteurs.

## **Crédits**

Créé par OpenClassrooms dans le cadre de la formation Testeur Logiciel. Ajout du carrousel dynamique réalisé par Marie COLLET. 
