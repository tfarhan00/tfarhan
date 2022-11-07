import BaseLayout from "@/components/Layouts/BaseLayout";
import { useEffect } from "react";
import Image from 'next/image'
import SbLogo from '@/assets/sb-logo-full-color.svg'
import SbLogoWhite from '@/assets/sb-logo-full-color-white.svg'
import { useTheme } from 'next-themes'
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react"

export default function Blog() {

  	const { theme, setTheme } = useTheme()

	return (
		<BaseLayout title="Blog">	
			<div className='w-full h-[100vh] bg-cream dark:bg-darker dark:text-white flex items-center justify-center'>
	       <div className='flex flex-col items-center gap-4'>	
         		<h1 className='text-5xl font-semibold font-DMserif text-center'>Currently On Building</h1>
         		<div className='flex items-center gap-2 font-semibold'>
         			<p>Powered by</p>
         			{theme === 'light'
         				? <Image src={SbLogo} alt='sblogo' height={100} width={100} />
         				: <Image src={SbLogoWhite} alt='sblogo' height={100} width={100} />
         			}
         		</div>
	       </div>
			</div>
		</BaseLayout>
	)
}
