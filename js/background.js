const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"]
const bgImg = document.createElement("img");

const randomImage = images[(Math.floor(Math.random() * images.length))];

bgImg.classList.add("bg-img");
bgImg.src = `images/background/${randomImage}`;

document.body.appendChild(bgImg);