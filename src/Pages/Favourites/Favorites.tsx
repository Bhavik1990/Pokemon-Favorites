import React, {useEffect, useState} from 'react';
import "./Favorite.css";

function Favorites() {
    const [favorite, setFavorite] = useState([] as any);
    const [pokemons, setPokemons] = useState([] as any);

    useEffect(()=>{
        const data = localStorage.getItem('favorite');
        const list = localStorage.getItem('list-pokemon');
        if(data){
            setFavorite(JSON.parse(data));
        }
        if(list){
            setPokemons(JSON.parse(list));
        }
    }, []);

    return (
        <div>
            { pokemons && pokemons.length > 0 &&
            pokemons.map((item:any, index:number) => {
                return(
                    <div className={favorite.includes(item) ? " favorite-dark": "favorite-light"} key={index}>
                        <div style={{ padding: '10px' }}>{item}</div>
                        <div className="left-section">
                            <div className="count">{localStorage.getItem('count')}</div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}

export default Favorites;
