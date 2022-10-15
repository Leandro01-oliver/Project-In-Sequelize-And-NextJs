import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContextProvider } from '../shared/context/GlobalContext'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </GlobalContextProvider>
    </>
  )
}

export default MyApp
