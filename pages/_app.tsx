import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RootHead from '@/components/Layouts/RootHead'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class">
          <RootHead>
            <Component {...pageProps} />
            <Analytics />
          </RootHead>
      </ThemeProvider>
  )
}
