export default function Footer() {
    return (
        <footer className="bg-casa-black text-casa-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <img 
                            src="https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,w_200/v1744476120/logo_rvlpvo.webp"
                            alt="CASA de Padua Logo"
                            className="h-24 mb-4"
                        />
                        <p className="font-roboto text-gray-400">Tu club, tu segunda casa desde 1926</p>
                    </div>
                    
                    <div>
                        <h3 className="font-montserrat text-xl font-bold mb-4 text-casa-yellow">Deportes</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-casa-yellow transition-colors duration-300">Básquet</a></li>
                            <li><a href="#" className="hover:text-casa-yellow transition-colors duration-300">Vóley</a></li>
                            <li><a href="#" className="hover:text-casa-yellow transition-colors duration-300">Gimnasia Rítmica</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-montserrat text-xl font-bold mb-4 text-casa-yellow">Enlaces Útiles</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-casa-yellow transition-colors duration-300">Hacete Socio</a></li>
                            <li><a href="#" className="hover:text-casa-yellow transition-colors duration-300">Horarios</a></li>
                            <li><a href="#" className="hover:text-casa-yellow transition-colors duration-300">Contacto</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-montserrat text-xl font-bold mb-4 text-casa-yellow">Contacto</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <i className="fas fa-map-marker-alt w-6"></i>
                                Independencia 725, B1718 San Antonio de Padua, Provincia de Buenos Aires
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone w-6"></i>
                                (0220) 482-4184
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope w-6"></i>
                                info@casadepadua.com.ar
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-2xl hover:text-casa-yellow transition-colors duration-300">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-2xl hover:text-casa-yellow transition-colors duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-2xl hover:text-casa-yellow transition-colors duration-300">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 pt-8 mt-8 text-center">
                    <p className="font-roboto text-gray-400">&copy; {new Date().getFullYear()} Club Atletico San Antonio de Padua. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}