const intro = document.getElementById("intro");
const success = document.getElementById("success");
const mainSite = document.getElementById("mainSite");
const listeningText = document.getElementById("listeningText");


/* MAGIC WORD */

function checkMagicWord() {

    const input = document
        .getElementById("magicInput")
        .value
        .trim()
        .toLowerCase();

    if (input === "i love you") {

        showSuccess();

    } else {

        listeningText.innerText =
            "Hmm... that's not it 😂 Try again ❤️";

    }
}


/* MAGIC WORD SUCCESS */

function showSuccess() {

    listeningText.innerText = "Magic words accepted... ❤️";

    setTimeout(() => {

        intro.classList.add("hidden");
        success.classList.remove("hidden");

    }, 900);

}


/* ENTER WEBSITE */

function enterSite() {

    success.classList.add("hidden");
    mainSite.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* FINAL QUESTION */

function answerYes() {

    document.getElementById("finalAnswer").innerText =
        "Good. Because you're stuck with me now. ❤️🦩";

}


function answerObviously() {

    document.getElementById("finalAnswer").innerText =
        "That's more like it. 😂❤️ My Flamingo forever.";

}


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(
    ".section, .final-section"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");
    revealObserver.observe(element);

});


/* SONG INTERACTION */

function selectSong(song) {

    const songName =
        song.querySelector(".song-info p").innerText;

    const message =
        document.getElementById("songMessage");

    message.innerText =
        "Okay... this one is yours. ❤️";

    document.querySelectorAll(".music-card").forEach((card) => {
        card.classList.remove("selected");
    });

    song.classList.add("selected");

    setTimeout(() => {

        const link = song.getAttribute("data-link");

        if (link) {
            window.open(link, "_blank");
        }

    }, 700);

    console.log("Selected:", songName);
}
/* FLOATING HEARTS */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heart.style.fontSize =
        (10 + Math.random() * 12) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 1800);
// MARYAM FINAL HEARTS

const maryamReveal = document.querySelector(".maryam-reveal");

if (maryamReveal) {

    maryamReveal.addEventListener("toggle", function () {

        if (maryamReveal.open) {

            for (let i = 0; i < 12; i++) {

                const heart = document.createElement("span");

                heart.innerHTML = "❤️";

                heart.classList.add("maryam-heart");

                heart.style.left = Math.random() * 100 + "%";
                heart.style.animationDelay = Math.random() * 2 + "s";

                maryamReveal.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }

        }

    });

}
// MARYAM EMOTIONAL LINES

if (maryamReveal) {

    maryamReveal.addEventListener("toggle", function () {

        if (maryamReveal.open) {

            const emotionalLines =
                maryamReveal.querySelectorAll(".special-line");

            emotionalLines.forEach((line, index) => {

                setTimeout(() => {
                    line.classList.add("maryam-show");
                }, 3000 + (index * 3000));

            });

        }

    });

}
// MEMORIES STAGGERED REVEAL

const memoriesSection = document.querySelector(".memories-section");

if (memoriesSection) {

    const memoriesObserver = new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    memoriesSection.classList.add("memories-visible");

                    memoriesObserver.unobserve(memoriesSection);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    memoriesObserver.observe(memoriesSection);

}