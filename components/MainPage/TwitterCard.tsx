import Image from 'next/image'
import { useEffect } from 'react'
import useSWR from 'swr'
import { ThreeDots } from 'react-loader-spinner'
import { useState } from 'react'



export default function TwitterCard() {

	const fetcher = url => fetch(url).then((res) => res.json())
	const { data } = useSWR('/api/twitter', fetcher)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
	}, [])

	if (!data && isLoading) {
		return (
			<div className='w-full relative p-6 bg-white h-[19rem] rounded-3xl flex flex-col gap-4 items-center justify-center dark:bg-dark dark:ring-2 dark:ring-neutral-800'>
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
		<div className='w-full relative p-6 bg-white h-[19rem] rounded-3xl flex flex-col gap-4 items-start justify-between dark:bg-dark dark:ring-2 dark:ring-neutral-800'>
			<div className='flex items-center gap-2'>
				<div className='relative w-12 h-12 rounded-full overflow-hidden'>		
					<Image 
						src='https://ik.imagekit.io/raq7uhmdb2/assets/totoro_wHjpUXp0D.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666811212440'
						alt='pfp'
						quality={80}
						fill
						sizes='33vw'
						className='rounded-full object-cover'
						priority
					/>
				</div>	
				<div className='flex flex-col items-start'>
					<p className='font-semibold font-DMserif dark:text-white'>{data?.me.data.name}</p>
					<p className='text-neutral-500 text-sm dark:text-neutral-400'>@{data?.me.data.username}</p>
				</div>
			</div>
			<div className='flex flex-col gap-2 dark:text-white'>
				<p>{data?.tweet.data[0].text}</p>
				<p className='text-sm text-neutral-500 dark:text-neutral-400'>Twitter for Pixel</p>
			</div>
			<div className='self-end flex items-center justify-between w-full'>
				<button className='border border-neutral-500 p-3 w-10 h-10 text-sm rounded-full flex items-center justify-center dark:border-neutral-400 dark:text-white'>
					<a href={`https://twitter.com/${data?.me.data.username}/status/${data?.tweet.data[0].id}`}  target='_blank' rel="noreferrer">
						<i className="bi bi-arrow-up-right"></i>
					</a>
				</button>
				<i className="text-2xl text-blue-300 bi bi-twitter"></i>
			</div>
		</div>
	)
}8