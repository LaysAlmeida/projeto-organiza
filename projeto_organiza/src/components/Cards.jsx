import React from "react";

const Cards = () => {

    return (
        <div className="flex flex-col p-4">
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">$5,000</p>
                    <p className="text-gray-600">Saldo</p>
                </div>
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">$7,846</p>
                    <p className="text-gray-600">Daily Revenue</p>
                </div>
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">$7,846</p>
                    <p className="text-gray-600">Daily Revenue</p>
                </div>
            </div>
        </div>
    )
}

export default Cards