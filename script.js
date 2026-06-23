// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);

});

// AOS

AOS.init({
    duration: 1200,
    once: true
});

// Navbar Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#020617";
    } else {
        navbar.style.background = "rgba(255,255,255,0.05)";
    }

});

// Typing Effect

const text =
"Full Stack Developer";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing")
            .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);

    }

}

typeWriter();

// Counter Animation

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const count =
            +counter.innerText;

        const increment =
            target / 100;

        if (count < target) {

            counter.innerText =
                Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// Cursor Glow

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    glow.style.left =
        e.clientX + "px";

    glow.style.top =
        e.clientY + "px";

});

// Back To Top

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank You! Message Sent Successfully 🚀");

    this.reset();

});