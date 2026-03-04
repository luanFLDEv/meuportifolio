import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import './style.css'
export default function Background() {
	const particlesInit = async engine => {
		await loadSlim(engine)
	}

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={{
				fullScreen: { enable: true },
				background: {
					color: '#0f172a'
				},
				particles: {
					number: { value: 80 },
					size: { value: 3 },
					move: { enable: true },
					links: { enable: true }
				}
			}}
		/>
	)
}
