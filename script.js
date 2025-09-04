// --- Lógica da Barra de Pesquisa (AJUSTADA) ---
// Seleciona os links que envolvem os cards
const cardLinks = document.querySelectorAll('.card-link'); 
const searchBar = document.getElementById('search-bar');

// A lógica de pesquisa só deve ser executada se a barra de pesquisa existir na página
if (searchBar) { 
    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        cardLinks.forEach(link => {
            // Pega o título de dentro do link
            const animeTitle = link.querySelector('h2').textContent.toLowerCase();

            if (animeTitle.includes(searchTerm)) {
                link.style.display = 'block'; // Mostra ou esconde o link (que contém o card)
            } else {
                link.style.display = 'none';
            }
        });
    });
}


// --- Lógica do Seletor de Tema ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-theme');
        if (themeToggle) themeToggle.checked = true;
        if (themeIcon) themeIcon.textContent = 'dark_mode';
    } else {
        body.classList.remove('light-theme');
        if (themeToggle) themeToggle.checked = false;
        if (themeIcon) themeIcon.textContent = 'light_mode';
    }
}

// Verifica se o seletor de tema existe antes de adicionar o listener
if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Aplica o tema salvo ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}


// --- LÓGICA DO BOTÃO "VOLTAR AO TOPO" ---
const backToTopButton = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    // Mostra o botão depois de 100px de rolagem
    if (window.scrollY > 100) {
        if (backToTopButton) backToTopButton.classList.add('show');
    } else {
        if (backToTopButton) backToTopButton.classList.remove('show');
    }
});

if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        // Rola a página de volta para o topo com uma animação suave
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}