import React, {  useState} from 'react'
import { useHistory } from "react-router-dom";
import api from '../../service/api';



import "../cadastroUsuarios/style.css";


export const AppForm = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  async function novoUsuario(e) {
    e.preventDefault();
    const data = {name, email, password};
    try {
    const response = await api.post('cadastro', data);
    alert('Usuário cadastrado com sucesso.',response.data.name)
    history.push("/");
    
   
    } catch (err) {
      alert('Erro no cadastro, tente novamente.')
    }
   
  }

  
    return (
        <div className="register-container">
        <div className="content">
         
         <h1> Cadastro de usuários</h1>
          <form onSubmit ={novoUsuario}>

            <input 
              type="text" 
              placeholder="Usuário"  
              value={name}
            onChange={e => setName(e.target.value)}
              
              />       
            <input  
             type="email" 
             placeholder="E-mail" 
             value={email}
            onChange={e => setEmail(e.target.value)}
             
             />     
            <input   
            type="password" 
            placeholder="senha" 
            value={password}
            onChange={e => setpassword(e.target.value)}
               />      
         
            
       
            <button className="button" type="submit" >
              Cadastrar
  
            </button>
          </form>
        </div>
      </div>
    )
}
