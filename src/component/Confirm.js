import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import {List,ListItem } from "material-ui/List"
import RaisedButton from "material-ui/RaisedButton"

class Confirm extends Component{
    continue = e => {
        e.preventDefault();
        // scope for send these data to backend
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {value: {firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="This is Confirm Form"/>
                   <List>
                       <ListItem
                           primaryText="First Name"
                           secondaryText={firstName}
                       />
                       <ListItem
                           primaryText="Last Name"
                           secondaryText={lastName}
                       />
                       <ListItem
                           primaryText="Email"
                           secondaryText={email}
                       />
                       <ListItem
                           primaryText="Occupation"
                           secondaryText={occupation}
                       />
                       <ListItem
                           primaryText="BIO"
                           secondaryText={bio}
                       />
                       <ListItem
                           primaryText="City"
                           secondaryText={city}
                       />
                   </List>
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
export default Confirm