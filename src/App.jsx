import './App.css'
import Telaprincipal from './assets/components/telaPrincipial'
import Header from './assets/components/cabecario'
import Projetos from './assets/components/projetos'
import Artigos from './assets/components/artigos'

import Background from './assets/components/backGround'
function App() {
	return (
		<>
			<div>
				<Background></Background>
				<Header></Header>
				<Telaprincipal></Telaprincipal>

				<Projetos></Projetos>
				{/* <Artigos></Artigos> */}
			</div>
		</>
	)
}

export default App
