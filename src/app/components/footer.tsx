import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'linear' }}
            className="bg-gray-200 text-gray-700 pt-12 pb-8 mt-16"
        >
            <div className="container mx-auto px-4">
                <div className="w-full flex flex-wrap">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h3 className="text-2xl mb-4">Acerca de nosotros</h3>
                        <p>Nuestro objetivo es ofrecer la mejor experiencia a nuestros usuarios y clientes, con productos y servicios de alta calidad.</p>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h3 className="text-2xl mb-4">Enlaces útiles</h3>
                        <ul>
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                            <li><Link href="/contacto">Preguntas Frecuentes</Link></li>
                        </ul>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h3 className="text-2xl mb-4">Contacto</h3>
                        <ul>
                            <li><p>Yeiko Artavia</p></li>
                            <li><p>Gregory Hidalgo</p></li>
                            <li><p>Carlos Salas</p></li>
                            <li><p>Marlon Gutierrez</p></li>
                        </ul>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl mb-4">Redes Sociales</h3>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                        <FaFacebook size="2em" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                        <FaTwitter size="2em" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                        <FaLinkedin size="2em" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-8 pt-8 text-center">
                    <p>© {new Date().getFullYear()} Nuestra Empresa. Todos los derechos reservados.</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
