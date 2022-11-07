import Image from 'next/image'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, LayoutGroup, useWillChange } from 'framer-motion'
import { useDraggable } from "react-use-draggable-scroll"

export default function MyCard(): JSX.Element {

	const willChange = useWillChange()
	const [isSelected, setIsSelected] = useState<boolean>(false)

	return (
		<AnimatePresence mode='wait'> 
		<LayoutGroup type="crossfade">
			{isSelected && (<MyDetails onClick={() => setIsSelected(!isSelected)} />)}		
				<motion.div
					layoutId='openDetails'
					layout="position"
					style={{ willChange }}
					className="break-inside-avoid mb-4 min-h-[16rem] z-[1] relative text-base w-full rounded-3xl flex flex-col bg-white p-8 dark:bg-dark dark:ring-2 dark:ring-neutral-800 dark:text-white">
					<Image
						src='https://ik.imagekit.io/raq7uhmdb2/assets/avatartwo_OT6JL2A_WN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811211465'
						alt='myanimoji'
						width={150}
						height={150}
						sizes='contain'
					/>
					<p className='font-medium text-neutral-500 dark:text-neutral-400'>
						{`I'm`} <span className="text-2xl font-bold text-darker font-DMserif dark:text-white">Farhan</span> , a former graphic designer and photographer who turns into self hosted developer that
						interested in React, NextJS, Astro, & Rust.
					</p>
					<button
						onClick={() => setIsSelected(!isSelected)}
						className='absolute top-4 right-4 border border-gray-500 p-3 w-10 h-10 text-sm rounded-full flex items-center justify-center'
					>
						<i className="bi bi-arrow-up-right"></i>
					</button>
				</motion.div>
			</LayoutGroup>
		</AnimatePresence>
	)
}

function MyDetails({ onClick }: { onClick: any }): JSX.Element {

	const willChange = useWillChange()
	const scrollRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  	const { events } = useDraggable(scrollRef, {
  		isMounted: true
  	})

	return (
		<motion.div
			style={{ willChange }}
			className='fixed top-0 left-0 w-full h-full z-[99] rounded-2xl flex flex-col items-center justify-center p-4 md:p-8 dark:text-white'
		>
			<motion.div
				{...events}
				ref={scrollRef}
				layoutId='openDetails'
				layout="position"
				style={{ willChange }}
				className='relative cursor-hand shadow-xl rounded-2xl p-6 md:p-12 flex flex-col items-center bg-white dark:bg-neutral-800 dark:text-white overflow-y-scroll hideScroll'
			>
				<div className='z-[2] w-full xl:w-[50%] bg-white dark:bg-neutral-800 rounded-xl xl:shadow-xl xl:p-8 flex flex-col items-center justify-between'>
					<div className='flex items-center w-full justify-between'>
					<h1 className="font-bold text-3xl md:text-3xl">A brief about myself</h1>
						<button
							onClick={onClick}
							className='border border-gray-500 p-3 w-10 h-10 text-sm rounded-full flex items-center justify-center'
						>
							<i className="bi bi-x-lg"></i>
						</button>
					</div>
					<div className='mt-8 flex flex-col'>		
						<h2 className="font-[500] text-xl">The Origin <i className="bi bi-geo-alt-fill"></i></h2>
						<p className="text-gray-500 text-base md:text-lg dark:text-gray-300">
							I was introduced to this world in Surabaya. The city in the far east of Java island that&apos;s really known for it scorching heat, but only after 7 days i got moved out to Bogor, West Java, Indonesia. And continue my life there, plus feel blessed that this city is quite the opposite of what Surabaya is in terms of temperature.
						</p>
					</div>
					<div className='mt-8 flex flex-col'>		
						<h2 className="font-[500] text-xl">Daily Stuff <i className="bi bi-calendar-date"></i></h2>
						<p className="text-gray-500 text-base md:text-lg dark:text-gray-300">
							As a former photographer and graphic designer, I have quite a lot of interesting experience about exploring world of visual, until the day has come when
							I discovered web development which is indirectly involved a visual aspect (Frontend) that I always dig into and it succeeded in making me drown into this realm right now.
						</p>
					</div>
					<div className='mt-8 flex flex-col'>		
						<h2 className="font-[500] text-xl">Things That Should Be done <i className="bi bi-check2-all"></i></h2>
						<p className="text-gray-500 text-base md:text-lg dark:text-gray-300">
							Read a book, recently I just found that reading a book is giving you way more focus to what you are learning, no distraction what so ever, of course I&apos;m late to the game, but better late than never, right?.
						</p>
					</div>
					<div className='mt-8 flex flex-col'>		
						<h2 className="font-[500] text-xl">Some Kind Of Motivation <i className="bi bi-emoji-smile"></i></h2>
						<p className="text-gray-500 text-base md:text-lg dark:text-gray-300">
							One of the moment that made me think about it a lot is when I realize that you actually live someone life, no matter how bad you feel
							there&apos;s always someone who willing to exchange their life with yours right at that moment.
						</p>
					</div>
					<div className='mt-8 flex flex-col'>		
						<h2 className="font-[500] text-xl">TL;DR <i class="bi bi-emoji-neutral"></i></h2>
						<p className="text-gray-500 text-base md:text-lg dark:text-gray-300">
							I&apos;m an Indonesia based web developer that works with latest tech stack, latest design system, & latest everything.
						</p>
					</div>		
				</div>	
			</motion.div>
		</motion.div>
	)
}
