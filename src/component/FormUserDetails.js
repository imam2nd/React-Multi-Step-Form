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
        const {value, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="This is User Details Form"/>
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelFixed="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={value.firstName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelFixed="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={value.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelFixed="Email"
                        onChange={handleChange('email')}
                        defaultValue={value.email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles = {
    button: {
        margin: 15
    }
}
export default FormUserDetails