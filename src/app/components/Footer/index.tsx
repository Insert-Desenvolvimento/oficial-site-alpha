import React from 'react';
import './footer.scss';
import { Instagram, Phone, Mail, Building } from 'lucide-react';


const Footer = () => {


    return (
        <div className='container-footer' id='contacts'>
            <div className='footer-elements'>
                <a href="https://www.instagram.com/alphaacademialtda/" target="_blank" rel="noopener noreferrer"><p className='instagram'><Instagram />alphaacademialtda</p></a>
                <p className='email'> <Mail />alphaacademia@yahoo.com</p>
                <p className='phone-contact'> <Phone />+55 (32) 3276-1351</p>
                <p className='address'> <Building /> Rua Estevão Pinto 135 Centro - Mar de Espanha/MG </p>
            </div>
            <div className='obrigatoriedade'>
                <p className='direitos'>Todos direitos reservados a: &copy; Alpha Academia</p>
                <p className='dev'>Desenvolvido e mantido por FLLA TECH</p>
            </div>
        </div>
    );
};

export default Footer;
