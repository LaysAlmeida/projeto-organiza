import Image from "next/image"


const Home = () => {
  return (
    <div className="flex" id="screen">

      <Image src="/icon.png" width={400} height={400} />
      <div className="flex-row-reverse">
        <h1 className="relative -bottom-0">Organiza</h1>
      </div>


      <form className="col">
        <div className="form-itens">
          <h2>Entrar</h2>
          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf"></input>
          <label for="psw">Senha</label>
          <input type="text" id="psw" name="senha"></input>
          <p>Abrir conta</p>
          <input type="submit" value={"Entrar"}></input>
        </div>
      </form>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        h1 {
        }
        p {
        }

        #screen{
          background-color:#004E92;
          height:100vh;
          width:100vw;
        }
      `}</style>
    </div>
  )

}

export default Home