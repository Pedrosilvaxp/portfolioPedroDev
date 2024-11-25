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


// Ver mais projetos
const botaoVerMais = document.querySelector('#verMaisBtn');
const itens = document.querySelectorAll('#projetos .item');

let verificarItensEscondidos = true;

// Apagando itens de projetos apartir do terceiro
for (let item = 0; item < itens.length; item++) {
    if (verificarItensEscondidos == true && item > 1) {
        itens[item].classList.add('esconderItem');
    }
}
function verMais() {
    if (verificarItensEscondidos) {
        for (let item = 0; item < itens.length; item++) {
            if (item > 1) {
                itens[item].classList.remove('esconderItem');
            }
        }
        botaoVerMais.innerHTML = "Ver menos <i class='bx bx-chevron-up'></i>";

        verificarItensEscondidos = false;
    } else {
        for (let item = 0; item < itens.length; item++) {
            if (item > 1) {
                itens[item].classList.add('esconderItem');
            }
        }
        botaoVerMais.innerHTML = "Ver mais <i class='bx bx-chevron-down'></i>";

        verificarItensEscondidos = true;
    }
}


// ScrollReveal
window.Effect = ScrollReveal({
    reset: false
});

Effect.reveal("#tituloDev", {
    distance: '200%',
    origin: 'left',
    delay: 900
});
Effect.reveal(".headerContainer", {
    duration: 2000
});
Effect.reveal(".reveal .imagemDesktop", {
    distance: '100%',
    origin: 'left'
});
Effect.reveal(".reveal .imagemMobile", {
    distance: '100%',
    delay: 1000 
});
Effect.reveal('.blocoRoxo img', {
    origin: 'left',
    distance: '200%',
});