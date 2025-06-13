document.addEventListener('DOMContentLoaded', function() {
    // Music Player
    const audio = document.getElementById('anniversary-song');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const replayBtn = document.getElementById('replay-btn');
    
    playBtn.addEventListener('click', () => {
        audio.play();
    });
    
    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });
    
    replayBtn.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
    });
    
    // Flower Animation
    const flowerBtn = document.getElementById('flower-btn');
    const flowerContainer = document.getElementById('flower-container');
    
    flowerBtn.addEventListener('click', createFlowerAnimation);
    
    function createFlowerAnimation() {
        // Clear previous flowers
        flowerContainer.innerHTML = '';
        
        // Create multiple roses
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const rose = document.createElement('div');
                rose.classList.add('rose');
                
                // Random position
                const xPos = Math.random() * (flowerContainer.offsetWidth - 30);
                const yPos = Math.random() * (flowerContainer.offsetHeight - 30);
                
                rose.style.left = `${xPos}px`;
                rose.style.top = `${yPos}px`;
                
                // Random size variation
                const size = 20 + Math.random() * 20;
                rose.style.width = `${size}px`;
                rose.style.height = `${size}px`;
                
                flowerContainer.appendChild(rose);
            }, i * 100);
        }
        
        // Create floating hearts
        createHearts(10);
    }
    
    // Floating Hearts
    const heartsContainer = document.getElementById('hearts-container');
    
    function createHearts(count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                
                // Random position at bottom
                const xPos = Math.random() * window.innerWidth;
                heart.style.left = `${xPos}px`;
                heart.style.bottom = '-20px';
                
                // Random size
                const size = 15 + Math.random() * 15;
                heart.style.width = `${size}px`;
                heart.style.height = `${size}px`;
                
                // Random animation duration
                const duration = 3 + Math.random() * 7;
                heart.style.animationDuration = `${duration}s`;
                
                heartsContainer.appendChild(heart);
                
                // Remove heart after animation
                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);
            }, i * 300);
        }
    }
    
    // Gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Replace with your actual image paths
    const galleryImages = [
        'pic1.jpg',
        'pic2.jpg',
        'pic3.jpg',
        // Add more images as needed
    ];
    
    galleryImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('gallery-item');
        galleryGrid.appendChild(img);
    });
    
    // Initial small animation when page loads
    setTimeout(() => {
        createHearts(3);
    }, 1000);
});
