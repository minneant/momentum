const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.style.position = "fixed";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.objectFit = "cover"; // Cover the entire background
bgImage.style.zIndex = "-1"; // Ensure it is behind other content
