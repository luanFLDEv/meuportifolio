import fotoPerfil from '../img/me4.png'
import Line from '../inputs/line'
import Stacks from '../stacks'
export default function Telaprincipal() {
	return (
		<div className="mt-10 text-black">
			<div className="flex justify-center items-center mb-3.5 gap-10 ">
				<div className="flex flex-col bg-white p-8 rounded-lg shadow-lg">
					<h1 className="bg-gray-800 text-white  text-center  ">
						Luansin Code-Space
					</h1>
					<div className="flex items-center mt-1 gap-8">
						<img
							src={fotoPerfil}
							alt="Foto de Perfil"
							className="w-48 h-48 rounded-full mr-8"
						/>
						<div className="max-w-md ">
							<h2 className="text-3xl font-bold mb-4">
								BEM-VINDO AO MEU PORTFÓLIO
							</h2>
							<p className="text-lg mt-4">
								Meu nome é Luan, sou programador Full Stack,A seguir encontrarão
								minhas stacks, projetos e muito mais sobre mim.<br></br> Meios
								de contato 👇
							</p>
							<ul className="flex gap-4 mt-2">
								<li>Luanfelipepf@gmail.com</li>
								<li>
									<a
										href="https://www.linkedin.com/in/luanfpdev/"
										className="text-blue-500 hover:underline"
									>
										LinkedIn
									</a>
								</li>
								<li>
									<a
										href="https://github.com/luanFLDEv"
										className="text-blue-500 hover:underline"
									>
										GitHub
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
