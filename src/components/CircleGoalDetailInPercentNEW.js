
/*

    ```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
    COMPONENT INI DI BUAT UNTUK GOAL DETAIL NEW, kalau untuk component   <CircleGoalDetailInPercent /> di pakai sementara hanya untuk MA DETAIL

    ```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
*/


import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { green, grey, lightGreen, red, yellow } from "@material-ui/core/colors";

import { easeQuadInOut } from "d3-ease";
import moment from 'moment';

import AnimatedProgressProvider from './AnimatedProgressProvider';
import TruncateSubstring from '../utilities/TruncateSubstring';


import "react-circular-progressbar/dist/styles.css";

const numeral = require('numeral');

const CircleGoalDetailInPercentNEW = props => {

    const { classes, goalDetailState  } = props;

    if(goalDetailState.id !== null){

        return (
    
            <Fragment>

                {/* 
                    ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                    # SCENARIO-01
                    - INI SCENARIO KALAU "OVERALL_ACHIEVEMENT" KURANG DARI dari 85% ==> merah
                        
                    ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                */}

                {

                    goalDetailState.calculatedValue.resultOriented.overall_result_achievement * 100 >= 0 &&
                    goalDetailState.calculatedValue.resultOriented.overall_result_achievement * 100 < 85 && (

                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={numeral(goalDetailState.calculatedValue.resultOriented.overall_result_achievement).format('0.00')}
                            duration={3}
                            easingFunction={ easeQuadInOut }
                            // repeat
                        >
                            {value => {

                                // const roundedValue = Math.round(value);//*Math.round() ==> "used to round a number to its nearest integer"
                            
                                return (
                                    <CircularProgressbar
                                        value={value * 100}
                                        text={`${ numeral(value * 100).format('0.00') }%`}

                                        /* This is important to include, because if you're fully managing theanimation yourself, you'll want to disable the CSS animation. */
                                        styles = {
                                
                                            buildStyles({
                                                
                                                // pathTransitionDuration: 0.5,
                                                // pathColor: '#2ef062', //*GREEN 
                                                pathColor: red[800],
                                                // trailColor: 'transparent',//*Ini di pake kalau ada element parent : "CircularProgressbarWithChildren"
                                                textColor: 'white',
                                                // strokeLinecap: 'butt',   
                                                pathTransition: "none"                                 
                                                
                                                
                                            })                                                                     
                                        }
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>                        
                      )
                }

                {/* 

                    ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                    # SCENARIO-02
                    - INI SCENARIO KALAU "OVERALL_ACHIEVEMENT " >= 85% 

                    - INI SCENARIO KALAU "OVERALL_ACHIEVEMENT" < 100% 
                    
                         ==> YELLOWuntuk trail "OVERALL_ACHIEVEMENT"-nya

                         ==> RED untuk "POSISI AMAN/ EXPECTED_VALUE_ACHIEVEMENT"
                        
                    ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                */}

                {
                    goalDetailState.calculatedValue.resultOriented.overall_result_achievement * 100 >= 85 && 
                      
                      goalDetailState.calculatedValue.resultOriented.overall_result_achievement * 100 < 99.5 && (

                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={numeral(TruncateSubstring(goalDetailState.calculatedValue.resultOriented.overall_result_achievement)).format('0.00')}
                            duration={3}
                            easingFunction={ easeQuadInOut }
                            // repeat
                        >
                            { value => {

                                return (
                                  
                                    <CircularProgressbar
                                        value={value * 100}                                        
                                        text={`${numeral(TruncateSubstring(value * 100)).format('0.00')}%`}                                        
                                        styles = {
                                
                                            buildStyles({                                            
                                                pathColor: yellow[400], 
                                                trailColor: 'grey',//*Ini di pake kalau ada element parent : "CircularProgressbarWithChildren"
                                                textColor: 'white',
                                                // strokeLinecap: 'butt',   
                                                pathTransition: "none"                                                                                 
                                            })                                                                     
                                        }
                                    />
                                  
                                );
                            }}
                        </AnimatedProgressProvider>
                    )
                }

                {/* 
                    `````````````````````````````````````````````````````````
                    # SCENARIO-03
                    - INI SCENARIO KALAU "OVERALL_ACHIEVEMENT " > 100% 
                    - INI SCENARIO KALAU "OVERALL_ACHIEVEMENT " < 200% 
                
                         ==> GREEN TUA untuk trail "OVERALL_ACHIEVEMENT"-nya

                         ==> GREEN untuk 100

                    ```````````````````````````````````````````````````````````
                */}

                {   
                    goalDetailState.calculatedValue.resultOriented.overall_result_achievement * 100 !== 200 &&                                      
                    goalDetailState.calculatedValue.resultOriented.overall_result_achievement * 100 >= 99.5 && 
                    goalDetailState.calculatedValue.resultOriented.overall_result_achievement * 100 <= 200 &&

                    (

                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={numeral(goalDetailState.calculatedValue.resultOriented.overall_result_achievement).format('0.00')}
                            duration={3}
                            easingFunction={ easeQuadInOut }
                            // repeat
                        >
                            { value => {

                                return (

                                    <CircularProgressbarWithChildren
                                        value = { 100 }
                                        // value={numeral(value * 100).format('0.00')}
                                        styles= {

                                            buildStyles({
                                                // pathColor: red[800], 
                                                // strokeLinecap: 'butt'//*Untuk supaya trail progress TEGAK
                                                pathColor:  green[500],                                                
                                                trailColor: 'grey',//* Kalau di list goal pakai *#eee
                                            })
                                        }
                                    >
                                        <CircularProgressbar
                                            value={numeral(value * 100).format('0.00') - 100}
                                            // value={100}
                                            text={`${numeral(value * 100).format('0.00')}%`}
                                            styles = {
                                    
                                                buildStyles({                                                    
                                                    // pathColor:  yellow[400],
                                                    // strokeLinecap: 'butt',//*Untuk supaya trail progress TEGAK   
                                                    pathColor:  green[800],
                                                    trailColor: 'transparent',//*Ini di pake kalau ada element parent : "CircularProgressbarWithChildren"
                                                    textColor: 'white',
                                                    pathTransition: "none"                                                                                 
                                                })                                                                     
                                            }
                                        />
                                    </CircularProgressbarWithChildren>
                                  
                                );
                            }}
                        </AnimatedProgressProvider>
                    )
                }

                {/* 
                    ```````````````````````````````````````````````````````````
                    # SCENARIO-04
                    - INI SCENARIO KALAU "OVERALL_ACHIEVEMENT " > 200
                
                         ==> GREEN TUA untuk trail "OVERALL_ACHIEVEMENT"-nya

                    ```````````````````````````````````````````````````````````
                */}

                {
                    goalDetailState.calculatedValue.resultOriented.overall_result_achievement * 100 >= 200 && (

                        <AnimatedProgressProvider
                            valueStart={0}
                            // valueEnd={(numeral(goalDetailState.calculatedValue.overall_achievement).format('0.00')) }
                            valueEnd={ goalDetailState.calculatedValue.resultOriented.overall_result_achievement}
                            duration={3}
                            easingFunction={easeQuadInOut}
                            // repeat
                        >
                            {value => {

                                // const roundedValue = Math.round(value);

                                return (
                                    
                                    <CircularProgressbar
                                        value={value * 100}
                                        // text={value * 100}
                                        text={`${numeral(value * 100).format('0.00')}%`}//*Khusus yang ini ga pake numeral-an
                                        // counterClockwise={true}
                                        styles = {
                                
                                            buildStyles({
                                                                                            
                                                pathColor: green[800], //lightGreen['A400'],
                                                textColor: 'white',
                                                trailColor: 'grey',//* Kalau di list goal pakai *#eee
                                                pathTransition: "none",                                                                               
                                                // trailColor: 'transparent',//*Ini di pake kalau ada element parent : "CircularProgressbarWithChildren"
                                                // strokeLinecap: 'butt',  
                                                textSize: '14px',
                                            })                                                                     
                                        }
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    )

                }

                {/* 
                    ```````````````````````````````````````````````````````````
                    # SCENARIO-05
                    - INI SCENARIO KALAU "OVERALL_ACHIEVEMENT " < 0
                
                         ==> MERAH untuk trail "OVERALL_ACHIEVEMENT"-nya

                         ==> counterClockwise === true 

                         ==> Value "overall_achievement"-nya bernilai MINUS

                    ```````````````````````````````````````````````````````````
                */}

                {
                    goalDetailState.calculatedValue.resultOriented.overall_result_achievement < 0 && 
                    (                        

                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={(numeral(goalDetailState.calculatedValue.resultOriented.overall_result_achievement).format('0.00') - (numeral(goalDetailState.calculatedValue.resultOriented.overall_result_achievement).format('0.00') * 2)) }

                            duration={3}
                            easingFunction={easeQuadInOut}
                            // repeat
                        >
                            {value => {

                                // console.log("Value-2 : ", numeral(goalDetailState.calculatedValue.expected_value_achievement).format('0.00'))
                                // const roundedValue = Math.round(value);

                                return (
                                    <CircularProgressbar
                                        value={value * 100}
                                        text={`${numeral(goalDetailState.calculatedValue.resultOriented.overall_result_achievement * 100).format('0.00')  }%`}
                                        counterClockwise={true}
                                        styles = {
                                
                                            buildStyles({
                                                                                            
                                                // trailColor: 'transparent',//*Ini di pake kalau ada element parent : "CircularProgressbarWithChildren"
                                                pathColor: red[800], 
                                                textColor: 'white',
                                                pathTransition: "none",
                                                // strokeLinecap: 'butt',   
                                                // textSize: '11px'
                                            })                                                                     
                                        }
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    )
                }


            </Fragment>
        );

    } else {

        return (
            <Grid container alignItems='center' justify='center'>
                <CircularProgress size={20} styles={{color: 'red'}} />
            </Grid>
        )
    }

};

export default CircleGoalDetailInPercentNEW;
