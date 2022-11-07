import { ThreeDots } from 'react-loader-spinner'

export default function CardLoader() {
	return (
		<div className="rounded-3xl h-[24rem] md:h-[22rem] bg-gray-100 relative overflow-hidden flex flex-col items-center justify-center dark:bg-dark">
			<ThreeDots 
				height="40" 
				width="40" 
				radius="9"
				color="#121212" 
				ariaLabel="three-dots-loading"
				wrapperClass="text-darker"
				visible={true}
			/>
		</div>
	)
}