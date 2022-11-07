import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { ThreeDots } from 'react-loader-spinner'
import { useTheme } from 'next-themes'

export default function ToggleDark() {

	const [isLoading, setIsLoading] = useState<boolean>(true)
	const { theme, setTheme } = useTheme()

	const container: string = "rounded-full cursor-pointer w-full h-full flex items-center justify-center"
	const slider: string = "overflow-hidden rounded-full flex items-center justify-around gap-1 px-2 w-12 text-xs md:text-sm md:w-24 transition-all duration-300"
	const btn: string = "w-20 h-20 rounded-full flex items-center  p-2 justify-center transition-all duration-300"
	const btnDark: string = "w-20 h-20 rounded-full flex items-center text-lg justify-center transition-all duration-300 text-purply -rotate-70"
	
	
	useEffect(() => {
		setIsLoading(false)
	}, [])


	if (isLoading) {
		return (
			<div className={container}>
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

	return (
			<motion.div
				whileTap={{ scale: 0.9 }} 
				className={container}
				onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')} 
			>
				<div className={slider}>
					<button className={theme === 'dark' ? btnDark : btn}>
						{theme === 'dark' ? <i className="text-xl text-[#f9db6d] bi bi-sun-fill"></i> : <i className="text-xl text-indigo-400 bi bi-moon-stars-fill"></i>}
					</button>
				</div>
			</motion.div>
		)
}