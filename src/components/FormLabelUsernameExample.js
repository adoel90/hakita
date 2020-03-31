import React,{Component} from 'react';
import { Form, InputGroup, } from 'react-bootstrap';

class FormLabelUsernameExample extends Component{
    
    render(){

        return(
            <div>
                <Form.Label>Username</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend >
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                </InputGroup>
            </div>
        )
    }
};

export default FormLabelUsernameExample;



