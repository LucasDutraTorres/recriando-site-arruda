document.addEventListener('DOMContentLoaded', function() {
    // Elementos do Menu Hambúrguer
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Elementos da Barra de Pesquisa
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    menuButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede fechar imediatamente
        const isVisible = navMenu.style.display === 'block';
        navMenu.style.display = isVisible ? 'none' : 'block';
        
        // Fecha a barra de pesquisa se abrir o menu
        searchBar.classList.remove('active');
    });

    // --- LÓGICA DA BARRA DE PESQUISA ---
    searchIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede fechar imediatamente
        searchBar.classList.toggle('active');
        
        // Foca no campo de texto automaticamente ao abrir
        if (searchBar.classList.contains('active')) {
            searchBar.querySelector('input').focus();
            // Fecha o menu se abrir a pesquisa
            navMenu.style.display = 'none';
        }
    });

    // --- FECHAR TUDO AO CLICAR FORA ---
    document.addEventListener('click', function(event) {
        // Fecha o Menu se clicar fora
        if (navMenu.style.display === 'block' && !navMenu.contains(event.target) && event.target !== menuButton) {
            navMenu.style.display = 'none';
        }

        // Fecha a Barra de Pesquisa se clicar fora
        if (searchBar.classList.contains('active') && !searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBar.classList.remove('active');
        }
    });

    // Fecha o menu ao clicar em um link (opcional, mas recomendado)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
});
