import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/home.css";


import api from '../services/api';

export default function NavBar() {
    const [perfil, setPerfil] = useState([]);
    
    useEffect(() => {

        async function handlePage() {
            await api.get(`/perfil`).then(async (res) => setPerfil(res.data));
        };
        handlePage();
    }, []);
    
    return (
        <div className="home-navbar">

            <Link to="/home"><p className="titulo">Hacka<span>Flix</span></p></Link>

            <div className="home-usuario">
                <Link to="/home/perfil">
                    <div className="perfil"></div>
                </Link>
                <p className="nome_usuario">{perfil.nome}</p>
            </div>

        </div>

    );
}

