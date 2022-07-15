import React from 'react'
import DefaultLayout from '../layouts/default'

const Home = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="font-bold text-xl">HELLO WORLD</h2>
      </div>
    </DefaultLayout>
  )
}

export default Home