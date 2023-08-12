import SideNavBar from '@/components/sideNavBar'
import { sideNavBar } from '@/libs/constants'
import React from 'react'

const SideNavBarLayout = () => {
    return (
        <SideNavBar nav={sideNavBar} />
    )
}

export default SideNavBarLayout