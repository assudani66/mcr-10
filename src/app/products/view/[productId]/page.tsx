"use client"
import InidividualPage from '@/components/individualPage'
import { itemType } from '@/libs/constants'
import { useDataContext } from '@/store/data'

import React from 'react'

const Page = ({ params }: { params: { productId: string } }) => {
    const { data } = useDataContext()
    const productDetails = data?.find(({ id }) => id.toString() === params.productId)
    return (
        <InidividualPage product={productDetails || {} as itemType} />
    )
}

export default Page