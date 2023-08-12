import { NavBarCard } from '@/components'
import { departmentNavBar } from '@/libs/constants'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <nav>
            {departmentNavBar.map(({ name, route }) => <NavBarCard key={route}>
                <Link href={route}>{name}</Link>
            </NavBarCard>
            )}
        </nav>
    )
}

export default page