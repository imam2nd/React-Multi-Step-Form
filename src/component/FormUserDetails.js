import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

class FormUserDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {value} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="This is User Details Form"/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails