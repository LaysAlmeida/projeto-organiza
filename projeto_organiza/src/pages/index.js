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
                <input type="text" id="cpf" name="cpf"></input>
                <label for="cpf">CPF</label>

          </div>
        </form>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-size: 200%;
          font-weight: 50%;
          line-height: 1.8;
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
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