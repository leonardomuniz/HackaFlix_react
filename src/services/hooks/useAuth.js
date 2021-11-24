import { useState, useEffect } from "react";

import api from '../api';
import history from "../history";

export default function useAuth() {
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        try {
            const token = localStorage.getItem('token');

            if( token ) {
                api.defaults.headers.Authorization = `Token ${JSON.parse(token)}`;
                setAuthenticated(true);
            };
    
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }

    },[]);

    async function handleLogin(nome, senha){
        try {
            const { data: { token } } = await api.post('/login/', {"username": nome, "password": senha});

            localStorage.setItem('token', JSON.stringify(token));
            api.defaults.headers.Authorization = `token ${token}`;
            setAuthenticated(true);
            history.push('/home');

        } catch (error) {
            return console.log(error.message);
        }

    };


    function handleLogout(){
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        setAuthenticated(false);
        history.push('/');
    };

    return { authenticated, loading, handleLogin, handleLogout };
}