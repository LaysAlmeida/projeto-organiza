import React, { useState } from 'react'
import Router from "next/router"

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/api/cadastros')
    const data = await res.json()

    return {
        props: {
            cadastros: data,
        }
    }
}


const Home = props => {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [alerta, setAlerta] = useState('')

    const getUser = (e) => {
        e.preventDefault();
        if (cpf.length != 11 || senha == '') {
            setAlerta("CPF e/ou senha inválidos")
        } else {
            var usuario = props.cadastros.filter(cadastro => cadastro.cpf == cpf)[0]
            if (usuario != null && usuario.senha == senha) {
                console.log(true)
                Router.push('/homepage?cpf=' + cpf)
            } else {
                setAlerta("CPF e/ou senha inválidos")
            }
        }
    }

    return (
        <section class="bg-main h-screen">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white dark:text-gray-50">
                    <img class="w-5 h-15 mr-2" src="/icon.png" alt="logo" />
                    Organiza
                </a>
                <div class="w-full bg-blue-800 rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                            Login
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <input type="cpf" name="cpf" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CPF" required="" />
                            </div>
                            <div>
                                <input type="password" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>

                            <button type="submit" onClick={(e) => getUser(e)} class=" w-full text-white bg-primary-600 ring-2 ring-white hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                <a href="/cadastropage" class="font-medium text-white hover:underline dark:text-blue-500">Abrir conta</a>
                            </p>
                        </form>
                        <div className="flex justify-center">
                            <h1 className="w-full bg-red-600 text-white rounded-lg text-center sm:w-1/2 md:w-1/2">{alerta}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Home