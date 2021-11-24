import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router";

import { Context } from "./services/AuthContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Cadastro from "./pages/Cadastro";
import Hackathon from "./pages/Hackathon";



function CustomRoute({ isPrivate, ...rest}){
    const { loading, authenticated } = useContext(Context);

    if(loading){
        return <h1>Loading . . .</h1>
    };


    if(isPrivate && !authenticated) {
        return <Redirect to="/" />
    };

    return <Route { ... rest }/>
};



export default function Routes() {
    return (
        <Switch>
            <CustomRoute path="/" exact component={Login} />
            <CustomRoute isPrivate path="/home" exact component={Home} />
            <CustomRoute isPrivate path="/home/hackathon" component={Hackathon} />
            <CustomRoute isPrivate path="/home/perfil" component={Perfil} />
            <CustomRoute isPrivate path="/cadastro" component={Cadastro} />
        </Switch>
    )
}