import React, {useState} from "react";
import { AppBar, Container, makeStyles, Toolbar, Hidden, IconButton, SwipeableDrawer, Divider, List, ListItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Logo from '../Images/Star_Wars_Logo.png'

const useStyles = makeStyles((theme)=> ({
    burgerIcon : {
        color: '#dba90d'
    }
}))

const Header = () => {

    const [open, setOpen] = useState(false);

    const classes = useStyles()

    return (
        <div>
            <AppBar  position="sticky">
                <Link to="/"> <img className="logo" src={Logo} alt="Logo Star Wars" /> </Link>
                
                <Container className='appBar' maxWidth='lg'>
                    <Toolbar disableGutters>
                        <Hidden smDown>
                            <Link rel="float-shadow" className="button float-shadow" to="/">Home</Link>
                            <Link rel="float-shadow" className="button float-shadow" to="/planets">Planets </Link>
                            <Link rel="float-shadow" className="button float-shadow" to='/people'>People</Link>
                            <Link rel="float-shadow" className="button float-shadow" to='/species'>Species</Link>
                            <Link rel="float-shadow" className="button float-shadow" to='/vehicles'>Vehicles</Link>
                            <Link rel="float-shadow" className="button float-shadow" to='/starships'>Starships</Link>
                            <Link rel="float-shadow" className="button float-shadow" to='/favoritos'>Favoritos</Link>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton className={classes.burgerIcon}>
                                <MenuIcon onClick={()=> setOpen(true)}/>
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </Container>
                <SwipeableDrawer anchor="left" open={open} onOpen={()=>setOpen(true)} onClose={()=> setOpen(false)}>
                    <IconButton>
                        <ChevronLeft onClick={()=>setOpen(false)} onKeyPress={()=>setOpen(false)} role='button' />
                    </IconButton>
                    <Divider/>
                        <Link rel="float-shadow" className="button float-shadow" to="/">Home</Link>
                        <Link rel="float-shadow" className="button float-shadow" to="/planets">Planets </Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/people'>People</Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/species'>Species</Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/vehicles'>Vehicles</Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/starships'>Starships</Link>
                        <Link rel="float-shadow" className="button float-shadow" to='/favoritos'>Favoritos</Link>
                </SwipeableDrawer>
            </AppBar>
        </div>
    );
};

export default Header;
