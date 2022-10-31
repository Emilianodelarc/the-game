import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useInfoContext} from '../context/InfoContext'
import loading from '../imagen/loading.gif'
import Item from './Item'
import Menu from './Menu'


function Detalle() {
    
    const [itemElegido, setItemElegido]= useState(null)
    let id = useParams()
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '91ec1535b4msh741d09130615402p149daajsnd8d41dc50963',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    useEffect(() => {
       const detatilFetch =()=>{
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id.id}`,options)
        .then(res=> res.json())
        .then(docu=>setItemElegido(docu))
       }

      detatilFetch()
     console.log(itemElegido);
    }, [id])
    



  return (
    <>
        <Menu/>
        <div>

        { itemElegido ?  <Item dato={itemElegido}/> : <img className='loading' src={loading} alt='loading'/>}
        </div>
    </>
  )
}

export default Detalle