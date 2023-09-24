
const cadastros = [
    {
      nome: 'João Silva',
      senha: '1234',
      cpf:'00000000000',
      saldo: 5000,
      email:'example@com',
      entradas: [{valor:5600,data:'20/10/2022'}],
      saidas: [{categoria:'farmácia',valor:500,data:'22/10/2022'},{categoria:'shopping',valor:100,data:'22/10/2022'}],
    },
    {
      nome: 'Maria Santos',
      senha: '5321',
      cpf:'00000000002',
      saldo: 400,
      email:'example2@com',
      entradas: [{valor:1000,data:'20/10/2022'}],
      saidas: [{categoria:'farmácia',valor:500,data:'22/10/2022'},{categoria:'shopping',valor:100,data:'22/10/2022'}],
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(cadastros);
  }