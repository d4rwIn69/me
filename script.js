// Navegación
function goToPage(pageNum) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    document.getElementById('page' + pageNum).classList.add('active');
}

// WhatsApp
function sendWhatsapp(producto) {
    const phone = "593959966556"; 
    const message = encodeURIComponent(`🌸 ¡Hola Mamey Ecuador! Me interesa: ${producto}. Me gustaría realizar un pedido.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Control del Panel de Contacto
function toggleContact() {
    const overlay = document.getElementById('contactOverlay');
    overlay.classList.toggle('active');
}

// Lluvia de flores 🌸
function createFlower() {
    const rainContainer = document.getElementById('flowerRain');
    if (!rainContainer) return;
    const flower = document.createElement('div');
    flower.classList.add('falling-flower');
    flower.innerHTML = '🌸';
    flower.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * (22 - 12) + 12;
    flower.style.fontSize = size + 'px';
    const duration = Math.random() * (7 - 4) + 4;
    flower.style.animationDuration = duration + 's';
    flower.style.opacity = Math.random() * (0.7 - 0.3) + 0.3;
    rainContainer.appendChild(flower);
    setTimeout(() => { flower.remove(); }, duration * 1000);
}

setInterval(createFlower, 450);
