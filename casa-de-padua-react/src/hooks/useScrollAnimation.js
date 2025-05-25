import { useEffect } from 'react';

export function useScrollAnimation() {
    useEffect(() => {
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

        return () => window.removeEventListener('scroll', animateOnScroll);
    }, []);
}