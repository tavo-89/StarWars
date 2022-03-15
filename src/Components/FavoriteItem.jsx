import React from "react";

const Favoriteitem = ({ favorite, handleDelete }) => {
    return (
        <div>
        <h4>{favorite.name}</h4>
        <h5>{favorite.url}</h5>
        <button onClick={() => handleDelete(favorite.id)}>Eliminar Uno</button>
        <br />
        <button onClick={() => handleDelete(favorite.id, true)}>Eliminar Todos</button>
        </div>
    );
};

export default Favoriteitem;
