import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiAddCircleLine, RiArrowGoBackLine, RiLinkM } from 'react-icons/ri'

const NavBar = () => {

  const { pathname } = useLocation()

  return (
    <div className="flex flex-row items-center justify-between w-full p-5 rounded-xl bg-custom-black-secondary">
      <div className="inline-flex space-x-2 font-bold text-lg">
        <span>Contzx</span>
        <span className="font-light text-neutral-400">
          {pathname === '/' && ''}
          {pathname === '/new' && '| New Contact'}
          {pathname === '/edit/[id]' && '| Edit Contact'}
        </span>
      </div>
      {pathname === '/' && (
        <Link
          to="/new"
          className="outline-none transition ease-in-out duration-200 transform hover:scale-95"
        >
          <RiAddCircleLine className="w-8 h-8" />
        </Link>
      )}
      {pathname !== '/' && (
        <Link
          to="/"
          className="outline-none transition ease-in-out duration-200 transform hover:scale-95"
        >
          <RiArrowGoBackLine className="w-8 h-8" />
        </Link>
      )}
    </div>
  )
}

export default NavBar