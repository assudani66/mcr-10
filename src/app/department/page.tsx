import { NavBarCard } from '@/components'
import { departmentNavBar } from '@/libs/constants'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <nav className='flex p-10 space-x-5'>
            {departmentNavBar.map(({ name, route }) => <NavBarCard key={route}>
                <Link href={route}>{name}</Link>
            </NavBarCard>
            )}
        </nav>
    )
}

export default page