import '../styles/globals.css'
// import '../styles/timer.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className='w-full h-screen' />
}
