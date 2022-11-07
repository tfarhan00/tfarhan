import Link from 'next/link'

export default function BlogsCard() {
	return (
		<div
			whileTap={{ scale: 0.95 }}  
			className='break-inside-avoid mb-4 relative h-[23rem] xl:h-[20rem]'>
			<div className='w-full h-full bg-white rounded-3xl p-8 flex flex-col gap-4 dark:bg-dark dark:ring-2 dark:ring-neutral-800'>
				<h1 className='font-DMserif font-bold text-4xl text-darker dark:text-white'>Blogs</h1>
				<p className='font-medium text-neutral-600 dark:text-neutral-400'>This card will be the main gateway to my blog page, but it&apos;s currently on building so thank you for your eagerness to wait.</p>
			</div>
			<Link href='/blog'>
				<button className='absolute bottom-8 right-8 text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-blue-500 px-4 py-2 rounded-full font-semibold'>Read More</button>
			</Link>
			<button className='absolute bottom-8 left-8 bg-gradient-to-tr from-sky-400 to-blue-500 px-4 py-2 rounded-full text-white text-sm font-semibold'>Blog</button>
		</div>
	)
}