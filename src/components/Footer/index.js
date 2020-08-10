import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>

      <img className="Logo" src={Logo} alt="ListFlix logo" />
      <p>
        Orgulhosamente criado durante a
        {' '}
          Imersão React da Alura

      </p>
    </FooterBase >
  );
}

export default Footer;
