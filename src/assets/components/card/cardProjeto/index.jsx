export default function CardProjeto({ imagem, titulo, descricao, link }) {
	return (
		<div className="bg-gray-100 p-1 rounded-lg shadow-md mb-4 text-black">
			<img
				src={imagem}
				alt={titulo}
				className="w-full h-48 object-cover mb-4 rounded"
			/>
			<h2 className="text-2xl font-bold mb-2">{titulo}</h2>
			<p className="text-lg mb-4">{descricao}</p>
			<div className="text-center">
				<a href={link} className="text-blue-600 hover:underline">
					Ver projeto
				</a>
			</div>
		</div>
	)
}
