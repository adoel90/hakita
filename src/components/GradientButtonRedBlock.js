import React,{ Component } from 'react';
import styled from 'styled-components';

const GradientRedButton = styled.button`

    width: 122.2px;
    height: 40px;
    border-radius: 5px;
    background-image: linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181);
    border: 1px solid white;
`;

const White = styled.span`
    color: white;
`;


const GradientButtonRedBlock = ({title, handleClick}) => (
    <GradientRedButton 
        type="button" 
        className="btn btn-secondary btn-block"
        onClick={handleClick}
    >
        <White>{title}</White>
    </GradientRedButton>
);


export default GradientButtonRedBlock;