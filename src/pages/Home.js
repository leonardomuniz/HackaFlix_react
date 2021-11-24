import React, { useEffect, useState } from "react";
import "../styles/home.css";

import NavBar from "../components/Navbar";
import api from "../services/api";
import history from "../services/history";

export default function Home() {
    const [hackathons, setHackathons] = useState([]);
    const hackathon = hackathons[Math.floor(Math.random() * hackathons.length)];


    useEffect(() => {
        async function handleHackathon() {
            await api.get('/hackatons').then(async (res) =>  setHackathons(res.data));
        };
        handleHackathon();
    }, []);

    const listHackathons = hackathons.map((item, index) =>
        
        <div className="home-art-hacka" key={index}>
            <p>{item.nome}</p>
            <p>{item.descricao}</p>
        </div>
    );

    function moveToHackathon(){
        localStorage.setItem('id_hacka',  hackathon.id);
        history.push("/home/hackathon");
    };

    return (
        <div>
            <NavBar />

            <div className="home-embrulho">
                <div className="home-conteudo">
                    {hackathon ? (<>
                        <h3>{hackathon.nome}</h3>
                        <p>{hackathon.descricao}</p>
                        <button type="button" onClick={moveToHackathon}>Entrar</button>
                    </>) : <p>A resposta é 44</p>
                    }
                </div>
                <br />
            </div>

            <br/>
            <div className="home-container">
                {listHackathons}
            </div>

        </div>

    );
};
