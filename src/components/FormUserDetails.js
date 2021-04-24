import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    input: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    }   
  }));

const FormUserDetails = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Enter User Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className='inputclass' style={{width:"40%",margin:'auto',display: "flex",flexDirection:"column",justifyContent: "center",alignItems: "center"}}>
            <TextField className="firstname" label="First Name" color="secondary" /><br/>
            <TextField className="secondname" label="Last Name" color="secondary" /><br/>
            <TextField className="email" label="Email ID" color="secondary" /><br/>
            </div>
            <Button variant="outlined" color="secondary" style={{margin:"auto",display:"flex"}}>Continue </Button>

        </div>
    )
}

export default FormUserDetails