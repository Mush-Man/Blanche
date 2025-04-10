
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");

    function closeSidebar() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }

    menuToggle.addEventListener("click", function () {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
});

const rotatingText = document.getElementById("rotating-text");
const words = ["Roads", "Bridges", "Structures"];
let currentIndex = 0;

function rotateWords() {
  // Fade out the current text
  rotatingText.style.opacity = 0;

  setTimeout(() => {
    // Update the text content
    rotatingText.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;

    // Fade in the new text
    rotatingText.style.opacity = 1;
  }, 500); // Wait for the fade-out to complete (0.5s)
}

setInterval(rotateWords, 3000); // Change word every 3 seconds

AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: "ease-in-out", // Smooth easing
  once: false, // Animation happens every time you scroll
});