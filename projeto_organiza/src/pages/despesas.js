import React from "react";
import BarChart from '@/components/BarChart'
import Navbar from "@/components/Navbar";
import Cards from "@/components/Cards";
import RecentOrders from "@/components/RecentOrders";

const despesas = () => {
    return (
        <div className="bg-main">
            <Navbar />
            <Cards />
            <div className="p-4 flex flex-col gap-4 text-white">
                <BarChart />
                <RecentOrders />
            </div>
        </div>
    )
}

export default despesas