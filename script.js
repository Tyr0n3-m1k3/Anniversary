function showLetter() {
  document.querySelector('.letter').style.display = 'block';
}

function showGallery() {
  document.querySelector('.gallery').style.display = 'flex';
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) music.play();
  else music.pause();
}

function startRoseMagic() {
  const container = document.querySelector('.roses');
  for (let i = 0; i < 15; i++) {
    const rose = document.createElement('div');
    rose.className = 'rose';
    rose.style.left = Math.random() * window.innerWidth + 'px';
    rose.style.top = Math.random() * 150 + 'px';
    container.appendChild(rose);
    setTimeout(() => { rose.style.opacity = '1'; }, i * 200);
  }
}

// Heart animation
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function drawHeart(x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
  ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
  ctx.fillStyle = '#ff69b4';
  ctx.fill();
  ctx.restore();
}

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: 0,
    size: Math.random() * 10 + 10,
    speed: Math.random() * 2 + 1
  };
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.1) hearts.push(createHeart());
  hearts.forEach((h, i) => {
    h.y += h.speed;
    drawHeart(h.x, h.y, h.size);
    if (h.y > canvas.height) hearts.splice(i, 1);
  });
  requestAnimationFrame(update);
}
update();