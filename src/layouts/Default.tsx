import React from 'react'
import NavBar from '../components/NavBar'

interface DefaultLayoutProps {
  children: any
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-5 text-white bg-custom-black">
      <div className="font-poppins flex flex-col items-center justify-start w-full max-w-5xl h-full space-y-5">
        <NavBar />
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout