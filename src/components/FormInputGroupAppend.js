import React,{Component} from 'react';
import { Form, InputGroup, } from 'react-bootstrap';

class FormInputGroupAppend extends Component{
    
    render(){

        return(
            <div>
                <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <InputGroup.Append >
                            <InputGroup.Text id="inputGroupAppend">
                                <span  onClick={this.showHideConfirmPass} style={{fontSize:'14px'}} toggle="#password-field" className={this.state.type_confirm === 'input' ? 'fa fa-eye-slash field-icon' : 'fa fa-eye field-icon'}></span>
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
            </div>
        )
    }
};

export default FormInputGroupAppend;



