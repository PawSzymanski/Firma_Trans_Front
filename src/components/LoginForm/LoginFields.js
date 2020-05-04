import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonUI from "../Button/ButtonUI";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            //margin: theme.spacing(2),
            width: '30ch',
            display:'flex',
            flexFlow:'column wrap',
            margin:'20px auto',

        },

        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },
}));

const LoginFields=({sumbitFn})=> {
    const classes = useStyles();

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={sumbitFn}>

                <TextField type="text" id="standard-basic" label="Login" />
                <TextField type="text" id="standard-basic" label="Hasło" />
                <ButtonUI type="submit">Zatwierdź</ButtonUI>
            </form>
        </>
    );
}

export default LoginFields;
