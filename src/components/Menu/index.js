import React from 'react';
import Logo from '../../assets/Logo.png'
import Button from '../Button/index';
import './Menu.css'
import { Link } from 'react-router-dom'


const Menu = () => {
	return (
		<>
			<nav className="Menu">
				<Link to="/">
					<img className="Logo" src={Logo} alt="Logo ListFlix" />
				</Link>

				<Button as={Link} className="ButtonLink" to="/cadastro/Video">
					Novo vídeo
				</Button>

			</nav>

		</>
	);
}

export default Menu;
