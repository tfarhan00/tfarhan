import Image from 'next/image'
import { useStore } from '@nanostores/react'
import { ThemeState } from '../../stores/ThemeStore'
import { useEffect, useState } from 'react'
import { RotatingLines } from "react-loader-spinner"
import { motion } from 'framer-motion'

export default function MapCard() {
	
	const MAP_TOKEN = process.env.NEXT_PUBLIC_MAP_KEY
	const isThemeDark = useStore(ThemeState)

	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [mapStatic, setMapStatic] = useState<string>('')

	const [zoomMap, setZoomMap] = useState({
		longitude: 106.8060,
		latitude: -6.5971,
		zoom: 14
	})

	const handleZoomIn = () => {
		setZoomMap({
			...zoomMap,
			zoom: zoomMap.zoom + 2
		})	
	}

	const handleZoomOut = () => {
		setZoomMap({
			...zoomMap,
			zoom: zoomMap.zoom - 2
		})
	}

	useEffect(() => {
		setIsLoading(true)
		fetch(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${zoomMap.longitude},${zoomMap.latitude},${zoomMap.zoom},0/800x900@2x?access_token=${process.env.NEXT_PUBLIC_MAP_KEY}`)
		.then(res => res.blob())
		.then(imgBlob => {
			const imageObjectURL = URL.createObjectURL(imgBlob)
			setMapStatic(imageObjectURL)
			setIsLoading(false)
		})
	}, [zoomMap])

	return (
		<div className='relative w-full mb-4 bg-white h-[16rem] rounded-3xl flex items-center justify-center overflow-hidden transition-all duration-300 dark:ring-2 dark:ring-neutral-800'>
			{isLoading
				? (
					<div className='absolute top-4 right-4'>					
						<RotatingLines
							strokeColor="grey"
							strokeWidth="4"
							animationDuration="1"
							width="30"
							visible={true}
						/> 
					</div>
				)
				: (
					<motion.div
						initial={{ opacity: 0, scale: 1.1 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 1.1 }}
						transition={{ duration: 0.8 }}
					>
						<Image src={mapStatic} alt='mapStatic' height={1000} width={1000} sizes="cover" />
					</motion.div>
				)}
			<button type='button' onClick={() => handleZoomIn()} className={`${zoomMap.zoom >= 14 && 'hidden'} rounded-full w-10 h-10 border border-neutral-400 flex items-center justify-center bg-white absolute bottom-4 right-4 z-[2] dark:bg-dark dark:text-white`}>
				<i className="bi bi-plus-lg"></i>
			</button>
			<button type='button' onClick={() => handleZoomOut()} className={`${zoomMap.zoom <= 6  && 'hidden'} rounded-full w-10 h-10 border border-neutral-400 flex items-center justify-center bg-white absolute bottom-4 left-4 z-[2] dark:bg-dark dark:text-white`}>
				<i className="bi bi-dash-lg"></i>
			</button>  
			<div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-24 h-24 flex items-center justify-center rounded-full bg-neutral-500/50 ring-2 ring-neutral-200 z-[2]'>
				<Image
					src='https://ik.imagekit.io/raq7uhmdb2/assets/avatartwo_OT6JL2A_WN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811211465'
					alt='myanimoji'
					width={60}
					height={60}
					sizes='cover'
				/>
			</div>
		</div>
	)
}