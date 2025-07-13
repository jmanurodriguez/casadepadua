import React from 'react';

export default function InstagramButton({ link }) {
  // Usamos un enlace <a> directo y simple
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-casa-yellow text-casa-black font-montserrat px-8 py-4 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 shadow-lg inline-flex items-center cursor-pointer no-underline"
      style={{ textDecoration: 'none', display: 'inline-flex', zIndex: 9999 }}
    >
      <i className="fab fa-instagram mr-2"></i>
      Seguinos en Instagram
    </a>
  );
}
