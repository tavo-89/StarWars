import React, {useState} from "react";
import { AppBar, Container, makeStyles, Toolbar, Hidden, IconButton, Divider, Drawer } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Logo from '../Images/Star_Wars_Logo.png'



const useStyles = makeStyles((theme)=> ({
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        color: '#dba90d',
        padding: 10,
    },
    burgerIcon : {
        color: '#dba90d'
    },
    search: {
        color:'#dba90d',
        marginLeft: 15,
        padding: 8,
        outline:'none',
        borderRadius: 20,
        borderColor: '#dba90d',
        backgroundColor:'#0000'
    },
    paper: {
        backgroundColor: '#000'
    },
    flecha: {
        color:'#dba90d'
    },
    menuBarra: {
        display: 'flex',
        justifyContent: 'center',    
    }
}))

const Header = () => {

    const [open, setOpen] = useState(false);

    const classes = useStyles()

    return (
        <div className="cabecera">
            <AppBar  position="sticky">
                <Link to="/"> <img className="logo" src={Logo} alt="Logo Star Wars" /> </Link>
                
                <Container className={`${classes.menuBarra} appBar`} maxWidth='lg'>

                    <Toolbar disableGutters>

                        <Hidden smDown>
                            <Link rel="float-shadow" className="button float-shadow" to="/">Home</Link>
                            <Link rel="float-shadow" className="button float-shadow" to="/planets">Planets </Link>
                            <Link rel="float-shadow" className="button float-shadow" to='/people'>People</Link>

                            <Link rel="float-shadow" className="button float-shadow" to='/species'>Species</Link>
                            <Link rel="float-shadow" className="button float-shadow" to='/vehicles'>Vehicles</Link>
                            <Link rel="float-shadow" className="button float-shadow" to='/starships'>Starships</Link>
                            
                        </Hidden>

                        <Hidden mdUp>
                            <IconButton className={classes.burgerIcon}>
                                <MenuIcon onClick={()=> setOpen(true)}/>
                            </IconButton>
                        </Hidden>

                    </Toolbar>

                </Container >

                <Drawer classes={{paper:classes.paper}} open={open} onOpen={()=>setOpen(true)} onClose={()=> setOpen(false)}>
                    
                    <IconButton>
                        <ChevronLeft className={classes.flecha} onClick={()=>setOpen(false)} onKeyPress={()=>setOpen(false)} role='button' />
                    </IconButton>

                    <Divider/>

                        <Link rel="float-shadow" className="button float-shadow" to="/">Home</Link>
                        <Link rel="float-shadow" className="button float-shadow" to="/planets">Planets </Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/people'>People</Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/species'>Species</Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/vehicles'>Vehicles</Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/starships'>Starships</Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/favoritos'>Favoritos</Link>
                
                </Drawer>

            </AppBar>
        </div>
    );
};

export default Header;
