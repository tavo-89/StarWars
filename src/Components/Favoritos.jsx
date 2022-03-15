import React from 'react';
import Favoriteitem from './FavoriteItem';




const Favoritos = ({favorite, handleDelete}) => {

    
    return (
        <div>
            <h2>Mis Favoritos</h2>

            {favorite.map((item, i) => <Favoriteitem key={i} data={item} /* handleDelete={handleDelete} *//>)}
        </div>
    );
}

export default Favoritos;
