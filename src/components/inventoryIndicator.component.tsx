import React from 'react'

export const InventoryIndicator = ({ number }: { number: number }) => {
    return (
        <p className={`text-lg ${number > 100 ? "text-green-600" : number > 10 ? "text-amber-300" : "text-red-600"}`}>
            {number}
        </p>
    )
}
