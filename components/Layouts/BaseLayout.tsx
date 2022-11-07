import Head from 'next/head'
import Navbar from '../Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavbarMobile from '../NavbarMobile'

interface Props {
	title: string
	children: JSX.Element
}

export default function BaseLayout({title, children}: Props) {
	return (
		<div>
		<Head>
			<title>{title}</title>
        	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<div className='bg-cream dark:bg-darker'>	
			<Navbar />
			{children}
		</div>
		</div>
	)
}