// Show the letter section
function showLetter() {
  document.querySelector('.letter').style.display = 'block';
}

// Show the gallery section
function showGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.style.display = 'flex';
}

// Start rose blooming animation
function startRoseMagic() {
  const container = document.querySelector('.roses');
  container.innerHTML = ''; // Clear previous roses

  for (let i = 0; i < 20; i++) {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.style.left = `${Math.random() * 90}%`;
    rose.style.animationDelay = `${i * 0.15}s`;
    container.appendChild(rose);
  }
}

// Unmute YouTube video by switching to correct Cold Water URL
function unmuteVideo() {
  const iframe = document.getElementById('ytplayer');
  iframe.src = "https://www.youtube.com/embed/tnx3pZBNLw8?autoplay=1&loop=1&playlist=tnx3pZBNLw8";
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
    speed: Math.random() * 1.5 + 0.5,
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
  if (Math.random() < 0.15 && hearts.length < 100) {
    hearts.push(createHeart());
  }

  for (let i = 0; i < hearts.length; i++) {
    const heart = hearts[i];
    heart.y += heart.speed;

    if (heart.y > canvas.height) {
      hearts.splice(i, 1);
      i--;
    } else {
      drawHeart(heart);
    }
  }

  requestAnimationFrame(updateHearts);
}
updateHearts();
