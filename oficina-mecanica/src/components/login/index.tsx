import React, { ChangeEvent, useContext, useState } from "react";
import  "../assets/login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from "../../contexts/auth/authContext";
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/home');
            } else {
                alert("Não deu certo.");
            }
        }
    }

    return (
        <div className="wrapper">
            <form action="" className="card text-bg-light mb-4">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="usuario" value={email} onChange={handleEmailInput} required/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Senha" value={password} onChange={handlePasswordInput} required/>
                    </div>

                    <div className="">
                        <label><input type="checkbox" placeholder="usuario" required/></label>
                        <a href="#">Lembrar Senha</a>
                    </div>
                    <div className="mb-3">
                        <label>Não possui conta?</label>
                        <a href="/register">Inscreva-se</a>
                    </div>
                    <div className="mb-2">
                        <button type="submit" onClick={handleLogin} className="btn btn-success">ENTRAR</button>
                    </div>
                </div>
                    
            </form>
        </div>
    );
}
export default Login;