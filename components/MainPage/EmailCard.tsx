import emailjs from '@emailjs/browser'
import { useState } from 'react'

type formFormat = {
	from_name: any,
	to_name: any,
	message: string | any,
	reply_to: string | any
}

export default function EmailCard() {

	const [sendInput, setSendInput] = useState<formFormat>({
		from_name: '',
		to_name: '',
		message: '',
		reply_to: ''
	})

	const handleChange = (e: any) => {
		setSendInput({
			...sendInput,
			[e.target.name]: e.target.value
		})
	}


	const handleSubmit = async(e: any) => {
		e.preventDefault()
		await emailjs.send(
			process.env.NEXT_PUBLIC_SERVICE_ID,
			process.env.NEXT_PUBLIC_TEMPLATE_ID,
			sendInput,
			process.env.NEXT_PUBLIC_PUBLIC_KEY
		)
		.then((response: any) => {
			setSendInput({
				from_name: '',
				to_name: '',
				message: '',
				reply_to: ''
			})
			console.log('SUCCESS!');
		})
		.catch((err: any) => {
			console.log('FAILED...');
			alert('Failed to send email, try again later :)')
		});

	}

	return (
		<div className='relative w-full order-last lg:order-none rounded-3xl bg-white dark:bg-dark border border-neutral-200 dark:border-neutral-600 dark:border-none flex flex-col gap-2 p-8 dark:ring-2 dark:ring-neutral-800'>
			<h1 className="font-[700] font-DMserif text-2xl dark:text-white">
				Have an idea or project to talk about?
			</h1>
			<p className="text-neutral-500 dark:text-neutral-200 font-medium">
				Let me know about it down below or if you just want to talk about some general topics you can directly hit me on my social media.
			</p>
			<form onSubmit={handleSubmit} className='flex flex-col items-start gap-2'>	
				<input 
					type="email"
					name='from_name'
					onChange={handleChange}
					value={sendInput.from_name} 
					className="mt-4 w-full p-4 h-12 outline-none bg-transparent border-b border-neutral-300 dark:border-neutral-600 dark:text-white" 
					placeholder="youremail@domain.com" 
				/>
				<textarea
					name='message'
					onChange={handleChange}
					value={sendInput.message} 
					className=" w-full mt-4 p-4 h-32 outline-none bg-transparent border-b border-neutral-300 dark:border-neutral-600 dark:text-white" 
					placeholder="message" 
				/>
					<button type="submit" className='px-4 py-2 mt-4 rounded-full border border-neutral-200 font-semibold dark:border-none dark:bg-darker dark:text-white'>Submit</button>
			</form>
		</div>
	)
}