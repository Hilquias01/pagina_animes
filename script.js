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

// ===== (NOVO) LÓGICA DA BARRA DE PESQUISA =====

// 1. Pegar o elemento da barra de pesquisa
const searchBar = document.getElementById('search-bar');

// 2. Adicionar um "ouvinte de evento" que dispara toda vez que o usuário digita algo
searchBar.addEventListener('input', (event) => {
    // Pega o texto digitado e converte para minúsculas para não diferenciar maiúsculas/minúsculas
    const searchTerm = event.target.value.toLowerCase();

    // Pega todos os cartões de anime (já temos a constante 'cards' do código da modal)
    cards.forEach(card => {
        // Pega o título do anime de dentro do cartão e converte para minúsculas
        const animeTitle = card.querySelector('h2').textContent.toLowerCase();

        // Verifica se o título do anime INCLUI o texto que foi digitado
        if (animeTitle.includes(searchTerm)) {
            // Se incluir, mostra o cartão
            card.style.display = 'block';
        } else {
            // Se não incluir, esconde o cartão
            card.style.display = 'none';
        }
    });
});