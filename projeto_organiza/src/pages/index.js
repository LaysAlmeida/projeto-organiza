import Image from "next/image"


const Home = () => {
  return (
    <div className="flex bg-blue-800" id="screen">
      
      <Image src="/icon.png" width={400} height={400} />
        <div>
          <h1 className="relative -bottom-0">Organiza</h1>
        </div>


        <form className="">
          <h2 >Entrar</h2>
          <div className="columns-3">
            <input></input>
            <input></input>
          </div>
          <button type="submit">Submit</button>
        </form>


    </div>
  )
}

export default Home