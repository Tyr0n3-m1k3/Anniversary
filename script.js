function showFlowers() {
    const flower = document.getElementById("flower-animation");
    flower.style.display = "block";
    setTimeout(() => {
        flower.style.display = "none";
    }, 5000);
}

function createHearts() {
    const heartContainer = document.querySelector(".heart-container");
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";
        heartContainer.appendChild(heart);
    }
}
createHearts();
