import { motion, AnimatePresence } from 'framer-motion'
import Carousel from "framer-motion-carousel"
import type { storyType } from '@/lib/StoryList'
import { storyList } from '@/lib/StoryList'

export default function StoryCard() {

	return (
		<div className='break-inside-avoid mb-4 relative h-[32rem] xl:h-[24rem] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-2 dark:bg-dark dark:ring-2 dark:ring-neutral-800 overflow-hidden'>
			<Carousel 
				autoPlay={false} 
				renderArrowLeft={({handlePrev, activeIndex}) => (
					<div>				
						{activeIndex !== 0 && (
						<button onClick={() => handlePrev()} className='absolute bottom-6 left-6 font-semibold w-12 h-12 rounded-full bg-white flex items-center justify-center text-darker border border-dark dark:border dark:border-neutral-300 dark:bg-dark dark:text-white'>
							<i className="bi bi-arrow-left"></i>
						</button>
						)}
					</div>
				)} 
				renderArrowRight={({handleNext, activeIndex}) => (
					<div>	
						{activeIndex !== storyList.length - 1 && (
						<button onClick={() => handleNext()} className='absolute bottom-6 right-6 font-semibold w-12 h-12 rounded-full bg-white flex items-center justify-center text-darker border border-dark dark:border dark:border-neutral-300 dark:bg-dark dark:text-white'>
							<i class="bi bi-arrow-right"></i>
						</button>
						)}
					</div>
				)} 
				renderDots={() => null}
			>
				{storyList?.map((item: storyType, i: number) => (
					<div key={i} className='p-8 h-full bg-white w-full text-darker md:grow flex flex-col gap-4 dark:bg-dark'>
						{i === 0 
							?<i className="bi bi-patch-question-fill text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-blue-500"></i> 
							:<i className="bi bi-check-all text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-blue-500"></i>
						}
						<h1 className='font-bold font-DMserif text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-blue-500'>
							{item.title}
						</h1>
						<p className='font-medium text-neutral-600 dark:text-neutral-400'>
							{item.body}
						</p>
					</div>
				))}
			</Carousel>		
		</div>
	)
}
