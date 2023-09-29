import Navbar from "@/components/Navbar";
import HChart from "@/components/HChart";
import RecentOrders from "@/components/RecentOrders";
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
  const router = useRouter();
  const [cadastro, setCadastro] = useState('')

  useEffect(() => {
    if (router.isReady) {
      const cpf = router.query.cpf;
      var usuario = props.cadastros.filter(cadastro => cadastro.cpf == cpf)[0]
      setCadastro(usuario)
    }
  }, [router.isReady])


  return (
    <div className="bg-main">
      <Navbar />
      <div className="flex flex-col p-4 gap-4 text-white">
        <div className="lg:col-span-2 col-span-1">
          <div className="flex flex-col w-full pb-4 font-mukta">
            <p className="text-3xl font-mukta"> Olá {cadastro.nome}!</p>
            <p className="text-xl font-mukta mt-4">Saldo atual: </p>
            <p className="text-3xl font-mukta">R${cadastro.saldo},00</p>
          </div>
          <div className="flex flex-row w-full p-4">
            <HChart />
          </div>
          <RecentOrders />
        </div>
      </div>
    </div>
  )
}