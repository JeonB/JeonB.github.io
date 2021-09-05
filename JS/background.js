const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

body.style.backgroundImage = `url('img/${chosenImage}')`;
body.style.backgroundRepeat = `no-repeat`;
body.style.backgroundSize = `cover`;
