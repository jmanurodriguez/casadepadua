import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const closeTimeout = useRef(null);
    const closeSubTimeout = useRef(null);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            if (closeSubTimeout.current) clearTimeout(closeSubTimeout.current);
        };
    }, [isMobileMenuOpen]);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveSubmenu(null);
    };

    const toggleSubmenu = (submenu) => {
        setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
    };

    const handleMouseEnter = (dropdown) => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setOpenDropdown(null);
            setOpenSubDropdown(null);
        }, 500);
    };

    const handleSubMouseEnter = (subDropdown) => {
        if (closeSubTimeout.current) clearTimeout(closeSubTimeout.current);
        setOpenSubDropdown(subDropdown);
    };

    const handleSubMouseLeave = () => {
        closeSubTimeout.current = setTimeout(() => {
            setOpenSubDropdown(null);
        }, 300);
    };

    const deportesItems = [
        { 
            label: 'Básquet', 
            subItems: [
                { label: 'Federal', href: '/basquet/federal' },
                { label: 'Metropolitano', href: '/basquet/metropolitano' }
            ]
        },
        { 
            label: 'Vóley', 
            subItems: [
                { label: 'Tira A', href: '/voley/tira-a' },
                { label: 'Tira B', href: '/voley/tira-b' },
                { label: 'Liga', href: '/voley/voley-liga' },
                { label: 'Primera División', href: '/voley/primera' }
            ]
        },
        { 
            label: 'Artes Marciales', 
            subItems: [
                { label: 'Aikido', href: '/artes-marciales/aikido' },
                { label: 'Judo', href: '/artes-marciales/judo' },
                { label: 'Taekwondo', href: '/artes-marciales/taekwondo' }
            ]
        },
        { label: 'Natación', href: '/natacion' },
        { label: 'Gimnasia Rítmica', href: '/gimnasia' },
        { label: 'Aquagym', href: '/aquagym' },
        { label: 'Escuelita de fútbol', href: '/futbol' },
        { label: 'Pelota paleta', href: '/pelota-paleta' },
        { label: 'Telas y acrobacia aérea', href: '/telas' },
        { label: 'Tenis con paleta', href: '/tenis-paleta' },
        { label: 'Tenis de mesa', href: '/tenis-mesa' },
        { label: 'Entrenamiento funcional y GAP', href: '/funcional' }
    ];

    const actividadesItems = [
        { label: 'Colonia de Vacaciones', href: '/colonia' },
        { label: 'Zumba', href: '/zumba' },
        { label: 'Pilates', href: '/pilates' },
        { label: 'Yoga', href: '/yoga' },
        { label: 'Efecto Mariposa', href: '/efecto-mariposa' }
    ];

    return (
        <>
            <nav className="bg-casa-black text-casa-white p-4 fixed w-full z-50">
                {/* Desktop Menu */}
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="block">
                            <img 
                                src="https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,w_200/v1744476120/logo_rvlpvo.webp"
                                alt="CASA de Padua Logo"
                                className="h-16 hover:opacity-90 transition-opacity"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {/* El Club */}
                        <div className="relative" 
                             onMouseEnter={() => handleMouseEnter('club')}
                             onMouseLeave={handleMouseLeave}>
                            <HashLink to="/#club" className="font-montserrat text-lg hover:text-casa-yellow transition-colors duration-300">
                                El Club
                            </HashLink>
                            <div className={`absolute ${openDropdown === 'club' ? 'block' : 'hidden'} w-48 bg-casa-black py-2 mt-2 z-50 before:content-[''] before:absolute before:top-[-10px] before:left-0 before:right-0 before:h-[10px]`}>
                                <div className="relative">
                                    <Link to="/marca" className="block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors">Marca</Link>
                                    <Link to="/historia" className="block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors">Historia</Link>
                                    <Link to="/comision" className="block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors">Comisión Directiva</Link>
                                    <Link to="/instalaciones" className="block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors">Instalaciones</Link>
                                    <Link to="/valores-y-dias" className="block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors">Valores y Días</Link>
                                    <Link to="/accion-social" className="block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors">Acción Social</Link>
                                </div>
                            </div>
                        </div>

                        {/* Deportes */}
                        <div className="relative"
                             onMouseEnter={() => handleMouseEnter('deportes')}
                             onMouseLeave={handleMouseLeave}>
                            <button className="font-montserrat text-lg hover:text-casa-yellow transition-colors duration-300">
                                Deportes <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div className={`absolute ${openDropdown === 'deportes' ? 'block' : 'hidden'} w-64 bg-casa-black py-2 mt-2 z-50 before:content-[''] before:absolute before:top-[-10px] before:left-0 before:right-0 before:h-[10px] rounded-lg shadow-xl`}>
                                {deportesItems.map((item, index) => (
                                    item.subItems ? (
                                        <div key={`${item.label}-${index}`} className="relative"
                                             onMouseEnter={() => handleSubMouseEnter(item.label)}
                                             onMouseLeave={handleSubMouseLeave}>
                                            <button className="w-full text-left block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors font-bold">
                                                {item.label} <i className="fas fa-chevron-right ml-2 text-xs"></i>
                                            </button>
                                            <div className={`absolute left-full top-0 mt-0 ml-1 w-56 bg-casa-black py-2 rounded-lg shadow-xl z-50 ${openSubDropdown === item.label ? 'block' : 'hidden'}`}>
                                                {item.subItems.map((sub, subIndex) => (
                                                    <Link key={`${sub.href}-${subIndex}`} to={sub.href} className="block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors">
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link 
                                            key={`${item.href}-${index}`} 
                                            to={item.href} 
                                            className="block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Actividades */}
                        <div className="relative"
                             onMouseEnter={() => handleMouseEnter('actividades')}
                             onMouseLeave={handleMouseLeave}>
                            <button className="font-montserrat text-lg hover:text-casa-yellow transition-colors duration-300">
                                Actividades <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div className={`absolute ${openDropdown === 'actividades' ? 'block' : 'hidden'} w-64 bg-casa-black py-2 mt-2 z-50 before:content-[''] before:absolute before:top-[-10px] before:left-0 before:right-0 before:h-[10px] rounded-lg shadow-xl`}>
                                {actividadesItems.map((item, index) => (
                                    <Link 
                                        key={`${item.href}-${index}`} 
                                        to={item.href} 
                                        className="block px-4 py-2 hover:bg-casa-purple hover:text-casa-yellow transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                        {/* Resto del menú igual */}
                        <Link to="/novedades" className="font-montserrat text-lg hover:text-casa-yellow transition-colors duration-300">
                            Novedades
                        </Link>
                        <HashLink to="/#contacto" className="font-montserrat text-lg hover:text-casa-yellow transition-colors duration-300">
                            Contacto
                        </HashLink>
                        <div className="flex items-center space-x-4">
                            <a 
                                href="https://portal.ourclub.io/casadepadua/Account/Register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-casa-yellow text-casa-black font-montserrat px-6 py-2 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 shadow-lg text-sm"
                            >
                                <span>Asociarse</span>
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                            <a 
                                href="https://portal.ourclub.io/casadepadua/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-casa-purple text-white font-montserrat px-6 py-2 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg text-sm"
                            >
                                <span>Portal de Socios</span>
                                <i className="fas fa-user ml-2"></i>
                            </a>
                        </div>
                    </div>
                    <button 
                        className="md:hidden text-casa-white"
                        onClick={toggleMenu}
                        aria-label="Menú"
                    >
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-casa-black/95 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 ease-in-out md:hidden z-50`}>
                <div className="p-4 h-full flex flex-col">
                    <div className="flex justify-end mb-8">
                        <button 
                            className="text-casa-white p-2"
                            onClick={toggleMenu}
                            aria-label="Cerrar menú"
                        >
                            <i className="fas fa-times text-2xl"></i>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-6">
                        <div className="space-y-4">
                            <button 
                                onClick={() => toggleSubmenu('club')}
                                className="flex items-center justify-between w-full text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors"
                            >
                                <span>El Club</span>
                                <i className={`fas fa-chevron-${activeSubmenu === 'club' ? 'up' : 'down'} text-sm`}></i>
                            </button>
                            <div className={`pl-4 space-y-2 ${activeSubmenu === 'club' ? 'block' : 'hidden'}`}>
                                <Link to="/marca" className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Marca</Link>
                                <Link to="/historia" className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Historia</Link>
                                <Link to="/comision" className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Comisión Directiva</Link>
                                <Link to="/instalaciones" className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Instalaciones</Link>
                                <Link to="/valores-y-dias" className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Valores y Días</Link>
                                <Link to="/accion-social" className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Acción Social</Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <button 
                                onClick={() => toggleSubmenu('deportes')}
                                className="flex items-center justify-between w-full text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors"
                            >
                                <span>Deportes</span>
                                <i className={`fas fa-chevron-${activeSubmenu === 'deportes' ? 'up' : 'down'} text-sm`}></i>
                            </button>
                            <div className={`pl-4 space-y-2 ${activeSubmenu === 'deportes' ? 'block' : 'hidden'}`}>
                                {deportesItems.map((item, index) => (
                                    item.subItems ? (
                                        <div key={`${item.label}-${index}`}>
                                            <span className="block text-casa-yellow text-lg font-bold">{item.label}</span>
                                            <div className="pl-4">
                                                {item.subItems.map((sub, subIndex) => (
                                                    <Link key={`${sub.href}-${subIndex}`} to={sub.href} className="block text-casa-white text-base hover:text-casa-yellow transition-colors" onClick={toggleMenu}>
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link 
                                            key={`${item.href}-${index}`} 
                                            to={item.href} 
                                            className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" 
                                            onClick={toggleMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <button 
                                onClick={() => toggleSubmenu('actividades')}
                                className="flex items-center justify-between w-full text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors"
                            >
                                <span>Actividades</span>
                                <i className={`fas fa-chevron-${activeSubmenu === 'actividades' ? 'up' : 'down'} text-sm`}></i>
                            </button>
                            <div className={`pl-4 space-y-2 ${activeSubmenu === 'actividades' ? 'block' : 'hidden'}`}>
                                {actividadesItems.map((item, index) => (
                                    <Link 
                                        key={`${item.href}-${index}`} 
                                        to={item.href} 
                                        className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" 
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <button 
                                onClick={() => toggleSubmenu('socio')}
                                className="flex items-center justify-between w-full text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors"
                            >
                                <span>Hacete Socio</span>
                                <i className={`fas fa-chevron-${activeSubmenu === 'socio' ? 'up' : 'down'} text-sm`}></i>
                            </button>
                            <div className={`pl-4 space-y-2 ${activeSubmenu === 'socio' ? 'block' : 'hidden'}`}>
                                <Link to="/valores-y-dias" className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Valores y Días</Link>
                                <HashLink to="/#asociate" className="block text-casa-white text-lg hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Asociarse</HashLink>
                            </div>
                        </div>
                        <Link to="/novedades" className="block text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Novedades</Link>
                        <HashLink to="/#contacto" className="block text-casa-white text-xl font-montserrat hover:text-casa-yellow transition-colors" onClick={toggleMenu}>Contacto</HashLink>
                        <div className="flex flex-col space-y-4 mt-6">
                            <a 
                                href="https://portal.ourclub.io/casadepadua/Account/Register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-casa-yellow text-casa-black font-montserrat px-6 py-3 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 shadow-lg"
                                onClick={toggleMenu}
                            >
                                <span>Asociarse</span>
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                            <a 
                                href="https://portal.ourclub.io/casadepadua/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-casa-purple text-white font-montserrat px-6 py-3 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg"
                                onClick={toggleMenu}
                            >
                                <span>Portal de Socios</span>
                                <i className="fas fa-user ml-2"></i>
                            </a>
                        </div>
                    </nav>
                    <div className="mt-auto">
                        <div className="flex justify-center space-x-6 mb-4">
                            <a href="https://www.facebook.com/casapadua" target="_blank" rel="noopener noreferrer" className="text-casa-white hover:text-casa-yellow text-2xl">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/casapadua" target="_blank" rel="noopener noreferrer" className="text-casa-white hover:text-casa-yellow text-2xl">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@casapadua" target="_blank" rel="noopener noreferrer" className="text-casa-white hover:text-casa-yellow text-2xl">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}