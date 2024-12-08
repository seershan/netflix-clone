import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Bell, Search } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled ? 'bg-black' : 'bg-transparent'} fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          width={100}
          height={32}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <Search className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <Bell className="h-6 w-6" />
        <Image
          src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
          alt="Account"
          width={32}
          height={32}
          className="cursor-pointer rounded"
        />
      </div>
    </header>
  )
}

