// Navbar toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>navLinks.classList.toggle('show'));

// Slider
let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function showSlide(index){
    slides.style.transform = `translateX(-${index*100}%)`;
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide(){
    currentIndex = (currentIndex -1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto-play slider every 3 sec
setInterval(nextSlide,3000);

// Add to Cart
function addToCart(name, price){
    alert(`${name} added to cart at ₹${price}`);
}
