import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import ToggleDark from "./ToggleDark"

export default function Navbar() {

	const router = useRouter()
	const onPath = "text-darker dark:text-white flex items-center gap-2"
	const notPath = "text-gray-400 dark:text-gray-500 flex items-center gap-2"

	return (
		<div className='fixed bottom-0 left-0 z-[99] p-4 w-full md:static md:p-0'>
			<nav className="w-full h-16 md:h-20 rounded-xl md:rounded-none md:bg-cream md:text-darker bg-dark text-white flex items-center justify-between px-6 md:px-8 dark:bg-darker">
				<div className='font-bold font-DMserif dark:text-white'>
					<Link href='/'>tfarhan.</Link>
				</div>
				<div className='flex gap-4 items-center'>
					<div className='flex items-center gap-4 text-neutral-500 text-lg dark:text-white transition-colors font-medium duration-300'>
						<a href="https://instagram.com/tfarhan0" target='_blank' rel="noreferrer">
							<i className="bi bi-instagram"></i>
						</a>
						<a href="https://tfarhan.read.cv" target='_blank' rel="noreferrer">
							<i class="bi bi-file-text"></i>
						</a>
						<a href="https://twitter.com/tfarhan0" target='_blank' rel="noreferrer">
							<i className="bi bi-twitter"></i>
						</a>
						<a href="https://github.com/tfarhan00" target='_blank' rel="noreferrer">
							<i className="bi bi-github"></i>
						</a>
					</div>
				</div>
			</nav>
		</div>
	)
}