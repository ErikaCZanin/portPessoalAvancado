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
});
