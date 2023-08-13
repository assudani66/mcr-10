import ProductList from '@/components/ProductList.component'
import AddItemComponent from '@/components/addItem'
import ProductFilters from '@/components/productFilters'
import React from 'react'

const page = () => {
    return (
        <div >
            <ProductFilters />
            <ProductList />
        </div>
    )
}

export default page