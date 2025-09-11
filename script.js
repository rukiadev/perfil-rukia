/* JS: partículas sincronizadas con glow de la nube */
const symbols = ['🦇','🖤','💜','💀','🌙'];
const colors = ['#f5a9f0','#d8b4e2','#a18abb','#ffb6c1','#cdb4db'];

const particlesContainer = document.querySelector('.particles');

function createParticle() {
  const particle = document.createElement('span');
  particle.classList.add('particle');
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  
  particle.style.left = Math.random() * 100 + '%';
  const size = 0.8 + Math.random() * 0.7;
  particle.style.fontSize = size + 'em';
  
  const color = colors[Math.floor(Math.random() * colors.length)];
  particle.style.color = color;
  
  const duration = 5 + Math.random() * 5;
  particle.style.animationDuration = `${duration}s, ${4 + Math.random()*2}s, 4s`;
  
  particlesContainer.appendChild(particle);
  setTimeout(() => particle.remove(), duration * 1000);
}

setInterval(createParticle, 400);
