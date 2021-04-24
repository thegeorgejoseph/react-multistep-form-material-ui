import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


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

const Success = () => {
    const classes = useStyles();
    return (
        <div>
             <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Success
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{display:'flex',border:'2px',width:'60%',margin:'auto',textAlign:'center',justifyContent:'center'}}>
                <h1>Your response has been accepted. Thank you. </h1>
            </div>
        </div>
    )
}

export default Success
