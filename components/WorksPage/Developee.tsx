import styles from './works.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'


const iconVariants = {
	hover: {
		rotate: "45deg"
	}
}

export default function Developee(): JSX.Element {
	return (
		
		<div className='break-inside-avoid mb-4 w-full rounded-3xl h-[20rem] md:h-[22rem] p-4 bg-white relative overflow-hidden flex flex-col items-center justify-start dark:bg-dark dark:ring-2 dark:ring-neutral-800'>
			<div className="absolute -top-16 -left-8 w-32 h-60 rounded-full bg-purply text-white text-3xl font-bold dark:text-white dark:hidden"></div>
			<div className="absolute -bottom-20 -right-8 w-32 h-60 rounded-full bg-purply text-white text-3xl font-bold dark:text-white dark:hidden"></div>

			<div className="absolute -rotate-[10deg] -bottom-4 -right-24 mx-auto w-[22rem] lg:w-[18rem] shadow-xl hover:scale-105 transition-all duration-500">
					<Image 
						src='https://ik.imagekit.io/raq7uhmdb2/assets/porto/aphelion-min_yO9MjfuZg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666811214890' 
						alt='hackpoint' 
						width={800} 
						height={800}
						sizes='contain' 
						className='rounded-lg'
						priority
					/>
			</div>
			<div className="cursor-pointer flex items-center justify-center absolute bottom-4 left-4 md:bottom-6 md:left-6">					
				<a href={`https://apheliondev.netlify.app`}>
				<motion.div
					whileHover="hover"
					className={`rounded-full px-4 py-1 overflow-hidden bg-white text-darker flex items-center gap-2 border border-gray-200 hover:ring-4 hover:ring-gray-100/50 dark:border-none dark:bg-darker dark:text-white`}
				>
					<motion.span
						className={`text text-sm font-[500]`}
					>
						Aphelion
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
