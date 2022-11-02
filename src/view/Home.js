import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import ListCards from "../containers/ListCards";
import {useInfoContext} from '../context/InfoContext'
import loading from '../imagen/loading.gif'
function Home() {
    
    const { items } = useInfoContext();   
    

    return (
        <>
        <Menu />
        
        {items.length === 0 ? 
        <img className="loading" src={loading} alt='loading'/> 
        : 
        (<>
        <Banner/>
        <ListCards items={items}/>
        </>)}
        </>
    );
}

export default Home;
