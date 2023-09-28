import Navbar from "@/components/Navbar";
import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";
import Cards from "@/components/Cards";
import React, { useState, useEffect } from 'react'
import usuarioService from "./services/UsuarioService";
import UsuarioService from "./services/UsuarioService";
import { useRouter } from "next/router";


export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/cadastros')
  const data = await res.json()

  return {
    props: {
      cadastros: data,
    }
  }
}

export default function homepage(props) {
  // const router = useRouter();
  // const [cadastro, setCadastro] = useState('')

  // useEffect(() => {
  //   if (router.isReady) {
  //     const cpf = router.query.cpf;
  //     var usuario = props.cadastros.filter(cadastro => cadastro.cpf == cpf)[0]
  //     setCadastro(usuario)
  //   }
  // }, [router.isReady])


  return (
    <div className="bg-main">
      <Navbar />
<<<<<<< HEAD
      <Cards />
      {/* <div className="flex flex-col h-screen bg-gradient-to-t from-blue-950 to-blue-600 text-white items-center justify-center">
        <h1 className="">Olá {cadastro.nome}, seja bem vinda ao Organiza!</h1>
        <h2>Saldo: R${cadastro.saldo},00</h2>
      </div> */}
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4 text-white">
        <BarChart />
        <RecentOrders />
=======
      <div className="flex flex-col h-screen bg-gradient-to-t from-blue-950 to-blue-600 text-white items-start justify-start font-mukta gap-14 mt-12 ml-12">
        <h1 className="text-5xl"> Olá {cadastro.nome}!</h1>
        <div>
          <h2 className="text-base font-medium">Saldo atual:</h2>
          <h3 className="text-6xl">R${cadastro.saldo},00</h3>
        </div>
        <BarChart
         ></BarChart>
         <div className="flex flex-col p-4">
            <div className="lg:col-span-2 col-span-1 bg-white flex w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-gray-600">Patrimônio</p>
                    <p className="text-2xl font-bold">$7,846</p>
                </div>
            </div>
        </div>
>>>>>>> 05ef54b9d84cfde54990d734700b730fe07795ab
      </div>
    </div>
  )
}