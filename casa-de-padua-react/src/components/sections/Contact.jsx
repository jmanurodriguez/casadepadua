import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Contact() {
    useScrollAnimation();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'consulta',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación básica
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }
        
        // Validación email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Por favor, ingrese un email válido.');
            return;
        }
        
        // Crear mensaje para WhatsApp
        const asuntoTexto = {
            'consulta': 'Consulta General',
            'inscripcion': 'Inscripción a Actividades',
            'socio': 'Información sobre Membresía',
            'otro': 'Otro'
        };
        
        const mensaje = `*Nuevo contacto desde la web - CASA de Padua*
        
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone || 'No especificado'}
*Asunto:* ${asuntoTexto[formData.subject]}

*Mensaje:*
${formData.message}`;
        
        // Codificar el mensaje para URL
        const mensajeCodificado = encodeURIComponent(mensaje);
        
        // Crear URL de WhatsApp
        const whatsappUrl = `https://wa.me/5491140555387?text=${mensajeCodificado}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Limpiar formulario
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: 'consulta',
            message: ''
        });
        
        alert('¡Formulario enviado! Se abrirá WhatsApp para enviar tu mensaje.');
    };

    return (
        <section className="py-16 bg-casa-purple text-white" id="contacto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-10 md:mb-0">
                        <h2 className="text-4xl font-montserrat font-bold mb-6 animate-on-scroll">
                            Contactate con Nosotros
                        </h2>
                        <p className="mb-8 animate-on-scroll">
                            ¿Tenés alguna pregunta o querés sumarte a nuestras actividades? 
                            Completá el formulario y te contactaremos directamente por WhatsApp.
                        </p>
                        
                        <div className="mb-8 animate-on-scroll">
                            <h3 className="text-xl font-montserrat font-bold mb-4">
                                Información de Contacto
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt w-6 text-casa-yellow"></i>
                                    <span>
                                        Independencia 725, B1718 San Antonio de Padua, 
                                        Provincia de Buenos Aires
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-phone w-6 text-casa-yellow"></i>
                                    <span>(0220) 482-4186</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-envelope w-6 text-casa-yellow"></i>
                                    <span>info@casadepadua.com.ar</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="mb-8 animate-on-scroll">
                            <div className="rounded-xl overflow-hidden shadow-lg mb-4 h-64">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5037873169797!2d-58.70117312348612!3d-34.66898236091622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9471d1c7e3bd%3A0xf8cb73cdaaf0c96!2sClub%20Atl%C3%A9tico%20San%20Antonio%20de%20Padua!5e0!3m2!1ses-419!2sar!4v1744668599456!5m2!1ses-419!2sar"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación del Club"
                                ></iframe>
                            </div>
                        </div>
                        
                        <div className="animate-on-scroll">
                            <h3 className="text-xl font-montserrat font-bold mb-4">
                                Horarios de Atención
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span>Lunes a Viernes:</span>
                                    <span>9:00 - 21:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sábados:</span>
                                    <span>9:00 - 18:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Domingos:</span>
                                    <span>10:00 - 14:00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 animate-on-scroll">
                        <form 
                            onSubmit={handleSubmit}
                            className="bg-white text-gray-800 p-8 rounded-lg shadow-lg"
                        >
                            <div className="mb-4">
                                <label 
                                    htmlFor="name"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Nombre Completo
                                </label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-casa-purple"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label 
                                    htmlFor="email"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Email
                                </label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-casa-purple"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label 
                                    htmlFor="phone"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Teléfono
                                </label>
                                <input 
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-casa-purple"
                                />
                            </div>
                            <div className="mb-4">
                                <label 
                                    htmlFor="subject"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Asunto
                                </label>
                                <select 
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-casa-purple"
                                >
                                    <option value="consulta">Consulta General</option>
                                    <option value="inscripcion">Inscripción a Actividades</option>
                                    <option value="socio">Información sobre Membresía</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label 
                                    htmlFor="message"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Mensaje
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-casa-purple"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button 
                                    type="submit"
                                    className="bg-casa-purple text-white font-montserrat px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg inline-flex items-center"
                                >
                                    <i className="fab fa-whatsapp mr-2 text-lg"></i>
                                    Enviar por WhatsApp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}