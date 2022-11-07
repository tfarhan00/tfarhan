import Hackpoint from '../WorksPage/Hackpoint'
import Developee from '../WorksPage/Developee'

export default function WorksCard(): JSX.Element {
	return (
		<div className='break-inside-avoid w-full grid grid-cols-1 lg:grid-cols-2 gap-2'>
			<Hackpoint />
			<Developee />
		</div>
	)
}