import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RootHead from '@/components/Layouts/RootHead'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Article from "@/components/Storyblok/Article";
import { ThemeProvider } from 'next-themes'

const components = {
  article: Article
};
 
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components
});

export default function App({ Component, pageProps, session }: AppProps) {
  return (
      <ThemeProvider attribute="class">
          <RootHead>
            <Component {...pageProps} />
          </RootHead>
      </ThemeProvider>
  )
}
