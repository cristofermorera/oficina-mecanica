import React from "react";
import  "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function register(){
    return (
        <div className="wrapper">
            <form action="" className="card text-bg-light mb-4">
                <div className="card-body">
                    <h2 className="card-title">Cadastro</h2>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Usuario" required/>
                    </div>
                    <div className="mb-2">
                        <input type="email" className="form-control" placeholder="Email" required/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Telefone" required/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Senha" required/>
                    </div>
                    <div className="mb-3">
                        <label>Já possui conta?</label>
                        <a href="/Login">Login</a>
                    </div>

                    <div className="mb-2">
                        <button type="submit" className="btn btn-success">CADASTRAR</button>
                    </div>
                </div>
                    
            </form>
        </div>
    );
}
export default register;