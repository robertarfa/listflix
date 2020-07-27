import React from 'react';
import { FooterBase, ImgLogo } from './styles';
import Logo from '../../../src/assets/Logo.png'

function Footer() {
  return (
    <FooterBase>

      <ImgLogo>
        <img className="Logo" src={Logo} alt="Logo ListFlix" />
      </ImgLogo>
      <p>
        Orgulhosamente criado durante a
        {' '}
          Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;


