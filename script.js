let currentIndex = 0;
const images = [
    'IMG/hotdog-g.png',
    'IMG/paella-product.png',
    'IMG/pasta-product.png',
    'IMG/pizza-product.png',
    'IMG/burger-product.png',
    'IMG/cake-product.png',
    'IMG/sushi-product.png',
    'IMG/cupcake-g.png'
];

function openModal(index) {
    currentIndex = index;
    document.getElementById('modalImage').src = images[currentIndex];
    document.getElementById('photoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    document.getElementById('modalImage').src = images[currentIndex];
}
