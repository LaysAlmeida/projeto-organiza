//import { useRouter } from "next/router"
import Navbar from "../components/Navbar";

//export const getStaticProps = async () => {
  //  const { query } = useRouter();
    //const res = await fetch('http://localhost:3000/api/cadastros?cpf='+query.cpf)
    //const data = await res.json()
  
      //return {
       // props: {
        //  cadastros: data,
       // }
      //}
  //}

const homepage = props => {
    return (
        <div>
            <Navbar />
        </div>
    )
}
export default homepage