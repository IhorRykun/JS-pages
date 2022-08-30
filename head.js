
const wrapper = document.querySelector('.wrapper');


function creatHeader () {
    return `
<header class="header">
<h1>Trainerz</h1>
<div class="action">
<button>Google</button>
<button>App Store</button> 
</div>
</header>`;
};

wrapper.insertAdjacentHTML("beforebegin", creatHeader());


function creatHeroSection() {
    return `
    <section class="hero">
    <h2 class="hero__title">start to workout</h2>
    <p class="hero__text">This is a template Figma file,turned into code using Anima.Learn more at AnimaApp.com</p>
    <button class="cta">Get started</button>
    <img src="https://pic.sport.ua/images/news/0/14/170/middle_594169.jpg" alt="sport" class="hero__workout">
</section>`;
} 


wrapper.insertAdjacentHTML("beforeend", creatHeroSection());