import React from 'react'
import Head from 'next/head'

import Dashboard from './Dashboard';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Off-Let</title>
      </Head>

      <Dashboard />
    </>
  )
}

export default Home
