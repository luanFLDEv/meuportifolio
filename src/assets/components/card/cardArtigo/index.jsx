export default function CardArtigo({ titulo, descricao, link }) {
	return (
		<div className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 text-center  ">
			<h2 className="text-2xl font-bold mb-2">{titulo}</h2>
			<p className="text-lg  mb-4">{descricao}</p>
			<div className="text-center">
				<a href={link} className="text-blue-600 hover:underline">
					Ler artigo
				</a>
			</div>
		</div>
	)
}
