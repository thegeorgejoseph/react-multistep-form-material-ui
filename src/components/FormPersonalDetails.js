import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
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
    }   
  }));
const FormPersonalDetails = () => {
    const classes = useStyles();
    const {updateContinueState,updateBackState,updateUserValues,updatePersonalValues,state} = useVariable();
    var [val,setVal] = useState({age:'',sex:'',university:'',major:'',address:''})
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Enter Personal Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className='inputclass' style={{width:"40%",margin:'auto',display: "flex",flexDirection:"column",justifyContent: "center",alignItems: "center"}}>
            <TextField label="Age" color="secondary" onChange={(e) => {setVal({...val,age:e.target.value})}}/><br/>
            <TextField label="Sex" color="secondary" onChange={(e) => {setVal({...val,sex:e.target.value})}}/><br/>
            <TextField label="University" color="secondary" onChange={(e) => {setVal({...val,university:e.target.value})}}/><br/>
            <TextField label="Major" color="secondary" onChange={(e) => {setVal({...val,major:e.target.value})}}/><br/>
            <TextField label="Address" color="secondary" onChange={(e) => {setVal({...val,address:e.target.value})}}/><br/>
            </div>
            <Button variant="outlined" color="secondary" style={{margin:"auto",display:"flex"}} onClick={()=> {updatePersonalValues(val);updateContinueState();}}>Continue </Button>
            <Button variant="outlined" color="secondary" style={{margin:"auto",display:"flex",marginTop:'5px'}} onClick={updateBackState}>Back </Button>
        </div>
    )
}

export default FormPersonalDetails
