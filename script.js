const WHATSAPP_NUMBER = "593959966556"; 

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if(target) target.classList.add('active');
}

function hacerPedido(nombre, precio) {
    const texto = `¡Hola Mamey Ecuador! Me interesa el producto: *${nombre}* ($${precio}). Quisiera más información para concretar mi pedido.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
}

function personalizarWhatsApp() {
    const texto = `¡Hola Mamey Ecuador! Me gustaría solicitar un *diseño personalizado*. ¿Podrían ayudarme con el proceso?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        const size = Math.random() * 20 + 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000); 
    }
    setInterval(createHeart, 400); 
});
