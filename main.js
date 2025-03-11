window.addEventListener('scroll', function() {
    // Verifica a posição do scroll na página
    let scrollPosition = window.scrollY + window.innerHeight;

    // Função para mostrar o card com atraso
    function showCard(card, delay) {
        if (card && card.offsetTop < scrollPosition) {
            setTimeout(function() {
                card.style.display = 'block';
            }, delay);
        }
    }

    // Cards com atraso
    showCard(document.querySelector('.card1'), 500);
    showCard(document.querySelector('#card1'), 500);
    showCard(document.querySelector('.card2'), 1000); 
    showCard(document.querySelector('#card2'), 1000); 
    showCard(document.querySelector('.card3'), 1500); 
    showCard(document.querySelector('#card3'), 1500);
    showCard(document.querySelector('.card4'), 2000);
    showCard(document.querySelector('#card4'), 2000);
    showCard(document.querySelector('.card5'), 2500);
    showCard(document.querySelector('#card5'), 2500);
})

// Função para aplicar o scale aos elementos
function aplicarTransformacao(ids, scaleValue, colorValue) {
    ids.forEach(id => {
        const element = document.getElementById(id);
        element.style.transform = `scale(${scaleValue})`;
        element.style.color = colorValue; 
    });
}

// Evento para o #inicio
document.getElementById("inicio").addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.5)";
    this.style.color = "white";
    aplicarTransformacao(["desempenho", "projetos", "contato"], "0.8");
});

document.getElementById("inicio").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
    this.style.color = "#e4e7f3";
    aplicarTransformacao(["desempenho", "projetos", "contato"], "1");
});

// Evento para o #desempenho
document.getElementById("desempenho").addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.5)";
    this.style.color = "white";
    aplicarTransformacao(["inicio", "projetos", "contato"], "0.8");
});

document.getElementById("desempenho").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
    this.style.color = "#e4e7f3";
    aplicarTransformacao(["inicio", "projetos", "contato"], "1");
});


// Evento para o #projetos
document.getElementById("projetos").addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.5)";
    this.style.color = "white";
    aplicarTransformacao(["inicio", "desempenho", "contato"], "0.8");
});

document.getElementById("projetos").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
    this.style.color = "#e4e7f3";
    aplicarTransformacao(["inicio", "desempenho", "contato"], "1");
});

// Evento para o #projetos
document.getElementById("contato").addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.5)";
    this.style.color = "white";
    aplicarTransformacao(["inicio", "desempenho", "projetos"], "0.8");
});

document.getElementById("contato").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
    this.style.color = "#e4e7f3";
    aplicarTransformacao(["inicio", "desempenho", "projetos"], "1");
});

;
