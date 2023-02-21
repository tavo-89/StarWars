import React from "react";
import { IconButton } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const ButtonPage = ({ page, data, setPage }) => {

     /* para hacer la paginación ingreso a la cantidad total de elementos del endpoint */
    /* y lo redondeo a un nuemero de 10 en 10 (cada pagina devuelve 10 elementos) */
    const totalCount = Math.ceil(data.count / 10) * 10

    //manejo el button del paguinado
    //si previus y el numero de pag es menor o igual a cero corto
    //si el next y el numero de pag es mayor o igual al total de elementos corto
    //sino seteo la pagina  
    const handlePage = (number)=>{

        if (!data.previous && page + number <= 0) return;
        if (!data.next && page + number >= totalCount) return;

        setPage(page + number);

    }

    return (
        <nav className="pagSection">
        <IconButton
            onClick={() => handlePage(-1)}
            disabled={!data.previous}
            style={{ color: "yellow" }}
        >
            {" "}
            <ChevronLeftIcon className="Icon" />{" "}
        </IconButton>
        <span className="numberPage">{page}</span>
        <IconButton
            onClick={() => handlePage(+1)}
            disabled={!data.next}
            style={{ color: "yellow" }}
        >
            {" "}
            <ChevronRightIcon className="Icon" />{" "}
        </IconButton>
        </nav>
    );
};

export default ButtonPage;
