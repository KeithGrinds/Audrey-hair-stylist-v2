// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('active');
});

// Glowing Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Form Submission Demo
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! Audrey will contact you soon.');
  form.reset();
});

// Scroll-based fade-in animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

// Animated Hair Strands on Hero Background
const canvas = document.getElementById('hairCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let strands = [];
for(let i=0;i<80;i++){
  strands.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, len:Math.random()*80+20, speed:Math.random()*1+0.2});
}

function animateStrands(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle='rgba(255,105,180,0.3)';
  ctx.lineWidth=1.5;
  strands.forEach(s=>{
    ctx.beginPath();
    ctx.moveTo(s.x,s.y);
    ctx.lineTo(s.x+Math.sin(Date.now()*0.002+s.y)*20,s.y-s.len);
    ctx.stroke();
    s.y+=s.speed;
    if(s.y>canvas.height+s.len) s.y=-10;
  });
  requestAnimationFrame(animateStrands);
}
animateStrands();

window.addEventListener('resize',()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; });
