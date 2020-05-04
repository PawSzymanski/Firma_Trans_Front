import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonUI from "../Button/ButtonUI";




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            //margin: theme.spacing(2),
            width: '25ch',
            display:'flex',
            flexFlow:'column wrap',
            margin:'10px auto',

        },

        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },
}));

const RegisterFields=({sumbitFn })=> {
    const classes = useStyles();

    return (
        <>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={sumbitFn}>
            <TextField type="text" id="standard-basic" label="Imię" />
            <TextField type="text" id="standard-basic" label="Nazwisko"/>
            <TextField type="text" id="standard-basic" label="Login" />
            <TextField type="text" id="standard-basic" label="Hasło" />
            <TextField type="text" id="standard-basic" label="E-mail" />
            <TextField type="date" label="Data urodzenia" className={classes.textField}  InputLabelProps={{shrink: true,}} />
            <TextField type="text" id="standard-basic" label="Telefon" />
            <ButtonUI type="submit">Zatwierdź</ButtonUI>
        </form>
            </>
    );
}

export default RegisterFields;
