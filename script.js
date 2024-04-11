const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 1200;
const maxRadius = 3;
const maxSpeed = 1;
const defaultSpeed = 0.5;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let isCursorMoving = false;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

class Particle {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = randomInRange(0.2, maxRadius);
    this.speedX = randomInRange(-0.3, 0.3);
    this.speedY = randomInRange(-0.3, 0.3);
    this.opacity = randomInRange(0.5, 1);
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
  }

  update() {
    if (!isCursorMoving) {
      const deltaX = mouseX - this.x;
      const deltaY = mouseY - this.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > 20) {
        this.speedX += defaultSpeed * (deltaX / distance);
        this.speedY += defaultSpeed * (deltaY / distance);
      }
    }

    // Limitar la posición dentro de los límites de la pantalla
    this.x = Math.max(0, Math.min(this.x + this.speedX, canvas.width));
    this.y = Math.max(0, Math.min(this.y + this.speedY, canvas.height));
  }

  updateSpeed() {
    const deltaX = mouseX - this.x;
    const deltaY = mouseY - this.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (distance < 10) {
      const speedRatio = (20 - distance) / 20;
      this.speedX += maxSpeed * (deltaX / distance) * speedRatio;
      this.speedY += maxSpeed * (deltaY / distance) * speedRatio;
    }
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    if (isCursorMoving) {
      particle.updateSpeed();
    }
    particle.update();
    particle.draw();
  });
}

animate();

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  isCursorMoving = true;
  setTimeout(() => {
    isCursorMoving = false;
  }, 20);
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
