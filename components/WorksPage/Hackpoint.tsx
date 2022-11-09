import styles from './works.module.css'
import Image from 'next/image'
import { HACKPOINT_URL } from '@/lib/URL'
import { motion } from 'framer-motion'
import { useState } from 'react'


const iconVariants = {
	hover: {
		rotate: "45deg"
	}
}


export default function Hackpoint(): JSX.Element {

	const [isHovered, setIsHovered] = useState<boolean>(false)

	return (
		
		<div className='break-inside-avoid mb-4 w-full rounded-3xl h-[20rem] md:h-[22rem] p-4 bg-dark relative overflow-hidden flex flex-col items-center justify-start dark:bg-dark dark:ring-2 dark:ring-neutral-800'>
			<div className="absolute -top-16 -left-8 w-32 h-60 rounded-full bg-white text-white text-3xl font-bold dark:text-white dark:hidden"></div>
			<div className="absolute -bottom-20 -right-8 w-32 h-60 rounded-full bg-white text-white text-3xl font-bold dark:text-white dark:hidden"></div>
			
			<div className="absolute w-[22rem] lg:w-[17rem] -rotate-[10deg] -bottom-4 -right-24 mx-auto hover:scale-105 transition-all duration-500">
					<Image src={HACKPOINT_URL} alt='hackpoint' width={800} height={800} className='rounded-lg' priority />
			</div>
			<div className="cursor-pointer flex items-center justify-center absolute bottom-4 left-4 md:bottom-6 md:left-6">					
				<a href={`https://hackpoint.netlify.app`}>
				<motion.div
					whileHover="hover"
					className={`rounded-full px-4 py-1 overflow-hidden bg-white text-darker flex items-center gap-2 border border-gray-200 hover:ring-4 hover:ring-gray-100/50 dark:border-none dark:bg-darker dark:text-white`}
				>
					<motion.span
						className={`text text-sm font-[500]`}
					>
						Hackpoint
					</motion.span>
					<motion.i
						variants={iconVariants} 
						className={`bi bi-arrow-up-right`}>
					</motion.i>
				</motion.div>
				</a>
			</div>
		</div>

	)
}