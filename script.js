// --- Lógica para a Janela Modal ---
const cards = document.querySelectorAll('section');
const modalOverlay = document.getElementById('modal-overlay');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.modal-close-button');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const imageSrc = card.querySelector('img').src;
        const title = card.querySelector('h2').textContent;
        const description = card.querySelector('p').textContent;

        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        modalOverlay.style.display = 'flex';
    });
});

function closeModal() {
    modalOverlay.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});


// --- Lógica da Barra de Pesquisa ---
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    cards.forEach(card => {
        const animeTitle = card.querySelector('h2').textContent.toLowerCase();

        if (animeTitle.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


// --- Lógica do Seletor de Tema ---

// 1. Pegar os elementos
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon'); // Pegamos o novo ícone

// 2. Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-theme');
        themeToggle.checked = true;
        themeIcon.textContent = 'dark_mode'; // (NOVO) Muda para o ícone de LUA
    } else {
        body.classList.remove('light-theme');
        themeToggle.checked = false;
        themeIcon.textContent = 'light_mode'; // (NOVO) Muda para o ícone de SOL
    }
}

// 3. Verificar se há um tema guardado no armazenamento local ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

// 4. Adicionar o "ouvinte de evento" para o clique no interruptor
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});