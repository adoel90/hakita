import React,{ Component } from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';
// import IconInfo from '../../../assets/images/Group_1097.png';


const GradientRedButton = styled.Button`

    width: 122.2px;
    height: 40px;
    border-radius: 5px;
    background-image: linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181);
    border: 1px solid white;
`;

const White = styled.span`
    color: white;
`;


const ButtonRegister = ({title, handleClick}) => (
    
    <GradientRedButton onClick={handleClick} block>
        <White>{title}</White>
    </GradientRedButton>
);


export default ButtonRegister;