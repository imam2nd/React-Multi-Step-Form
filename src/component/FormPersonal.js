import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

class FormPersonal extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {value, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="This is Personal Details Form"/>
                    <TextField
                        hintText="Enter Your City Name"
                        floatingLabelFixed="City Name"
                        onChange={handleChange('city')}
                        defaultValue={value.city}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Occupation"
                        floatingLabelFixed="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={value.occupation}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your BIO"
                        floatingLabelFixed="BIO"
                        onChange={handleChange('bio')}
                        defaultValue={value.bio}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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
export default FormPersonal