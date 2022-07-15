import React from 'react'

interface LayoutProps {
  children: any
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full h-screen text-white bg-custom-black">
      { children }
    </div>
  )
}

export default DefaultLayout