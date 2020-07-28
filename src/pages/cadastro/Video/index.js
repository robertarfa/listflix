import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';



export default function Video() {
	return (
		<>
			<PageDefault>
				<h1>
					Cadastro Video
			</h1>

				<Link to="/cadastro/categoria">
					Cadastrar Categoria
			</Link>

			</PageDefault>
		</>
	)
}
