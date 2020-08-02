import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { FormField } from '../../../components/FormField'
import PageDefault from '../../../components/PageDefault'
import { Main, PageTitle, Button, ButtonContainer } from './styles'

export default function CadastroCategoria() {

	const initialValues = {
		name: '',
		description: '',
		color: ''
	}

	const [values, setValues] = useState(initialValues)
	const [categories, setCategories] = useState([])

	function setValue(key, value) {
		setValues({
			...values,
			[key]: value
			//[key] vai pegar o valor que foi passado
			//nome: value, descrição: value
		})
	}

	function handleInputChange(e) {
		setValue(
			e.target.getAttribute('name'),
			e.target.value
		)
	}

	useEffect(() => {
		if (window.location.href.includes('localhost')) {
			const URL = 'http://localhost:8080/categorias';
			fetch(URL)
				.then(async (respostaDoServer) => {
					if (respostaDoServer.ok) {
						const resposta = await respostaDoServer.json();
						setCategories(resposta);
						return;
					}
					throw new Error('Não foi possível pegar os dados');
				})
		}
	}, []);

	return (
		<>

			<PageDefault>
				<Main>

					<PageTitle>
						<h1>
							Cadastro Categoria
					</h1>
						<h3>
							{values.name}
						</h3>
					</PageTitle>


					<form onSubmit={function handleSubmit(e) {
						e.preventDefault()
						setCategories([
							...categories,
							values
						])
						setValues(initialValues)
					}}>

						<FormField
							label="Nome da Categoria"
							type="text"
							name="name"
							value={values.name}
							onChange={handleInputChange}
						/>

						<FormField
							label="Descrição"
							type="textarea"
							name="description"
							value={values.description}
							onChange={handleInputChange}
						/>

						<FormField
							label="Cor"
							type="color"
							name="color"
							value={values.color}
							onChange={handleInputChange}
						/>

						<ButtonContainer>
							<Button>
								Cadastrar
					</Button>
						</ButtonContainer>
					</form>


					<div>
						<ul>
							{categories.map((categoria) => {
								return (
									<li key={categoria}>
										{categoria.name}
									</li>
								)
							})}
						</ul>
					</div>

				</Main>



				{/* <Link to="/">
						Ir para Home
				</Link> */}
			</PageDefault>

		</>
	)
}
