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
      <div className="grid md:grid-cols-2 gap-4 p-4 items-start justify-center text-white font-mukta  mt-12 ml-12">
        <h1 className="text-5xl"> Olá {cadastro.nome}!</h1>
        <h2 className="text-base font-medium"></h2>
        <HChart />
        <h3 className="text-5xl">Saldo atual: R${cadastro.saldo},00</h3>
        <RecentOrders />
      </div>
    </div>
  )
}