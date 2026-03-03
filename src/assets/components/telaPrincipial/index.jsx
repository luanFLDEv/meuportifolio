import fotoPerfil from '../img/Perfil.gif'
import Line from '../inputs/line'
export default function Telaprincipal() {
	return (
		<div className="mt-10">
			<div className="flex justify-center items-center mb-3.5 ">
				<div className="flex flex-col bg-blue-600 p-8 rounded-lg shadow-lg">
					<h1 className="bg-black text-white  text-center  ">
						Luansin Code-Space
					</h1>
					<div className="flex items-center  gap-8">
						<img
							src={fotoPerfil}
							alt="Foto de Perfil"
							className="w-48 h-48 rounded-full mr-8"
						/>
						<div className="max-w-md ">
							<h2 className="text-3xl font-bold mb-4">
								Bem-vindo ao meu portfólio!
							</h2>
							<p className="text-lg">
								Meu nome é Luan Felipe, sou um desenvolvedor full-stack. usando
								react e node.js
							</p>
							<p className="text-lg mt-4">
								No momento estou estudando para me tornar um desenvolvedor
								backend especializado em Java oque sempre foi meu sonho.{' '}
							</p>
							<h3 className="text-xl mt-4">
								Aqui em baixo voces podem ver meus projetos e alguns "artigos"
								que eu escrevo como forma de fixar meu aprendizado
							</h3>
						</div>
					</div>
				</div>
			</div>
			<Line></Line>
		</div>
	)
}
