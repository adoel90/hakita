import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';


import moment from 'moment';

import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const numeral = require('numeral');

const CircleGoalDetailInPercent = props => {

    const { classes, goalDetailState  } = props;

    if(goalDetailState.id !== null){

        return (
    
            <Fragment>
    
                   {/* 
                        ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                        - INI SCENARIO KALAU ANTARA "GAP" LEBIH BESAR DARI "GOAL RESULT" ==> MERAH untuk "trail GOAL RESULT/Pencapaiannya" 
                        
                        - INI SCENARIO KALAU "POSISI AMAN" LEBIH BESAR DARI "GOAL RESULT" ==> YELLOW untuk "trail GAP-nya"
                        
                        `````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                        
                    */}
    
                    {
                    goalDetailState.calculatedValue.expected_value_achievement > goalDetailState.calculatedValue.overall_achievement && (
    
                        <CircularProgressbarWithChildren
                            value={numeral(goalDetailState.calculatedValue.expected_value_achievement).format('0,0')}
                            styles = {
    
                                    buildStyles({

                                        pathColor: '#ffec59',  
                                        trailColor: '#eee',


                                    })
                                   
                            }
                        >
                            <CircularProgressbar

                                // strokeWidth={50}
                                
                                value={numeral(goalDetailState.calculatedValue.overall_achievement).format('0,0')} 
                                styles = {

                                    goalDetailState.calculatedValue.gap_value_achievement > goalDetailState.calculatedValue.overall_achievement ||
                                    goalDetailState.calculatedValue.expected_value_achievement > goalDetailState.calculatedValue.overall_achievement
                                    
                                    ?
    
                                        buildStyles({
    
                                            pathColor:'red',                                                             
                                            trailColor: 'transparent',
                                            // textColor: 'black'
                                            textColor: 'white'                                        

                                        }) : 
    
                                            buildStyles({
    
                                                pathColor:'rgba(61, 255, 41, 0.87)', //*Green                                                          
                                                trailColor: 'transparent',
                                                textColor: 'white',  
                                                fontSize: '12px'                                      
                                                // textColor: 'black',

                                            })
                                }
    
                                text={`${numeral(goalDetailState.calculatedValue.overall_achievement).format('0.00')}%`}
                            />
                        </CircularProgressbarWithChildren>
                    )
                }
    
                {/* 
                    ``````````````````````````````````````````````````````````````````````````````````````````````````````````
                    
                    - INI SCENARIO
                     KALAU "GOAL RESULT" LEBIH BESAR DARI "POSISI AMAN" ==> GREEN untuk "trail GOAL RESULT-nya" 
    
                        (Warna GREEN mendahului warna YELLOW GAP)
                    
                    ``````````````````````````````````````````````````````````````````````````````````````````````````````````
                */}
                
                {
    
                    goalDetailState.calculatedValue.overall_achievement > goalDetailState.calculatedValue.expected_value_achievement ||
                    goalDetailState.calculatedValue.overall_achievement === goalDetailState.calculatedValue.expected_value_achievement  ? (
    
                        <CircularProgressbarWithChildren

                            value = { numeral(goalDetailState.calculatedValue.overall_achievement).format('0,0') }
    
                            styles= {
    
                                    buildStyles({
                                        pathColor:'#36cf5f',
                                        trailColor: '#eee'
                                    })
                            }
                        >
    
                            <CircularProgressbar

                                
                                value={numeral(goalDetailState.calculatedValue.expected_value_achievement).format('0,0')} 
                                styles = {
    
                                    buildStyles({
                                        
                                        pathColor: '#2ef062',                                                                         
                                        trailColor: 'transparent',
                                        // textColor: 'black'
                                        textColor: 'white'                                        

                                    })                                                                     
                                }
    
                                text={`${numeral(goalDetailState.calculatedValue.overall_achievement).format('0.00')}%`}
                            />
    
                        </CircularProgressbarWithChildren>
    
                    ) : null
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

export default CircleGoalDetailInPercent;