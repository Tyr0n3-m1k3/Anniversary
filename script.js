function showLetter() {
  document.querySelector('.letter').style.display = 'block';
}

function showGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.style.display = 'flex';
}

function startRoseMagic() {
  const container = document.querySelector('.roses');
  for (let i = 0; i < 20; i++) {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.style.left = Math.random() * window.innerWidth + 'px';
    rose.style.top = Math.random() * window.innerHeight + 'px';
    container.appendChild(rose);
    setTimeout(() => {
      rose.style.opacity = '1';
    }, i * 150);
  }
}

function unmuteVideo() {
  const iframe = document.getElementById('ytplayer');
  iframe.src = "https://m.youtube.com/watch?v=nBtDsQ4fhXY&pp=ygUKQ29sZCB3YXRlcg%3D%3D";
}

// Falling hearts animation
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: 0,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    color: '#ff69b4'
  };
}

function drawHeart(heart) {
  ctx.fillStyle = heart.color;
  ctx.beginPath();
  ctx.moveTo(heart.x, heart.y);
  ctx.arc(heart.x - heart.size / 4, heart.y, heart.size / 4, 0, Math.PI * 2);
  ctx.arc(heart.x + heart.size / 4, heart.y, heart.size / 4, 0, Math.PI * 2);
  ctx.lineTo(heart.x, heart.y + heart.size);
  ctx.closePath();
  ctx.fill();
}

function updateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.3) {
    hearts.push(createHeart());
  }
  hearts.forEach((heart, index) => {
    heart.y += heart.speed;
    if (heart.y > canvas.height) {
      hearts.splice(index, 1);
    } else {
      drawHeart(heart);
    }
  });
  requestAnimationFrame(updateHearts);
}
updateHearts();
