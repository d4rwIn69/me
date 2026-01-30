function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
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
    setInterval(createHeart, 300); // Genera un corazón cada 400ms

});
