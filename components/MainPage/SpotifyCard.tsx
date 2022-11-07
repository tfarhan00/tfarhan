import { Rings, Bars, ThreeDots } from 'react-loader-spinner'
import useSWR from 'swr'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function SpotifyCard() {

	const fetcher = url => fetch(url).then(res => res.json())
	const { data } = useSWR('/api/spotify', fetcher, { refreshInterval: 15000 })
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
	}, [])

	if (!data && isLoading) {
		return (
			<div className="w-full relative p-6 bg-white min-h-[19rem] rounded-3xl flex justify-center items-center dark:bg-dark dark:ring-2 dark:ring-neutral-800">
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
		<div
			className="overflow-hidden w-full relative p-6 bg-white min-h-[19rem] rounded-3xl flex flex-col gap-2 justify-end items-start dark:bg-dark dark:ring-2 dark:ring-neutral-800">
			<i className="absolute top-6 left-6 text-4xl text-green-300 bi bi-spotify"></i>
			<div className='absolute -top-6 -right-6 flex items-center justify-center'>
				<div className='relative w-36 h-36 rounded-full shadow-xl flex items-center justify-center'>
					<div className='overflow-hidden relative w-full h-full rounded-full'>	
						<Image src={data?.coverUrl} alt={data?.artist ? data?.artist : 'Cover'} fill sizes='100%' className='rounded-full animate-spin-slow'/>
					</div>
				</div>
			</div>
			
			<div className="self-justify-end flex items-center gap-2 text-sm text-green-300">
				<Bars
					height="20"
					width="20"
					color="#86EFAC"
					ariaLabel="bars-loading"
					visible={true}
				/>
			<p>Online &bull; Now Playing</p>
			</div>
			<div className='w-full flex items-center justify-between'>		
				<div className='flex flex-col dark:text-white'>
					<a href={data?.songUrl}>
						<p className='text-2xl font-bold font-DMserif'>{data?.title}</p>
					</a>
					<p>{data?.artist}</p>
				</div>
				
			</div>
		</div>
	)
}
