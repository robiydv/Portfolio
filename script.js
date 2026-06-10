// =========================
// AOS ANIMATION
// =========================

AOS.init({
    duration: 1200,
    once: true,
    offset: 100
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(10,20,30,0.85)";

        navbar.style.backdropFilter =
        "blur(20px)";

        navbar.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.25)";
    }

    else{

        navbar.style.background =
        "rgba(20,56,68,.30)";

        navbar.style.boxShadow = "none";

    }

});

// =========================
// TYPING EFFECT
// =========================

const textArray = [

    "Aspiring Data Engineer",
    "Data Analyst",
    "Python Developer",
    "Power BI Enthusiast",
    "SQL Explorer"

];

let textIndex = 0;
let charIndex = 0;

const typingText =
document.querySelector(".hero-left h2");

function typeEffect(){

    if(!typingText) return;

    if(charIndex < textArray[textIndex].length){

        typingText.textContent +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);
    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        textArray[textIndex]
        .substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        textIndex++;

        if(textIndex >= textArray.length){

            textIndex = 0;

        }

        setTimeout(typeEffect,300);

    }

}

window.onload = () => {

    if(typingText){

        typingText.textContent = "";

        setTimeout(typeEffect,1000);

    }

};

// =========================
// SKILL CARD HOVER GLOW
// =========================

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x =
        e.offsetX;

        const y =
        e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(138,232,247,.35),
        rgba(255,255,255,.04))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background =
        "rgba(255,255,255,.05)";

    });

});

// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth / 2 - e.pageX) / 30;

    const y =
    (window.innerHeight / 2 - e.pageY) / 30;

    const card =
    document.querySelector(".glass-card");

    if(card){

        card.style.transform =
        `rotateY(${x}deg)
         rotateX(${-y}deg)`;

    }

});

// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText = "0";

    const updateCounter = ()=>{

        const target =
        +counter.getAttribute("data-target");

        const c =
        +counter.innerText;

        const increment =
        target / 100;

        if(c < target){

            counter.innerText =
            `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements =
document.querySelectorAll(

".skill-card, .travel-card, .box"

);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

// =========================
// CONTACT FORM
// =========================

const form =
document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const inputs =
    form.querySelectorAll(

    "input, textarea"

    );

    let valid = true;

    inputs.forEach(input=>{

        if(input.value.trim() === ""){

            valid = false;

            input.style.border =
            "2px solid red";

        }

        else{

            input.style.border =
            "none";

        }

    });

    if(valid){

        alert(

        "Message Sent Successfully 🚀"

        );

        form.reset();

    }

});

}

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener(

"click",

function(e){

e.preventDefault();

document
.querySelector(

this.getAttribute("href")

)

.scrollIntoView({

behavior:"smooth"

});

});

});

// =========================
// FLOATING PARTICLES
// =========================

const body =
document.body;

for(let i=0;i<25;i++){

    const particle =
    document.createElement("span");

    particle.classList.add(

    "particle"

    );

    particle.style.left =
    Math.random()*100+"%";

    particle.style.animationDuration =
    5 + Math.random()*10 + "s";

    particle.style.animationDelay =
    Math.random()*5+"s";

    body.appendChild(particle);

}
