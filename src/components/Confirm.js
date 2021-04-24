import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useVariable} from '../context/UserForm'

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
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        flexDirection:'column',
        margin:'auto',
        width:'40%',
      }   
  }));
const Confirm = () => {
    const classes = useStyles();
    const secondary = true;
    const {updateContinueState,updateBackState,updateUserValues,updatePersonalValues,state} = useVariable();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Confirm
                    </Typography>
                </Toolbar>
            </AppBar>
            <form >
            <div className={classes.demo}>
                <List>
                    <ListItem >
                    {console.log(state.values.fName)}
                        <ListItemText
                            primary="First Name"
                            secondary={secondary ? state.values.fName : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Second Name"
                                    secondary={secondary ? state.values.lName : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Email ID"
                                    secondary={secondary ? state.values.email : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Age"
                                    secondary={secondary ? state.values.age : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Sex"
                                    secondary={secondary ? state.values.sex : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="University"
                                    secondary={secondary ? state.values.university : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Major"
                                    secondary={secondary ? state.values.major : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Address"
                                    secondary={secondary ? state.values.address : null}
                        />
                    </ListItem>
                </List>
            </div>
            <Button variant="outlined" color="secondary" style={{margin:"auto",display:"flex"}} type="submit" onClick={updateContinueState}>Confirm </Button>
            <Button variant="outlined" color="secondary" style={{margin:"auto",display:"flex",marginTop:'5px'}} onClick={updateBackState}>Back </Button>
            </form>
            
        </div>
    )
}

export default Confirm
