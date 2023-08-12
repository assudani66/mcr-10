import React from 'react'

export default function Page({ params }: { params: { department: string } }) {
    return <div>{params.department}</div>
}