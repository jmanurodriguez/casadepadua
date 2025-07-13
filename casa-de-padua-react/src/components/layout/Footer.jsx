import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-casa-black text-casa-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
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
                            <li><Link to="/basquet/federal" className="hover:text-casa-yellow transition-colors duration-300">Básquet</Link></li>
                            <li><Link to="/voley/primera" className="hover:text-casa-yellow transition-colors duration-300">Vóley</Link></li>
                            <li><Link to="/artes-marciales/judo" className="hover:text-casa-yellow transition-colors duration-300">Artes Marciales</Link></li>
                            <li><Link to="/natacion" className="hover:text-casa-yellow transition-colors duration-300">Natación</Link></li>
                            <li><Link to="/gimnasia" className="hover:text-casa-yellow transition-colors duration-300">Gimnasia Rítmica</Link></li>
                            <li><Link to="/aquagym" className="hover:text-casa-yellow transition-colors duration-300">Aquagym</Link></li>
                            <li><Link to="/futbol" className="hover:text-casa-yellow transition-colors duration-300">Escuelita de fútbol</Link></li>
                            <li><Link to="/pelota-paleta" className="hover:text-casa-yellow transition-colors duration-300">Pelota paleta</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-montserrat text-xl font-bold mb-4 text-casa-yellow">Actividades</h3>
                        <ul className="space-y-2">
                            <li><Link to="/colonia" className="hover:text-casa-yellow transition-colors duration-300">Colonia de Vacaciones</Link></li>
                            <li><Link to="/zumba" className="hover:text-casa-yellow transition-colors duration-300">Zumba</Link></li>
                            <li><Link to="/pilates" className="hover:text-casa-yellow transition-colors duration-300">Pilates</Link></li>
                            <li><Link to="/yoga" className="hover:text-casa-yellow transition-colors duration-300">Yoga</Link></li>
                            <li><Link to="/efecto-mariposa" className="hover:text-casa-yellow transition-colors duration-300">Efecto Mariposa</Link></li>
                            <li><Link to="/telas" className="hover:text-casa-yellow transition-colors duration-300">Telas y acrobacia</Link></li>
                            <li><Link to="/tenis-paleta" className="hover:text-casa-yellow transition-colors duration-300">Tenis con paleta</Link></li>
                            <li><Link to="/funcional" className="hover:text-casa-yellow transition-colors duration-300">Entrenamiento funcional</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-montserrat text-xl font-bold mb-4 text-casa-yellow">Enlaces Útiles</h3>
                        <ul className="space-y-2">
                            <li><Link to="/valores-y-dias" className="hover:text-casa-yellow transition-colors duration-300">Hacete Socio</Link></li>
                            <li><Link to="/valores-y-dias" className="hover:text-casa-yellow transition-colors duration-300">Horarios</Link></li>
                            <li><Link to="/#contacto" className="hover:text-casa-yellow transition-colors duration-300">Contacto</Link></li>
                            <li><Link to="/historia" className="hover:text-casa-yellow transition-colors duration-300">Historia</Link></li>
                            <li><Link to="/accion-social" className="hover:text-casa-yellow transition-colors duration-300">Acción Social</Link></li>
                            <li><Link to="/instalaciones" className="hover:text-casa-yellow transition-colors duration-300">Instalaciones</Link></li>
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
                            <a href="https://www.facebook.com/casapadua" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-casa-yellow transition-colors duration-300">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/casapadua" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-casa-yellow transition-colors duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@casapadua" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-casa-yellow transition-colors duration-300">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 pt-8 mt-8 text-center">
                    <p className="font-roboto text-gray-400">&copy; {new Date().getFullYear()} Club Atletico San Antonio de Padua. Todos los derechos reservados.</p>
                </div>
                
                {/* Powered By Section */}
                <div className="border-t border-gray-700 pt-6 mt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <span className="text-gray-400 text-sm">Powered by</span>
                        <div className="flex items-center space-x-4">
                            <a 
                                href="https://www.manu-rodriguez.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 group"
                            >
                                <div className="relative">
                                    <img 
                                        src="https://res.cloudinary.com/dpcpcnqmq/image/upload/v1738867239/android-chrome-192x192_uglyow.png"
                                        alt="Manu Rodriguez Logo"
                                        className="h-8 w-8 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ring-2 ring-gray-600 group-hover:ring-casa-yellow"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <span className="text-gray-300 text-sm hover:text-casa-yellow transition-colors duration-300 group-hover:font-medium">
                                    Manu Rodriguez
                                </span>
                            </a>
                            <a 
                                href="https://wa.me/5491134020708" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110 transform group"
                                title="WhatsApp: +54 9 11 3402-0708"
                            >
                                <div className="relative">
                                    <i className="fab fa-whatsapp text-xl group-hover:drop-shadow-lg"></i>
                                    <div className="absolute inset-0 bg-green-400/20 rounded blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/jmanurodriguez-frontend/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 transform group"
                                title="LinkedIn Profile"
                            >
                                <div className="relative">
                                    <i className="fab fa-linkedin text-xl group-hover:drop-shadow-lg"></i>
                                    <div className="absolute inset-0 bg-blue-400/20 rounded blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}