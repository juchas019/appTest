import React,{Fragment} from  'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Button from "@material-ui/core/es/Button/Button";
import Typography from "@material-ui/core/es/Typography/Typography";
// import { Link } from 'react-router-dom';

function Nav() {
return (
    <Fragment>
    <AppBar>
        <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
        </IconButton>
        <Typography variant="title" color="inherit">
            News
        </Typography>
            {/*<li><Link to="/">Home</Link></li>*/}
            <Button color="inherit">List</Button>
        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
    </Fragment>
)}

export default Nav;