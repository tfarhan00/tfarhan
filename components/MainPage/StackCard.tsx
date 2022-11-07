import Image from 'next/image'
import { stackList, stackListType } from '@/lib/StackList'
import GalleryCard from './GalleryCard'

const iconsClass = `
		transition-all
		duration-300
		cursor-pointer
		rounded-xl
		hover:ring-4
		hover:ring-gray-400/50 
`

export default function StackCard(): JSX.Element {
	return (
		<div className='w-full flex flex-col gap-4 xl:flex-row'>		
			<div className='break-inside-avoid mb-4 relative w-full h-[23rem] xl:h-[23rem] rounded-3xl bg-[#D1ACA5] flex flex-col items-center justify-center gap-2 p-4 dark:bg-dark dark:ring-2 dark:ring-neutral-800'>
				<div className="grid grid-cols-4 xl:grid-cols-3 gap-2 p-4 font-[500] rounded-xl bg-white shadow-xl text-sm md:text-base dark:bg-neutral-700">		
					{stackList && stackList.map((item: stackListType, i: number) => (
						<div key={item.id} className={iconsClass}>
							<Image src={item.src} width={50} height={50} sizes='contain' alt='icon' priority />
						</div>
					))}
				</div>
				<div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 gap-2 flex items-center bg-white rounded-full px-4 py-2 text-darker font-semibold text-xs md:text-sm dark:bg-darker dark:text-white">
					<i className="bi bi-stack"></i>
					<p>Stacks</p>
				</div>
			</div>
			<GalleryCard />			
		</div>
	)
}