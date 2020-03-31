import React,{ Component } from 'react';
import styled from 'styled-components';
// import IconInfo from '../../../assets/images/Group_1097.png';


const GradientRedButton = styled.button`

    width: 122.2px;
    height: 40px;
    border-radius: 5px;
    background-image: linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181);
    border: 1px solid white;
    font-family: 'Nunito';
`;

const White = styled.span`
    color: white;
`;


const Button = ({title, handleClick}) => (

  <GradientRedButton onClick={handleClick}>
      <White>{title}</White>
</GradientRedButton>
   
);


export default Button;