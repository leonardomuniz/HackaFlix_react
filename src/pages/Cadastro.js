import React, { useState } from 'react';

import api from '../services/api';
//import history from '../services/history';

export default function Cadastro() {
    const [nome, setNome] = useState(String);
    const [senha, setSenha] = useState(String);
    const [email, setEmail] = useState(String);
    const [empresa, setEmpresa] = useState(String);

    async function cadastrar() {
        try {
            await api.post('/perfis', {
                "nome": nome,
                "email": email,
                "nome_empresa": empresa,
                "senha": senha
            });

            console.log(`${nome}, ${senha}, ${email}, ${empresa}`);
        } catch (error){
            return console.log(error);
        }

    }


    return (
        <div>
            <h1 className="titulo titulo-formulario">Hacka<span>Flix</span></h1>

            <div className="formulario">
                <p className="titulo">Cadastro</p>
                <br />
                <input type="text" id="nome" name="nome" placeholder="Nome" onChange={(event) => setNome(event.target.value)} />
                <input type="email" id="email" name="email" placeholder="E-mail" onChange={(event) => setSenha(event.target.value)} />
                <input type="password" id="senha" name="senha" placeholder="Senha" onChange={(event) => setEmail(event.target.value)} />
                <input type="text" id="empresa" name="empresa" placeholder="Empresa" onChange={(event) => setEmpresa(event.target.value)} /><br />
                <button type="button" onClick={() => cadastrar()}>Cadastrar</button><br />
            </div>

        </div>
    );
};