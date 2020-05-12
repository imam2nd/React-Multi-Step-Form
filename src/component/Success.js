import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"


class Success extends Component{
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="This is Confirm Form"/>
                    <h1>Thank You For Form Submission</h1>
                    <p>We Will Get Back To You ASAP</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success