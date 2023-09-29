import React from 'react'

const Cards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$10,846</p>
                <p className='text-gray-600'>Entrada</p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>5,800</p>
                <p className='text-gray-600'>Saída</p>
            </div>
        </div>
        <div className='flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>11,437</p>
                <p className='text-gray-600'>Customers</p>
            </div>
        </div>
    </div>
  )
}

export default Cards