import CardArtigo from '../card/cardArtigo'
export default function Artigos() {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-4 text-center">Meus Artigos</h1>
			<p className="text-lg mb-4 text-center">
				Aqui estão alguns dos meus artigos. Sinta-se à vontade para explorar e
				entrar em contato se tiver alguma dúvida ou quiser colaborar!
			</p>
			<div className="grid mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 bg-blue-700">
				<CardArtigo
					titulo="Inteligencia Artificial: qual futuro nos espera?"
					descricao="Esse artigo explora o impacto da inteligencia artifcial nas nossa vida, e traz sua ordem de evolução, e o que podemos esperar para o futuro."
					link="/artigo1"
				></CardArtigo>
				<CardArtigo
					titulo="Organização de codigo e arquitetura de software"
					descricao="Este artigo aborda práticas recomendadas para organizar código e estruturar sistemas de software de forma eficiente."
					link="/artigo2"
				></CardArtigo>
				<CardArtigo
					titulo="Em desenvolvimento"
					descricao="Este artigo está em desenvolvimento."
					link="/artigo3"
				></CardArtigo>
			</div>
		</div>
	)
}
