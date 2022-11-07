
import { MouseEventHandler, useEffect, useState } from 'react'
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion'
import Image from 'next/image'
import { toolsData } from '@/lib/ToolsList'
import type { iconsListType } from '@/lib/ToolsList'

interface detailsType {
 detailsData: Array<iconsListType>
 iconsListId: string | number | any
 onClick: MouseEventHandler
}

const cubicTransition = { type: "ease", ease: [ 0.26, 0.84, 0.26, 0.85], duration: 0.4 }

const iconsClass = `
	@apply
	h-20
	w-20
	transition-all
	duration-300
	cursor-pointer
	rounded-xl
	active:ring-gray-400
	active:ring-4
	hover:ring-4
	hover:ring-gray-400/50 
	md:h-12
	md:w-12
	xl:h-16
	xl:w-16
`

export default function ToolsCard(): JSX.Element {

	return (
		<div className='break-inside-avoid mb-4 xl:col-span-2 rounded-3xl h-[24rem] md:h-[22rem] bg-[#787785] relative overflow-hidden flex flex-col items-center justify-center dark:bg-dark dark:ring-2 dark:ring-neutral-800'>
			<ToolsIcon data={toolsData} />
			<div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-white flex items-center gap-2 rounded-full px-4 py-2 text-darker font-semibold text-xs md:text-sm dark:bg-darker dark:text-white">
				<i className="bi bi-terminal-fill"></i>
				<p>Favorites Apps</p>
			</div>
		</div>
	)
}

const ToolsIcon = ({ data }: {data: Array<iconsListType>}): JSX.Element => {

	const [isClicked, setIsClicked] = useState<boolean>(false)
	const [id, setId] = useState<string | number>('')

	return (		
		<div className='w-full flex items-center justify-center'>
		<AnimatePresence mode='wait'>						
			<LayoutGroup type='crossfade'>			
				{isClicked 
					? (<ToolsDetail onClick={() => setIsClicked(!isClicked)} detailsData={data} iconsListId={id} />)

					: (		
							<motion.div
								key='allItems'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={cubicTransition}
								className='bg-white rounded-2xl shadow-lg p-4 gap-2 grid grid-cols-3 md:grid-cols-6 dark:bg-neutral-700'
							>
								{data && data.map((item: iconsListType, i: number) => (
									<motion.div
										key={i}
										className={iconsClass}
										transition={cubicTransition} 
										onClick={() => { setIsClicked(!isClicked); setId(i) }}>
										<Image 
											src={item.src} 
											alt={item.id} 
											width={250} 
											height={250}
											sizes='contain'
											priority 
										/>
									</motion.div>
								))}
							</motion.div>
					)
				}
			</LayoutGroup>
		</AnimatePresence> 
		</div>			
	)
}

const ToolsDetail = ({ detailsData, iconsListId, onClick }: detailsType): JSX.Element => {

	const singleData = detailsData[iconsListId]

	return (
			<motion.div
				key='items'
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.5 }}
				transition={cubicTransition}
				className='relative bg-white w-[90%] md:w-[80%] rounded-2xl shadow-lg gap-2 flex items-center justify-center dark:bg-neutral-700'
			>
						<div className='flex flex-col'>
						
							<div className='w-full px-4 py-2 border-b border-gray-400 flex items-center justify-between'>
								<div className='flex items-center gap-2'>	
									<Image 
											src={singleData.src} 
											alt={singleData.id} 
											width={25} 
											height={25}
											sizes='contain'
											priority 
										/>
										<div className='flex items-center gap-1'>	
											<h1 className='font-semibold text-sm dark:text-white'>{singleData.name}</h1>
											<span>-</span>
											<p className='text-sm text-gray-600 dark:text-gray-300'>{singleData.type}</p>
										</div>
								</div>
								<button
									onClick={onClick}
									className='flex items-center justify-center rounded-full text-2xl dark:text-white'
								>
									<i className="bi bi-x"></i>
								</button>
							</div>
							<div className='w-full flex p-4 items-center justify-center'>
								<p className='text-sm dark:text-gray-200'>{singleData.desc}</p>
							</div>

						</div>
			</motion.div>
	)
}

