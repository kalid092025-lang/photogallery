// ---------- VARIABLES ----------
let projects = [
  {
    title: "Photo Gallery",
    img: "images/photo1.jpg",
    description: "A simple gallery using HTML, CSS & JS"
  },
  {
    title: "Flexbox Layout",
    img: "images/photo2.jpg",
    description: "Responsive layout built with Flexbox"
  },
  {
    title: "JavaScript Lightbox",
    img: "images/photo3.jpg",
    description: "Interactive lightbox with image zoom"
  },
  {
    title: "Responsive Portfolio",
    img: "images/photo4.jpg",
    description: "My multi-section portfolio website"
  }
];

// ---------- DOM ELEMENTS ----------
const gallery = document.querySelector(".gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// ---------- DISPLAY PROJECTS ----------
function displayProjects() {
  gallery.innerHTML = "";
  projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `
      <img src="${project.img}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    gallery.appendChild(div);
  });

  addLightboxEvents();
  showProjectMessage();
}

// ---------- LIGHTBOX ----------
function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("show");
  lightboxImg.classList.add("animate");
}

function closeLightbox() {
  lightbox.classList.remove("show");
  lightboxImg.classList.remove("animate");
}

function addLightboxEvents() {
  const images = document.querySelectorAll(".project img");
  images.forEach(img => {
    img.addEventListener("click", () => openLightbox(img.src));
  });
}

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

// ---------- PROJECT MESSAGE ----------
function showProjectMessage() {
  const total = projects.length;
  const msg = total === 0
    ? "No projects yet — start building!"
    : total < 3
    ? "Nice start! Keep going."
    : `Awesome! You have ${total} projects in your portfolio.`;
  document.getElementById("project-message").textContent = msg;
}

// ---------- GREETING ----------
function greetingMessage() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning!" :
    hour < 18 ? "Good afternoon!" :
    "Good evening!";
  document.querySelector(".hero p").textContent =
    `${greeting} Welcome to my portfolio.`;
}

// ---------- INIT ----------
displayProjects();
greetingMessage();
