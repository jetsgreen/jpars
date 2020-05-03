import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';


class Form extends Component {
    state={
        userInput:''
    }

    handleInputChange = event => {
        this.setState({userInput: event.target.value})
        
    }

    handleSubmit = (event) => {
       event.preventDefault()
       const {userInput} = this.state;
       const {onFormSubmit} = this.props;
       console.log(this.state.userInput)
       
       onFormSubmit(userInput);
    }

  

    render() {
        return (
           <Paper elevation={6} style={{padding: '25px'}}>
             <form onSubmit={this.handleSubmit}>
                 <Textfield fullWidth label="Type Movie Name"
                 onChange={this.handleInputChange}/>
             </form>
           </Paper>
        )
    }
}

export default Form
