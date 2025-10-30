'use client'

import { NAV_ITEMS } from '@/lib/constants'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItems = () => {
    const pathname = usePathname()
    const isActive = (path: string) => {
        if (path === '/') return pathname === '/'
        return pathname.startsWith(path)
    }

  return (
    <ul className='nav-list'>
        {NAV_ITEMS.map(({href, label}) => (
            <li key={href}>
                <Link href={href} className={`hover:text-yellow-500 transition-colors ${
                    isActive(href) ? 'text-gray-100' : 'text-gray-400'
                }`}>
                    {label}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default NavItems