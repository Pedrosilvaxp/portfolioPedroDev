const navMobile = document.querySelector('#navMobile');
const navMobileLinks = document.querySelectorAll('#navMobile a');
const navMobileButton = document.querySelector('.navMobileButton');

navMobileButton.addEventListener('click', () => {
    if (navMobile.classList.contains('active')) {
        navMobile.classList.remove('active');
    } else { 
        navMobile.classList.add('active');
    }
});
navMobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
    });
});


// Botão de voltar
const botaoVoltar = document.querySelector('#botaoVoltar');
const navDesktop = document.querySelector("ul#navDesktop");

window.onscroll = () => {
    const scrollUser = document.documentElement.scrollTop;

    if (scrollUser > 400) {
        botaoVoltar.classList.add('activeBackButton');
        navDesktop.classList.add('navAtivo');
    } else {
        navDesktop.classList.remove('navAtivo');
        botaoVoltar.classList.remove('activeBackButton');
    }
};


// Scroll automático
function scrollAuto(call) {
    const area = document.querySelector(call);

    event.preventDefault();
    area.scrollIntoView({behavior:'smooth'});
}


// ScrollReveal
window.Effect = ScrollReveal({
    reset: false
});

Effect.reveal("h1#tituloDev", {
    distance: '200%',
    origin: 'left',
    delay: 900
});
Effect.reveal(".headerContainer", {
    duration: 2000
});
Effect.reveal(".imagemDesktop", {
    distance: '100%',
    origin: 'left'
});
Effect.reveal(".imagemMobile", {
    distance: '100%',
    delay: 1000 
});
Effect.reveal('.blocoRoxo img', {
    origin: 'left',
    distance: '200%',
});
Effect.reveal('#rowCenter', {
    delay: 200,
    afterReveal: (el) => {
        el.style.maxHeight = '300px';
    }
});