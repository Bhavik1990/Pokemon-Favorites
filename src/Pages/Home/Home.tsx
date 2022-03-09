import React, {useEffect, useState} from 'react';
import "./Home.css";
import {GetPokemon} from "../../APIHelper";

interface pokItem {
    name: string;
    url: string;
}

function Home() {
    const [pokemon, setPokemon] = useState([]);
    const [favPokemon, setFavPokemon] = useState([] as any);

    useEffect(()=>{
        GetPokemon().then(data=> {
            if(data.status === 200){
                setPokemon(data.data.results);
                localStorage.setItem('list-pokemon', JSON.stringify(data.data.results.map((item:any) => item.name )));
            }
        });
    }, []);

    useEffect(()=> {
        localStorage.setItem('count', favPokemon.length);
    }, [favPokemon]);

    const handleFavClick = (item:pokItem) => {
        const data = [...favPokemon];
        if(!data.includes(item.name)){
            data.push(item.name);
        }else{
            data.splice(data.indexOf(item.name), 1);
        }
        setFavPokemon(data);
        localStorage.setItem("favorite", JSON.stringify(data));
        console.log("fav", data);
    };

    return (
        <>
            <div className="favorite-box">
                {localStorage.getItem('count')} Favorite Pokemon
            </div>
            { pokemon && pokemon.length > 0 &&
              pokemon.map((item:pokItem, index:number) => {
                  const {name, url} = item;
                  return(
                      <div className="mt-10 favorite" key={index}>
                          <div style={{ padding: '10px' }}>{item && item.name}</div>
                          <div className="left-section">
                              <div className="count">{localStorage.getItem('count')}</div>
                              <button className={favPokemon.includes(name) ? "dark-button" : "light-button" } onClick={() => handleFavClick(item)}>Favorite</button>
                          </div>
                      </div>
                  )
              })
            }
        </>
    );
}

export default Home;
