"use client"
import { useDataContext } from '@/store/data'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    const { filterState, data } = useDataContext()

    const categorisedState = filterState.activeCategory === "All" ? data : data?.filter(({ department }) => department === filterState.activeCategory)

    const lowQuantityState = !filterState.lowStockItems ? categorisedState : categorisedState?.filter(({ stock }) => stock < 10)

    const sortedState = filterState.activeSort !== "name" ? lowQuantityState?.sort((a, b) => b[filterState.activeSort] - a[filterState.activeSort]) : lowQuantityState?.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    return (
        <table className='w-full'>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Supplier</th>
            </tr>
            {
                sortedState?.map(
                    (product) => <tr key={product?.id}>
                        <td>
                            <img className='w-40' src={product.imageUrl} />
                        </td>
                        <td>
                            <Link href={`product/${product?.id}`}>{product?.name}</Link>
                        </td>
                        <td>
                            <p>{product?.description}</p>
                        </td>
                        <td>
                            <p>${product?.price}</p>
                        </td>
                        <td>
                            <p>{product?.stock}</p>
                        </td>
                        <td>
                            <p>{product?.supplier}</p>
                        </td>
                    </tr>
                )
            }
        </table>

    )
}

export default ProductList