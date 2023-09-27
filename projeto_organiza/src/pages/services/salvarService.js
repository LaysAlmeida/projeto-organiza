import axios from "axios";

const EMPREGADOS_API_BASE_URL = "http://localhost:3000/api/cadastros";

class SalvarService{
    createUsuario(usuario){
        return axios.post(EMPREGADOS_API_BASE_URL, usuario);
    }
}

export default new SalvarService()