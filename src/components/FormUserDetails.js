import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import { useVariable } from '../context/UserForm';

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
    var {updateContinueState,updateBackState,updateUserValues,updatePersonalValues,state} = useVariable();
    var [val,setVal] = useState({fName:'',lName:'',email:''})
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
            <TextField label="First Name" color="secondary" onChange={(e) => {setVal({...val,fName:e.target.value})}}/><br/>
            <TextField label="Last Name" color="secondary" onChange={e => {setVal({...val,lName:e.target.value})}}/><br/>
            <TextField label="Email ID" color="secondary"onChange={e => {setVal({...val,email:e.target.value})}} /><br/>
            </div>
            <Button variant="outlined" color="secondary" style={{margin:"auto",display:"flex"}} onClick={() => {updateUserValues(val);updateContinueState();}}>Continue </Button>

        </div>
    )
}

export default FormUserDetails
