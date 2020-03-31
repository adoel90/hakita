import React, { Component, useEffect, useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';
import IconSliderPacketMahkota from '../assets/images/Group_1745.png';

export const PrettoSlider = withStyles({

    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
      
        '& .thumbIconWrapper': {

            // backgroundColor: '#fff',
            backgroundColor: 'transparent',

        },
    },

    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
      background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',

      
    },
    rail: {
        // color: '#19ce96',
      background: 'grey',
      height: 8,
      borderRadius: 4,
    },

  })(Slider);

  export function AirbnbThumbComponent(props) {

    return (
      <span {...props}>
         <img
            alt="slider thumb icon"
            src={IconSliderPacketMahkota}
            // className={classes.thumbIconMahkota}
            className="thumbIconMahkota"
            width="24px"
            height="24px"
        />
      </span>
    );
  }