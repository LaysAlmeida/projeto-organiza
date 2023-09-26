
import React, {useState} from 'react'


const cadastropage = () =>{
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [date, setDate] = useState('')
    const [senha2, setSenha2] = useState('')

    const saveCadastro = (e) => {
        e.preventDefault();
        if(senha==senha2 && email==email2){
            const usuario = {cpf,senha,nome,email,date}

            EmpregadoService.createEmpregados(empregado).then((response) =>{

                console.log(response.data)
    
                history('/');
    
            }).catch(error => {
                console.log(error)
            })
        } 
        
    }


    return(
        <section class="bg-blue-800 dark:bg-gray-900 h-screen">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 md:flex-row">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white dark:text-gray-50">
                <img class="w-10 h-30 mr-2" src="/icon.png" alt="logo"/>
            </a>
            <div class="w-full bg-blue-800 rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-950 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                        Crie uma conta
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <input type="string" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome completo" required=""/>
                        </div>
                        <div>
                            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required=""/>
                        </div>
                        <div>
                            <input type="email" name="email2" id="email2" value={email2} onChange={(e) => setEmail2(e.target.value)} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirme seu e-mail" required=""/>
                        </div>
                        <div className="flex justify-between space-x-2">
                            <input type="date" name="data" id="data" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            <input type="cpf" name="cpf" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div className="flex justify-between space-x-2">
                            <input type="password" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            <input type="password" name="senha2" id="senha2" value={senha2} onChange={(e) => setSenha2(e.target.value)} placeholder="Confirme sua senha" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" onClick={(e) => saveCadastro(e)} class=" w-full md:w-2/3 text-white bg-primary-600 ring-2 ring-white hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Próximo</button>
                        </div>
                    </form>
                    <div className="flex justify-center">
                         <h1 className="w-full bg-red-600 text-white rounded-lg text-center sm:w-1/2 md:w-1/2"></h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default cadastropage