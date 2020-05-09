import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {toggleVisible} from "../../actions";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    btn:{
        backgroundColor:'#19615b',
        color:'snow',
        border:'1px solid snow',

        '&:hover': {
            color:'#19615b',
            border:'2px solid #19615b',

        },
}

}));

function ActionBtn(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab className={classes.btn} onClick={props.toggleVisible} aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    );
}

const mapDispatchToProps=dispatch=>({
    toggleVisible:()=>dispatch( toggleVisible()),

});


export default connect(null,mapDispatchToProps)(ActionBtn);

