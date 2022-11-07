import Carousel from "framer-motion-carousel"
import Image from 'next/image'
import Avatar from '@/assets/avatartwo.png'


const imageList = [
	{
		src: 'https://ik.imagekit.io/raq7uhmdb2/assets/Gallery/PXL_20221029_005303521_FPBG0uZla_rkYaZlk2l.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667788156268'
	},
	{
		src: 'https://ik.imagekit.io/raq7uhmdb2/assets/Gallery/PXL_20211217_111457828_EJd4ZpAvH_bpskvPndm.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667788154944'
	}
]

export default function GalleryCard() {
	return (
		<div className='break-inside-avoid mb-4 relative w-full h-[23rem] xl:h-[23rem] rounded-3xl bg-white flex flex-col items-center justify-center dark:bg-dark dark:ring-2 dark:ring-neutral-800 overflow-hidden'>
			<Carousel 
				autoPlay={true}
				interval={8000}
				loop={true} 
				renderArrowLeft={() => null} 
				renderArrowRight={() => null} 
				renderDots={() => null}
			>
				{imageList?.map((elem: any, i: number) => (
					<div key={i} className='w-full h-full relative overflow-hidden flex items-center justify-center'>
						<Image 
							src={elem.src} 
							alt='pict' 
							quality={85}
							fill
							objectFit="contain"
							priority 
						/>
					</div>
				))}
			</Carousel>
			<div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 gap-2 flex items-center bg-white rounded-full px-4 py-2 text-darker font-semibold text-xs md:text-sm dark:bg-darker dark:text-white">
				<i class="bi bi-images"></i>
			</div>
		</div>
	)
}