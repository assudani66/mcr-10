"use client"
import { itemType } from '@/libs/constants'
import { useDataContext } from '@/store/data'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddItemComponent = () => {
    const { data, addItem } = useDataContext()
    const router = useRouter()
    const dummyData = {
        department: "",
        name: "",
        description:
            "",
        price: 0,
        stock: 0,
        sku: "",
        supplier: "",
        delivered: 0,
        imageUrl: "",
    }

    const [formValue, setFormValue] = useState<{ [key: string]: string | number }>(dummyData)

    const handleChange = (e: any) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newId = (data?.length || 0) + 1;
        const formData: itemType = { ...dummyData, id: newId, ...formValue };
        setFormValue(dummyData);
        addItem(formData);
        router.push("/products")
    };

    return (

        <form className='flex flex-col space-y-2 p-5 rounded-lg bg-white'>
            <p className='text-2xl font-bold'>Add Component</p>
            {
                Object.keys(dummyData).map((name: string) => <div key={name} className='flex flex-col'>
                    <p>{name}</p>
                    <input className='border w-fit' onChange={(e) => handleChange(e)} value={formValue[name]} name={name} />
                </div>
                )
            }
            <button className="bg-blue-600 text-white text-bold p-2 w-fit h-fit px-4" onClick={(e) => handleSubmit(e)}>
                Submit
            </button>
        </form >
    )
}

export default AddItemComponent