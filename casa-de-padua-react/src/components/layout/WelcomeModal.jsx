import { useEffect, useState } from 'react';

export default function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisitedCASA');
        if (!hasVisited) {
            setIsOpen(true);
            localStorage.setItem('hasVisitedCASA', 'true');
        }
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Overlay con efecto de desenfoque */}
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"></div>

            {/* Modal */}
            <div className="flex min-h-screen items-center justify-center p-4">
                <div 
                    className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:max-w-lg w-full animate-[slideUp_0.5s_ease-out]"
                >
                    {/* Decoraciones */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-casa-yellow opacity-10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-casa-purple opacity-10 rounded-full blur-2xl"></div>

                    {/* Contenido */}
                    <div className="relative px-8 pt-8 pb-12 flex flex-col items-center">
                        <img 
                            src="https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,w_200/v1744476120/logo_rvlpvo.webp"
                            alt="CASA de Padua Logo"
                            className="w-32 h-32 object-contain mb-6 animate-[fadeIn_1s_ease-out]"
                        />
                        
                        <h2 className="text-3xl font-montserrat font-bold text-casa-purple text-center mb-4">
                            ¡Bienvenido a CASA de Padua!
                        </h2>
                        
                        <p className="text-gray-600 text-center mb-8 max-w-sm">
                            Tu club, tu segunda casa. Unite a nuestra familia y disfrutá de todos los beneficios exclusivos para socios.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
                            <a 
                                href="https://portal.ourclub.io/casadepadua/Account/Register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-casa-yellow text-casa-black font-montserrat px-8 py-4 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 shadow-lg group"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>¡Hacete Socio!</span>
                                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                            </a>
                            
                            <a 
                                href="https://portal.ourclub.io/casadepadua/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-casa-purple text-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg group"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>Portal de Socios</span>
                                <i className="fas fa-user ml-2"></i>
                            </a>
                            
                            <button
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center bg-gray-100 text-gray-700 font-montserrat px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300"
                            >
                                Explorar el sitio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}