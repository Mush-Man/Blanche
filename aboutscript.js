document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1200,
        easing: "ease-in-out",
        once: false
    });

    // Optional: Fade elements in as they scroll
    let fadeElements = document.querySelectorAll("[data-aos]");
    
    function fadeInOnScroll() {
        fadeElements.forEach((element) => {
            let position = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                element.style.opacity = "1";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
});

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
