import Head from 'next/head'

interface Props {
	children: JSX.Element
}

export default function RootHead({children}: Props): JSX.Element {
	return (
		<div>
			<Head>
	        	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	        	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			{children}
		</div>
	)
}