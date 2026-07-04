document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // MENU RESPONSIVO (MOBILE HAMBURGER)
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Altera o ícone dinamicamente para melhor UX
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Fecha o menu móvel ao clicar em qualquer link de âncora
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-xmark');
                menuToggle.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // ==========================================
    // VÍDEO DO CASE EM DESTAQUE (PLAY SOB DEMANDA)
    // ==========================================
    const featuredVideo = document.querySelector('.portfolio-video');
    const videoPlayBtn = document.querySelector('.video-play-btn');

    if (featuredVideo && videoPlayBtn) {
        videoPlayBtn.addEventListener('click', () => {
            featuredVideo.setAttribute('controls', '');
            featuredVideo.play();
            videoPlayBtn.classList.add('is-hidden');
        });

        // Ao terminar, volta pro estado inicial (poster + botão de play)
        featuredVideo.addEventListener('ended', () => {
            featuredVideo.removeAttribute('controls');
            featuredVideo.load(); // reseta para o poster
            videoPlayBtn.classList.remove('is-hidden');
        });
    }

    // ==========================================
    // INTERCEPTAÇÃO E CAPTURA DO FORMULÁRIO (WHATSAPP DE ALTA CONVERSÃO)
    // ==========================================
    const leadForm = document.getElementById('leadForm');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o reload tradicional da página

            // Captura de inputs limpos
            const name = document.getElementById('name').value.trim();
            const company = document.getElementById('company').value.trim();
            const segment = document.getElementById('segment').value.trim();

            // Configuração do Telefone Destino (Mesmo usado no Header/Hero)
            const dddAndPhone = "5511999999999"; 

            // Montagem do texto estruturado pronto para fechamento comercial
            const textMessage = `Olá! Vim através da Landing Page e gostaria de um diagnóstico.\n\n` +
                                 `• *Nome:* ${name}\n` +
                                 `• *Empresa:* ${company}\n` +
                                 `• *Segmento:* ${segment}`;

            // Codifica a mensagem para o padrão de URL seguro
            const encodedMessage = encodeURIComponent(textMessage);
            const whatsappUrl = `https://wa.me/${dddAndPhone}?text=${encodedMessage}`;

            // Redireciona o usuário direto para a API do WhatsApp aberta
            window.open(whatsappUrl, '_blank');
        });
    }
});