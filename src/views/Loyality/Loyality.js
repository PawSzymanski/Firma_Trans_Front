import React, { Component } from 'react';
import {connect} from "react-redux";

class Loyality extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div >
                <p>System lojalnościowy</p>
            </div>
        );
    }
}

const mapDispatchToProps=dispatch=>({

});

const mapStateToProps = state=>({

})


export default connect(mapStateToProps,mapDispatchToProps)(Loyality);

