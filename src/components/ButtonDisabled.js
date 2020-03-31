import React,{ Component } from 'react';
import styled from 'styled-components';
// import IconInfo from '../../../assets/images/Group_1097.png';


const ColorDisabledButton = styled.button`

    width: 122.2px;
    height: 40px;
    border-radius: 5px;
    // background-image: linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181);
    background-color: grey;
    border: 1px solid white;
`;

const White = styled.span`
    color: white;
`;


const ButtonDisabled = ({title, handleClick}) => (

  <ColorDisabledButton onClick={handleClick}>
      <White>{title}</White>
</ColorDisabledButton>
   
);


export default ButtonDisabled;