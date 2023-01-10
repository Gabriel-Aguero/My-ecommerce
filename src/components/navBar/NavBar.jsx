import { CartWidget } from "../cartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom"
import HiveIcon from '@mui/icons-material/Hive';
import { AppBar, Toolbar, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const NavBar = () => {
  return (
          <AppBar position="sticky">
            <Toolbar>
             
              <Grid 
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"                
              >
                <Grid item>                  
                    <Typography>
                      <Link to="/"><HiveIcon color="#000"/></Link>
                    </Typography>                  
                </Grid>
                <Grid item xs={2} md={6}>
                  <Stack spacing={2} direction="row" align="center">
                    <Link className="navbar-item" to="/">Productos</Link>
                    <Link className="navbar-item" to="/categoria/clasico">Clasico</Link>
                    <Link className="navbar-item" to="/categoria/adventure">Adventure</Link>
                    <Link className="navbar-item" to="/categoria/master">Master</Link>  
                    <Link className="navbar-item" to="/Contacto">Contacto</Link>                         
                  </Stack>
                </Grid>
                <Grid item>
                   
                </Grid>
                <Grid item>
                   <CartWidget />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
    




    //    <div className= "navbar-container">
    //     <Link className="navbar-item" to="/">
    //     <div className="container-logo">
    //         <HiveIcon />
    //     </div>
    //     </Link>
    //     <ul className="navbar">
    //         <Link className="navbar-item" to="/">Productos</Link>
    //         <Link className="navbar-item" to="/categoria/clasico">Clasico</Link>
    //         <Link className="navbar-item" to="/categoria/adventure">Adventure</Link>
    //         <Link className="navbar-item" to="/categoria/master">Master</Link>
    //         <Link className="navbar-item" to="/Contacto">Contacto</Link>
    //     </ul>
    //     <CartWidget />
    //  </div> 
  )  
};

export default NavBar;