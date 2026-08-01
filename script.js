// Hide loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }
});

// Open letter
const openBtn = document.getElementById("openBtn");

if (openBtn) {
    openBtn.addEventListener("click", () => {

        document.querySelectorAll(".hidden").forEach((el, i) => {
            setTimeout(() => {
                el.classList.add("show");
            }, i * 300);
        });

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    });
}

// Scroll Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});

// Floating Hearts
const hearts = document.querySelector(".hearts");

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animation = "floatUp 6s linear forwards";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 500);

// Surprise Button
const surprise = document.getElementById("surprise");

if (surprise) {

    surprise.addEventListener("click", () => {

        alert(
`❤️ Happy Girlfriend's Day ❤️

Dear Riddhuuu,

Thank you for making my life beautiful.

No matter what happens,
I'll always choose you.

I Love You Forever.

— Yours,
Prashu ❤️`
        );

        launchConfetti();

    });

}

// Simple Confetti
function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        let confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background =
            `hsl(${Math.random()*360},90%,70%)`;

        confetti.style.left =
            Math.random() * window.innerWidth + "px";

        confetti.style.top = "-20px";

        confetti.style.borderRadius = "50%";

        confetti.style.transition = "4s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transform =
                `translateY(${window.innerHeight+100}px)
                 rotate(${720*Math.random()}deg)`;

            confetti.style.opacity = "0";

        }, 10);

        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}

// Typewriter Effect
const typewriter = document.querySelector(".typewriter");

if (typewriter) {

    const text = typewriter.innerHTML;

    typewriter.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            typewriter.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 20);

        }

    }

    setTimeout(typing, 1200);

}
