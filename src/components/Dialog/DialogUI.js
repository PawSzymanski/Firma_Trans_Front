import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import {toggleDialog} from "../../actions";

function DialogUI(props) {

    return (
        <div>
            <Dialog
                open={props.isDialogOpen}
                onClose={props.toggleDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Rezerwacja dokonana"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Rezerwacja została dodana do Twojego profilu. <br/>
                        Wszystkie rezerwacje możesz wyświetlić w zakładce "Rezerwacje"
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.toggleDialog} color="primary" autoFocus>
                        Zamknij
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapDispatchToProps=dispatch=>({
    toggleDialog:()=>dispatch(toggleDialog()),

});

const mapStateToProps = state=>({
    userLogin: state.userLogin,
    isDialogOpen: state.isDialogOpen,
})

export default connect(mapStateToProps,mapDispatchToProps)(DialogUI);