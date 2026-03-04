export default function Curriculo() {
	return (
		<div className="flex flex-col items-center mt-10 mb-10 text-black">
			<h1 className="text-3xl font-bold mb-6">CURRÍCULO</h1>
			<div className="flex justify-between p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-3xl">
				<div>
					<div className="flex flex-col gap-6 ">
						<div>
							<h2 className="text-2xl font-bold mb-4">Luan Felipe</h2>
							<p>Desenvolvedor Full Stack</p>
						</div>
						<div>
							<h2 className="text-xl font-bold mb-2">FORMAÇÃO</h2>
							<p>Bacharelado em Sistemas de Informação - Unex</p>
							<span>02 DE 2024 - 12 DE 2027</span>
						</div>
						<div>
							<h2 className="text-xl font-bold mb-2">PROJETOS</h2>
							<p>Projeto 1: Nome do projeto</p>
							<p>Descrição do projeto 1.</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<div>
						<h2 className="text-2xl font-bold ">HARD SKILLS</h2>
						<p>Java</p>
						<p>React | Node.js | JavaScript |Tailsind</p>
						<p>Postgres | Mysql </p>
						<p>Git | GitHub | Docker</p>
					</div>
					<div>
						<h2 className="text-2xl font-bold ">SOFT SKILLS</h2>
						<p>Comunicação eficaz</p>
						<p>Trabalho em equipe</p>
						<p>Resolução de problemas</p>
						<p>Adaptabilidade</p>
						<p>Gestão de tempo</p>
					</div>
					<div>
						<h2 className="text-2xl font-bold ">Idiomas</h2>
						<p>Português - Nativo</p>
						<p>Inglês - Business</p>
					</div>
				</div>
			</div>
		</div>
	)
}
