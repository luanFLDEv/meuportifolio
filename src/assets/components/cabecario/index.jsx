import Line from '../inputs/line'
export default function Header() {
	return (
		<div className="mb-0">
			<nav className="">
				<ul className="flex text-center justify-between w-full bg-gray-800 p-2 text-white ">
					<li>
						<a href="">Luansin Code-Space</a>
					</li>
					<div className="flex gap-4 ">
						<li>
							<a href="">Stacks</a>
						</li>
						<li>
							<a href="">Projetos</a>
						</li>
						<li>
							<a href="">Curriculo</a>
						</li>
						<li>
							<a href="">Artigos</a>
						</li>
					</div>
					<li>
						<a href="">Contrate-me</a>
					</li>
				</ul>
			</nav>
			<Line></Line>
		</div>
	)
}
