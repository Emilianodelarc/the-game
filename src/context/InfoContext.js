import React, { useState, useEffect, useContext } from 'react';


export const InfoContext = React.createContext([]);

export const useInfoContext = () => useContext(InfoContext);

export function InfoProvider({ children }) {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('https://www.freetogame.com/api/games')
        .then(res=> res.json())
        .then(data => {
            
            setItems(data)

        })
        .catch(err =>console.error(err))
    },[])
    



    const rutas = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts']

    


    return (
      <InfoContext.Provider value={{items, rutas}}>
        {children}
      </InfoContext.Provider>
    );
  }