// --- Lógica para a Janela Modal ---

// 1. Pegar todos os elementos que precisamos controlar
const cards = document.querySelectorAll('section'); // Pega todos os cartões de anime
const modalOverlay = document.getElementById('modal-overlay');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.modal-close-button');

// 2. Adicionar um "ouvinte de clique" para cada cartão
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Quando um cartão é clicado, esta função é executada

        // 2.1. Pega as informações do cartão que foi clicado
        const imageSrc = card.querySelector('img').src;
        const title = card.querySelector('h2').textContent;
        const description = card.querySelector('p').textContent;

        // 2.2. Coloca essas informações dentro da modal
        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        // 2.3. Mostra a modal
        modalOverlay.style.display = 'flex';
    });
});

// 3. Função para fechar a modal
function closeModal() {
    modalOverlay.style.display = 'none';
}

// 4. Adicionar "ouvintes de clique" para os botões de fechar
closeButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
    // Fecha a modal apenas se o clique for no fundo (overlay) e não no conteúdo
    if (event.target === modalOverlay) {
        closeModal();
    }
});