import React from 'react';
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


const Form = (props) => {

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <form>
                <Textfield style={{marginBottom: "10px"}} fullWidth label="Type Movie Name"
                    onChange={props.handleInputChange}
                    value={props.value} 
                    name="search"
                    type="text"
                    id="search"/>
                
                <Button type="submit" variant="contained" style={{padding: '10px'}} onClick={props.handleInputSubmit } >Search</Button>
            </form>
        </Paper>
    )

}

export default Form


