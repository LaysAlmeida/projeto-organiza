import Image from "next/image"


const Home = () => {
  return (
    <div className="flex" id="screen">

      <Image src="/icon.png" width={400} height={0} />
      <div className="flex-row-reverse">
        <h1 className="relative -bottom-0">Organiza</h1>
      </div>

<<<<<<< HEAD
=======
        <form className="col">
          <h2>Entrar</h2>
          <div className="columns-3">
            <input></input>
            <input></input>
          </div>
          <button type="submit">Submit</button>
        </form>
>>>>>>> f136ed0b255551a3cea258032d928ed934903136

      <form>

      </form>

<<<<<<< HEAD
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


=======
>>>>>>> f136ed0b255551a3cea258032d928ed934903136
    </div>
  )
}

export default Home