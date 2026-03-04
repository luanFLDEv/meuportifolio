import './App.css'
import Telaprincipal from './assets/components/telaPrincipial'
import Header from './assets/components/cabecario'
import Projetos from './assets/components/projetos'
import Artigos from './assets/components/artigos'
import Curriculo from './assets/components/curriculo'
import Background from './assets/components/backGround'
import Stacks from './assets/components/stacks'
function App() {
	return (
		<>
			<div>
				<Background></Background>
				<Header></Header>
				<Telaprincipal></Telaprincipal>
				<Stacks></Stacks>
				<Projetos></Projetos>
				<Curriculo></Curriculo>
				{/* <Artigos></Artigos> */}
			</div>
		</>
	)
}

export default App
