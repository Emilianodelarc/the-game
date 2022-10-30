import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useInfoContext} from '../context/InfoContext'
import loading from '../imagen/loading.gif'
import Item from './Item'
import Menu from './Menu'


function Detalle() {
    const {items} = useInfoContext()
    const [itemElegido, setItemElegido]= useState(null)
    let id = useParams()
    console.log(id);

    useEffect(() => {
       const detatilFetch =()=>{
        fetch(`https://www.freetogame.com/api/game?id=${id.id}`)
        .then(res=> res.json())
        .then(docu=>setItemElegido(docu))
       }

      detatilFetch()
     console.log(itemElegido);
    }, [id])
    



  return (
    <>
        <Menu/>
        { itemElegido ?  <Item dato={itemElegido}/> : <img className='loading' src={loading} alt='loading'/>}
    </>
  )
}

export default Detalle