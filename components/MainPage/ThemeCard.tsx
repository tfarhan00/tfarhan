import ToggleDark from '../ToggleDark'
import { motion } from 'framer-motion'

export default function ThemeCard() {
	return (
		<div className='w-full flex items-center gap-4'>
			<motion.div
				whileTap={{ scale: 0.95 }} 
				className='break-inside-avoid mb-4 grow h-24 bg-white dark:bg-dark rounded-3xl flex items-center justify-center dark:ring-2 dark:ring-neutral-800'>
				<ToggleDark />
			</motion.div>
			<motion.div
				whileTap={{ scale: 0.95 }} 
				className='cursor-pointer break-inside-avoid mb-4 grow h-24 text-white font-semibold rounded-3xl flex items-center justify-center bg-gradient-to-br from-orange-300 to-rose-300 dark:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] dark:from-amber-200 dark:via-violet-600 dark:to-sky-900 transition-colors duration-500'>
				<a href="https://ko-fi.com/tfarhan">
					<i class="bi bi-cup-hot-fill"></i>
				</a>
			</motion.div>
		</div>
	)
}