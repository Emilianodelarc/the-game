import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import ListCards from "../containers/ListCards";
import {useInfoContext} from '../context/InfoContext'
import loading from '../imagen/loading.gif'
function Home() {
    console.log(useLocation())
    const { items } = useInfoContext();   
    

    return (
        <>
        <Menu />
        {items.length === 0 ? <img className="loading" src={loading} alt='loading'/> : <ListCards items={items}/>}
        </>
    );
}

export default Home;
