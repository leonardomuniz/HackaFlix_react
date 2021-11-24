import React, { useEffect, useState } from 'react';
import "../styles/hackathon.css";

import NavBar from "../components/Navbar";
import api from "../services/api";

export default function Hackathon() {
    const [hackathons, setHackathons] = useState([]);
    const [participantes, setParticipantes] = useState([]);

    useEffect(() => {
        async function handleHackathon() {
            await api.get(`/hackaton/${localStorage.getItem('id_hacka')}`).then(async (res) => {
                setHackathons(res.data);
                setParticipantes(res.data.participantes);
            });
        };
        handleHackathon();
    }, []);
    
    async function participarHackathon(){
        try{
            await api.post(`/hackaton/participar/${localStorage.getItem('id_hacka')}`) 
            alert('você foi cadastrado com sucesso no evento')
        } catch (error) {
            return console.log(error)
        }
    }

    const listParticipantes = participantes.map((item, index) =>
        <div className="hackathon-perfis" key={index}>
            <div className="hackathon-pacote">
                <div className="perfil hackathon-confirmado"></div>
                <p className="nome_usuario">{item.nome}</p>
            </div>
            <div className="acionar">
               <button type="button" className="hackathon-confirmado">participando</button>
            </div>
        </div>
    );


    return (
        <div>
            <NavBar />

            <div className="hackathon-imagem" />

            <div className="hackathon-informacao">
                <div className="hackathon-embrulho">
                    <h3>{hackathons.nome}</h3>
                    <p>{hackathons.descricao}</p>
                    <button type="button" onClick={() =>participarHackathon()}>participar</button>
                </div>

            </div>

            <div className="hackathon-convidar">

                {listParticipantes}
            </div>
        </div>
    );
};