window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    document.body.style.background = scrollPosition > 300 ? "linear-gradient(to bottom,rgb(68, 14, 9),rgb(106, 23, 15),rgb(36, 4, 69),rgb(118, 33, 47))"  : "url('images/background.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
});

document.querySelectorAll(".contact-icons a").forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "rotate(360deg) scale(1.3)";
        icon.style.transition = "transform 0.5s ease";
    });
    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
    });
});

/* JavaScript for auto-filling Gmail */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.contact-icons .gmail').addEventListener('click', function() {
        window.location.href = 'mailto:aayushakarki284@gmail.com';
    });
});

document.body.insertAdjacentHTML('beforeend', '<div class="moving-smiley"></div>');
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let smiley = document.querySelector(".moving-smiley");
    smiley.style.transform = `translate(${scrollY * 0.5}px, ${scrollY * 0.2}px)`;
    smiley.style.left = `${50 + (scrollY * 0.3)}px`;
});


// Create the spider and thread dynamically
document.body.insertAdjacentHTML('beforeend', '<div class="spider-thread"></div><div class="spider"></div>');
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    let thread = document.querySelector(".spider-thread");
    let spider = document.querySelector(".spider");

    if (scrollY > 290) {
        // Hide spider and thread when scroll position is more than 290
        thread.style.opacity = "0";
        spider.style.opacity = "0";
    } else {
        // Show spider and thread while scrolling up to 290
        thread.style.opacity = "1";
        thread.style.height = `${scrollY + 50}px`;

        spider.style.opacity = "1";
        spider.style.top = `${scrollY * 0.85 + 50}px`;
    }
});

// Set initial position (Hide thread, half-visible spider)
document.addEventListener("DOMContentLoaded", () => {
    let thread = document.querySelector(".spider-thread");
    let spider = document.querySelector(".spider");

    thread.style.height = "0px";  // Hide thread initially
    spider.style.top = "-20px";  // Half of the spider visible at start
});

