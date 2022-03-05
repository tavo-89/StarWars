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
            <AppBar position="sticky">
                <Link to="/"> <img className="logo" src={Logo} alt="Logo Star Wars" /> </Link>
                
                <Container maxWidth='lg'>
                    <Toolbar disableGutters>
                        <Hidden smDown>
                            <Link className='link' to="/">Home</Link>
                            <Link className='link' to="/planets">Planets </Link>
                            <Link className="link" to='/people'>People</Link>
                            <Link className="link" to='/species'>Species</Link>
                            <Link className="link" to='/vehicles'>Vehicles</Link>
                            <Link className="link" to='/starships'>Starships</Link>
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
                        <ChevronLeft onCLick={()=>setOpen(false)}/>
                    </IconButton>
                    <Divider/>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/planets">Planets </Link>
                        <Link className="link" to='/people'>People</Link>
                        <Link className="link" to='/species'>Species</Link>
                        <Link className="link" to='/vehicles'>Vehicles</Link>
                        <Link className="link" to='/starships'>Starships</Link>
                </SwipeableDrawer>
            </AppBar>
        </div>
    );
};

export default Header;
