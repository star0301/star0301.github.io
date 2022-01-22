const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
const bgImg = document.createElement("img");
const indexBody = document.querySelector("body");

document.body.appendChild(bgImg);

indexBody.style.backgroundImage = `url(img/${chosenImg})`;
indexBody.style.backgroundSize = "cover";
