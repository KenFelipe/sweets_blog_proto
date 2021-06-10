import Head from 'next/head'

import { Home } from '@/templates/Home/Home'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Next Plugin Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}

export default HomePage
