function addImages(containerId, urls) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // clear existing images
  urls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery Image';
    img.style.margin = '5px';
    img.width = 150;
    container.appendChild(img);
  });
}

// Example image URLs
const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg'
];

// Run when the page is loaded
window.addEventListener('DOMContentLoaded', () => {
  addImages('images', images); // 👈 matches the <div id="images">
});

// Get the current hour
const now = new Date();
const hour = now.getHours();

// Select the element
const messageElement = document.getElementById('project-message');

// Determine the greeting
let greeting = '';

if (hour >= 5 && hour < 12) {
  greeting = 'Welcome to my Gallery ,Good morning';
} else if (hour >= 12 && hour < 18) {
  greeting = 'Welcome to my Gallery ,Good afternoon';
} else {
  greeting = 'Welcome to my Gallery ,Good evening';
}

// Update the text
messageElement.textContent = greeting;



// Function to update the about message with the image count
function updateImageCount() {
  const imagesContainer = document.getElementById('images');
  const imageCount = imagesContainer.querySelectorAll('img').length;
  const aboutMessage = document.getElementById('about-message');
  aboutMessage.textContent = `This gallery has ${imageCount} images.`;
}

// Run when the page is loaded
window.addEventListener('DOMContentLoaded', () => {
  addImages('images', images); // add images
  updateImageCount(); // update image count after images are added
});
