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
                        <ListItemText
                            primary="First Name"
                            secondary={secondary ? 'George' : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Second Name"
                                    secondary={secondary ? 'Joseph' : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Email ID"
                                    secondary={secondary ? 'test@test.com' : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Age"
                                    secondary={secondary ? '22' : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Sex"
                                    secondary={secondary ? 'Male' : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="University"
                                    secondary={secondary ? 'USC' : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Major"
                                    secondary={secondary ? 'CS' : null}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                                    primary="Address"
                                    secondary={secondary ? '649 West' : null}
                        />
                    </ListItem>
                </List>
            </div>
            <Button variant="outlined" color="secondary" style={{margin:"auto",display:"flex"}} type="submit" >Confirm </Button>
            <Button variant="outlined" color="secondary" style={{margin:"auto",display:"flex",marginTop:'5px'}}>Back </Button>
            </form>
            
        </div>
    )
}

export default Confirm
