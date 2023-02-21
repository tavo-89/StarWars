import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import useDebounce from "../Hooks/useDebounce";
import { useFetch } from "../Hooks/useFetch";
import { useFetchPage } from "../Hooks/useFetchPage";
import ButtonPage from "./ButtonPage";
import CardPeople from "./CardPeople";
import Loader from "./Loader";
import Message from "./Message";

const Search = () => {
    const [text, setText] = useState("");

    const deb = useDebounce(text);
    const url = `https://swapi.dev/api/people/?search=${deb}`;
    const { data, loading, error } = useFetch(url);
    
    /* seteo el endpoint en la pagina 1 */
    const [page, setPage] = useState(1);
    /* hago el fetch */
    const urlPage = `https://swapi.dev/api/people/?page=${page}`
    const { dato } = useFetchPage(urlPage);
    

    const handleChange = (e) => {
        setText(e.target.value);
    };

    if (loading) {
        return <Loader/>;
    }

    if (error) {
        return (
        <Message
            msg={`ERROR${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
        />
        );
    }

    return (
        <div>
        <input type="text" name="" value={text} onChange={handleChange} />

        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch">
            {data ? 
                data.results.map((e, i) => <CardPeople dato={e} key={i}/>)
            : 
                <h1>Sin Resultados</h1>
            }
        </Grid>

        <ButtonPage setPage={setPage} data={dato} page={page} />
        </div>
    );
};

export default Search;
