document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio web CASA de Padua cargado');

    // Menú mobile mejorado
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 bg-casa-black/95 transform translate-x-full transition-all duration-300 ease-in-out md:hidden z-50';
    mobileMenu.innerHTML = `
        <div class="p-4 h-full flex flex-col">
            <div class="flex justify-end mb-8">
                <button class="text-casa-white p-2" id="closeMenu">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            <nav class="flex flex-col space-y-6">
                <div class="space-y-4">
                    <a href="#" class="block text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors">El Club</a>
                    <div class="pl-4 space-y-2">
                        <a href="#" class="block text-casa-white text-lg hover:text-casa-yellow transition-colors">Historia</a>
                        <a href="#" class="block text-casa-white text-lg hover:text-casa-yellow transition-colors">Comisión Directiva</a>
                        <a href="#" class="block text-casa-white text-lg hover:text-casa-yellow transition-colors">Instalaciones</a>
                    </div>
                </div>
                <div class="space-y-4">
                    <a href="#" class="block text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors">Deportes</a>
                    <div class="pl-4 space-y-2">
                        <a href="#" class="block text-casa-white text-lg hover:text-casa-yellow transition-colors">Básquet</a>
                        <a href="#" class="block text-casa-white text-lg hover:text-casa-yellow transition-colors">Vóley</a>
                        <a href="#" class="block text-casa-white text-lg hover:text-casa-yellow transition-colors">Gimnasia Rítmica</a>
                    </div>
                </div>
                <a href="#asociate" class="block text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors">Hacete Socio</a>
                <a href="#" class="block text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors">Novedades</a>
                <a href="#contacto" class="block text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors">Contacto</a>
            </nav>
            <div class="mt-auto">
                <div class="flex justify-center space-x-6 mb-4">
                    <a href="#" class="text-casa-white hover:text-casa-yellow text-2xl"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-casa-white hover:text-casa-yellow text-2xl"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-casa-white hover:text-casa-yellow text-2xl"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(mobileMenu);
    
    const closeMenuButton = mobileMenu.querySelector('#closeMenu');
    
    function toggleMenu() {
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        mobileMenu.classList.toggle('translate-x-full');
        document.body.style.overflow = isOpen ? '' : 'hidden';
    }

    menuButton.addEventListener('click', toggleMenu);
    closeMenuButton.addEventListener('click', toggleMenu);

    // Links en el menú móvil
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Carrusel mejorado
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    // Crear indicadores
    const indicators = document.createElement('div');
    indicators.className = 'absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20';
    items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors`;
        dot.setAttribute('aria-label', `Ir a la diapositiva ${index + 1}`);
        dot.addEventListener('click', () => showSlide(index));
        indicators.appendChild(dot);
    });
    carousel.appendChild(indicators);

    function updateIndicators() {
        const dots = indicators.children;
        Array.from(dots).forEach((dot, index) => {
            dot.className = `w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'
            }`;
            dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
        });
    }

    function showSlide(index) {
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.zIndex = '0';
            item.setAttribute('aria-hidden', 'true');
        });
        
        // Añadimos una pequeña espera para la transición
        setTimeout(() => {
            items[index].style.opacity = '1';
            items[index].style.zIndex = '1';
            items[index].setAttribute('aria-hidden', 'false');
        }, 50);
        
        currentIndex = index;
        updateIndicators();
    }

    function nextSlide() {
        showSlide((currentIndex + 1) % items.length);
    }

    function prevSlide() {
        showSlide((currentIndex - 1 + items.length) % items.length);
    }

    // Event listeners para los botones
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Soporte para gestos touch
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Mostrar primer slide y comenzar rotación
    showSlide(0);
    let slideInterval = setInterval(nextSlide, 5000);

    // Detener rotación automática cuando el usuario interactúa
    carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Animaciones al scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-active');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Para elementos visibles en la carga inicial

    // Lightbox para la galería
    function createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img src="" alt="Imagen ampliada" class="lightbox-content">
        `;
        document.body.appendChild(lightbox);

        const closeButton = lightbox.querySelector('.lightbox-close');
        closeButton.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        return lightbox;
    }

    const lightbox = createLightbox();
    const lightboxImage = lightbox.querySelector('.lightbox-content');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightboxImage.src = item.src;
            lightboxImage.alt = item.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        });
    });

    // Cerrar el lightbox con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Validación de formulario
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Por favor, complete todos los campos obligatorios.');
                return;
            }
            
            // Validación email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un email válido.');
                return;
            }
            
            // Mostrar mensaje de éxito (En un caso real, aquí se enviaría el formulario)
            alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
            contactForm.reset();
        });
    }

    // Scroll suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para la barra de navegación
                    behavior: 'smooth'
                });
            }
        });
    });
});
