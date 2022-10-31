import React from "react";
import Menu from "../components/Menu";
import ListCards from "../containers/ListCards";
import {useInfoContext} from '../context/InfoContext'
import loading from '../imagen/loading.gif'
function Home() {
    
    const { items } = useInfoContext();   
    

    return (
        <>
        <Menu />
        {items.length === 0 ? <img className="loading" src={loading} alt='loading'/> : <ListCards items={items}/>}
        </>
    );
}

export default Home;
