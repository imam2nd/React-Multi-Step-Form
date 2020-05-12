import React, {Component} from "react";
import FormUserDetails from "./FormUserDetails"
import FormPersonal from "./FormPersonal"
import Confirm from "./Confirm"
import Success from "./Success"
export class UserForm extends Component{
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    // function for next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }

    // function for prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step-1
        });
    }

    // handle input function
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, bio, city} = this.state;
        const values = {firstName, lastName, email, occupation, bio, city};

        switch (step) {
            case 1: return(
                <FormUserDetails
                    nextStep ={this.nextStep}
                    handleChange = {this.handleChange}
                    value = {values}
                />
            )
            case 2:
                return (
                    <FormPersonal
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        value={values}
                    />
                )
            case 4:
                return (
                    <Success/>
                )

        }
    }
}

export default UserForm