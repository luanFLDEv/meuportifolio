import projeto1 from '../img/projeto1.png'
import projeto2 from '../img/projeto2.png'
import projeto3 from '../img/projeto3.png'
import CardProjeto from '../card/cardProjeto/index.jsx'
import Line from '../inputs/line/index.jsx'
export default function Projetos() {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-4 text-center">MEUS PROJETOS</h1>
			<p className="text-lg mb-4 text-center">
				Aqui estão alguns dos meus projetos pessoais. Sinta-se à vontade para
				explorar e entrar em contato se tiver alguma dúvida ou quiser colaborar!
			</p>
			<div className="grid mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
				<CardProjeto
					imagem={projeto1}
					titulo="Projeto 1: Nome do projeto"
					descricao="Descrição do projeto 1."
					link="/projeto1"
				></CardProjeto>
				<CardProjeto
					imagem={projeto2}
					titulo="Projeto 2: Nome do projeto"
					descricao="Descrição do projeto 2."
					link="/projeto2"
				></CardProjeto>
				<CardProjeto
					imagem={projeto3}
					titulo="Projeto 3: Nome do projeto"
					descricao="Descrição do projeto 3."
					link="/projeto3"
				></CardProjeto>
			</div>
		</div>
	)
}
