import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../services/AuthContext";

export default function Login() {
    const [ nome, setNome ] = useState('');
    const [ senha, setSenha ] = useState('');
    const { handleLogin } = useContext(Context);

    return (
        <div>
            <h1 className="titulo titulo-formulario">Hacka<span>Flix</span></h1>

            <div className="formulario">
                <h1>Login</h1>
                <input type="text" id="nome" name="nome" placeholder="Nome ou Email" onChange={(event) => setNome(event.target.value)} />
                <input type="password" id="senha" name="senha" placeholder="Senha" onChange={(event) => setSenha(event.target.value)}/><br />
                <button type="button" onClick={() =>handleLogin(nome, senha)}>Entrar</button>

                <p>Ainda não tem conta ?!<br /><Link to="/cadastro">Clique Aqui!</Link></p>
            </div>
            
        </div>
    );
};
