
import { useRouter } from "next/router"

export const getStaticProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/cadastros?cpf='+context.params.cpf)
    const data = await res.json()
  
      return {
        props: {
          cadastros: data,
        }
      }
  }

const homepage = props =>{


    return(
        <div>
            homepage
        </div>
    )
}
export default homepage