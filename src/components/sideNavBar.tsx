import React from 'react'
import { sideNavBar } from '@/libs/constants'
import Link from 'next/link'
const SideNavBar = ({ nav }: { nav: typeof sideNavBar }) => {
    return (
        <nav className='flex flex-col space-y-10 bg-slate-900 w-60 h-screen p-10'>
            {
                nav.map(({ name, route }) => (
                    <Link href={route} key={route} className='text-white' >
                        {name}
                    </Link>
                ))
            }

        </nav>
    )
}

export default SideNavBar