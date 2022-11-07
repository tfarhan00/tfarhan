import SpotifyCard from './SpotifyCard'
import TwitterCard from './TwitterCard'

export default function MediaCard() {
	return (
		<div className='break-inside-avoid mb-4 flex flex-col xl:flex-row items-center gap-4'>
			<SpotifyCard />
			<TwitterCard />
		</div>
	)
}