import React,{ Component } from 'react';
import styled from 'styled-components';
// import IconInfo from '../../../assets/images/Group_1097.png';


const ColorGreyButton = styled.button`

    width: 80.2px;
    height: 32px;
    border-radius: 5px;
    background-color: #e8e8e8;
    border: 1px solid white;
    cursor: pointer;
`;

const White = styled.span`
    color: #707070;
    font-weight: bold;
`;


const ButtonColorGrey = ({title, handleClick}) => (

  <ColorGreyButton onClick={handleClick}>
      <White>{title}</White>
</ColorGreyButton>
   
);


export default ButtonColorGrey;