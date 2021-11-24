import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/perfil.css";

import { Context } from "../services/AuthContext";

import api from '../services/api';

export default function Perfil() {
    const [perfil, setPerfil] = useState([]);
    const { handleLogout } = useContext(Context);

    useEffect(() => {

        async function handlePage() {
            await api.get(`/perfil`).then(async (res) => setPerfil(res.data));
        };
        handlePage();
    }, []);

    return (
        <>
            <div>
                <Link to="/home"><p className="titulo">Hacka<span>Flix</span></p></Link>
            </div>
            <div className="perfil-container">
                <div className="perfil-usuario">
                    <div className="perfil-logo" />
                    <h1 className="perfil-titulo">{perfil.nome}</h1>
                    <p className="perfil-email">{perfil.email}</p>
                    <button type="button" onClick={() =>handleLogout()}>Sair</button>
                </div>

                <div className="perfil-conteudo">
                    <h1 className="perfil-subtitulo">Participando</h1>
                    <div className="participando">
                        <div className="perfil-pacote">
                            <div className="perfil-item">
                                <p className="perfil-subtitulo">Hackathon Stefanini</p>
                            </div>
                            <div className="perfil-item">
                                <p className="perfil-subtitulo">Hackathon Stefanini</p>
                            </div>
                            <div className="perfil-item">
                                <p className="perfil-subtitulo">Hackathon Stefanini</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};