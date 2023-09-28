//import { useRouter } from "next/router"
import Navbar from "../components/Navbar";
import React, {useState, useEffect} from 'react'
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
      var usuario = props.cadastros.filter(cadastro => cadastro.cpf==cpf)[0]
      setCadastro(usuario)
    }
  }, [router.isReady])

  

    return (
        <div >
          <Navbar/>
          <div className="h-screen bg-blue-800 text-white items-center justify-center">
            <h1>Olá {cadastro.nome}, seja bem vinda ao Organiza!</h1>
            <h2>Saldo: R${cadastro.saldo},00</h2>
          </div>
        </div>
    )
}