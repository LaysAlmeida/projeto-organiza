import { useRouter } from "next/router"

export const getStaticProps = async () => {
    const { query } = useRouter();
    const res = await fetch('http://localhost:3000/api/cadastros?cpf='+query.cpf)
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
            {props.cadastros.nome}
        </div>
    )
}
export default homepage