import React from 'react';
import { data } from '@/pages/api/data.js';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Ultimas Movimentações:</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg relative my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='rounded-lg p-3'>
              <FaShoppingBag />
            </div>
            <div className='pl-4'> 
              <p className='text-gray-800 font-bold'>{order.status}</p>
              <p className='text-gray-800 font-bold'>${order.total}</p>
              <p className='text-gray-400 text-sm'>{order.method}</p>
              <p className='text-gray-400 text-sm'>{order.name.first}</p>
            </div>

            <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;