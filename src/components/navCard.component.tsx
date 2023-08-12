"use client"
import React from 'react'
import { PropsWithChildren } from 'react'


export const NavBarCard = (props: PropsWithChildren) => {
    return (
        <div className='flex flex-col space-y-2 bg-slate-300 p-5 rounded-lg text-black w-fit justify-center items-center h-fit'>
            {props.children}
        </div>
    )
}
