window.addEventListener('scroll', function() {
    // Posição do scroll na página
    let scrollPosition = window.scrollY + window.innerHeight;

    // Função para mostrar o card com efeito de fade-in
    function showCard(card, delay) {
        // Verifica se o card já foi mostrado e se está visível na tela
        if (card && card.offsetTop < scrollPosition && !card.classList.contains('visible')) {
            setTimeout(function() {
                card.style.display = 'block'; 
                card.style.transition = 'opacity 1s ease-out'; 
                card.style.opacity = 1;
                card.classList.add('visible');
            }, delay);
        }
    }

    // Seleciona os cards que devem carregar juntos
    let cardsGroup1 = document.querySelectorAll('.card1, #card1');
    let cardsGroup2 = document.querySelectorAll('.card2, #card2');
    let cardsGroup3 = document.querySelectorAll('.card3, #card3');
    let cardsGroup4 = document.querySelectorAll('.card4, #card4');
    let cardsGroup5 = document.querySelectorAll('.card5, #card5');

    // Aplica o efeito a cada grupo de cards com atraso
    cardsGroup1.forEach((card) => {
        if (card) {
            if (!card.classList.contains('visible')) { 
                card.style.opacity = 0; 
                card.style.display = 'none'; 
                showCard(card, 500); 
            }
        }
    });

    cardsGroup2.forEach((card) => {
        if (card) {
            if (!card.classList.contains('visible')) { 
                card.style.opacity = 0; 
                card.style.display = 'none';
                showCard(card, 1500); 
            }
        }
    });

    cardsGroup3.forEach((card) => {
        if (card) {
            if (!card.classList.contains('visible')) { 
                card.style.opacity = 0; 
                card.style.display = 'none'; 
                showCard(card, 2500); 
            }
        }
    });

    cardsGroup4.forEach((card) => {
        if (card) {
            if (!card.classList.contains('visible')) { 
                card.style.opacity = 0;
                card.style.display = 'none'; 
                showCard(card, 3500); 
            }
        }
    });

    cardsGroup5.forEach((card) => {
        if (card) {
            if (!card.classList.contains('visible')) { 
                card.style.opacity = 0; 
                card.style.display = 'none'; 
                showCard(card, 4500); 
            }
        }
    });
});


window.addEventListener('scroll', function() {
    // Posição do scroll na página
    let scrollPosition = window.scrollY + window.innerHeight;

    // Função para mostrar o card com efeito de fade-in e movimento
    function showCard(card, delay) {
        // Verifica se o card está visível na tela e se ainda não foi mostrado
        if (card && card.offsetTop < scrollPosition && !card.classList.contains('visible')) {
            setTimeout(function() {
                card.classList.add('visible');  // Adiciona a classe 'visible' para ativar a animação
            }, delay);
        }
    }

    // Seleciona os cards que devem carregar
    let cards = document.querySelectorAll('.dadEscolar, .opcDesemp');

    // Aplica o efeito de aparecer a cada grupo de cards com atraso
    cards.forEach((card, index) => {
        if (card) {
            if (!card.classList.contains('visible')) {
                showCard(card, index * 500); // Aplica um atraso baseado no índice para animar um após o outro
            }
        }
    });
});

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY + window.innerHeight;

    // Função para verificar se o elemento está visível na tela
    function checkVisibility(element) {
        let elementTop = element.offsetTop;
        let elementBottom = elementTop + element.offsetHeight;

        // Verifica se o elemento está visível na tela
        if (elementTop < scrollPosition && elementBottom > window.scrollY) {
            return true;
        }
        return false;
    }

    // Seleciona todos os projetos que devem ser animados
    let projects = document.querySelectorAll('.seProject');

    // Aplica a classe .visible com atraso quando o projeto estiver visível no scroll
    projects.forEach((project) => {
        if (checkVisibility(project)) {
            // Adiciona atraso para a animação
            setTimeout(() => {
                project.classList.add('visible'); // Adiciona a classe para iniciar a animação
            }, 500); // Atraso de 500ms (0.5s)
        }
    });
});
