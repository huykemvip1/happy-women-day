function createFlowers() {
    const flowerContainer = document.querySelector('.flowers');
    for (let i = 0; i < 20; i++) {
        let flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = (Math.random() * 3 + 2) + 's';
        flowerContainer.appendChild(flower);
        setTimeout(() => { flower.remove(); }, 5000);
    }
}
setInterval(createFlowers, 1000);