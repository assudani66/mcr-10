import { itemType } from '@/libs/constants'
import React from 'react'

const InidividualPage = ({ product }: { product: itemType }) => {
    return (
        <div>
            <img className='w-60' src={product.imageUrl} />
            <p>{product?.name}</p>
            <p>{product?.description}</p>
            <p>${product?.price}</p>
            <p>{product?.stock}</p>
            <p>{product?.supplier}</p>
        </div>
    )
}

export default InidividualPage