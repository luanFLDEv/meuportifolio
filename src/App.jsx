import './App.css'
import Telaprincipal from './assets/components/telaPrincipial'
import Header from './assets/components/cabecario'
import Projetos from './assets/components/projetos'
import Artigos from './assets/components/artigos'
function App() {
	return (
		<>
			<div>
				<Header></Header>
				<Telaprincipal></Telaprincipal>
				<Projetos></Projetos>
				<Artigos></Artigos>
			</div>
		</>
	)
}

export default App
