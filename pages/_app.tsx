import React from 'react'
import { AppProps } from 'next/app'

import GlogalStyles from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
     <Component {...pageProps} />
     <GlogalStyles />
    </>
  )
}

export default MyApp
