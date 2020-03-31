import React,{ Component } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import IconArrowRight from '../assets/images/Group_1222.png';

const ButtonWew = styled.button`

  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;


`;

const ButtonDashboard = styled.button`
    
    border-radius: 22px;
    background-image: linear-gradient(2deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181);
    margin: 0 1em;
    padding: 0.25em 1em;
    border: 1px solid palevioletred;
`;

const White = styled.span`
    color: white;
`;

const Img = styled.img`

    margin-left: 14px;
`;

class ButtonRadius extends Component {

    render(){

        return (
            
            <ButtonDashboard type="button"><White> Dashboard <Img src={IconArrowRight} /></White></ButtonDashboard>

        )
    };
};

export default ButtonRadius;

