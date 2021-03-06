
/*
    ````````````````````````````````````````````````````````````````````````````````````````````````
    This bar is inspired by : https://www.quackit.com/css/flexbox/tutorial/create_a_flexible_box.cfm

    ````````````````````````````````````````````````````````````````````````````````````````````````
*/

/* 
    ``````````````````````````````````````````````````````````````````````````````````````````````````
    #SCENARIO-04 :

    - KALAU "expected_result_value_achievement" LEBIH BESAR DARI "result_value_achievement" &

    - "result_value_achievement" KURANG DARI 100

    - "result_value_achievement" LEBIH DARI 0
                                                    
    ``````````````````````````````````````````````````````````````````````````````````````````````````
*/
import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";
import { SvgIcon, Collapse, Grid, Box, Avatar, Typography, Paper, Button, useMediaQuery } from '@material-ui/core';
import { fade, makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { green, lightGreen, yellow, red } from "@material-ui/core/colors";

import ConvertExponentialToSubstring from '../utilities/ConvertExponentialToSubstring';

const numeral = require('numeral');

const styles = theme => ({

    title: {

        fontFamily: 'Nunito'
    },
    titleWhite: {

        fontFamily: 'Nunito',
        color: 'white'
    },

    green : {

        background: 'green',
    },

    green1: {

        background: lightGreen['A400'],
        borderRight: `${'2px solid ' + yellow[500]}`,
             
    },
    green2: {

        background: lightGreen['A700'],
    },

    //*
    red : {

        background: red[800],
    },

    yellow: {

        background:  yellow[300],
        borderRight: `${'2px solid ' + yellow['A400']}`,
        // borderBottom: `${'1px solid' + " " + yellow[800]}`,
        // borderTop: `1px solid transparent`,
        // borderLeft: `1px solid transparent`,
        // padding: '1px 2px',
        // borderRadius: 3
                
    },   
    grey : {

        background: '#eee',
    },
    transparent : {

        background: 'transparent',
    }

});


const useStyles = makeStyles(styles);

const BarDominantRedScenarioFOURTH = (props) => {

    
    const { goalDetailState, resultValueAchievement, expectedValueAchievement } = props;
    
    const theme = useTheme();
    const classes = useStyles();
    
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
    const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
    const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));


    return (

        <div style={{ width: '100%'}}>

            {/*             
                ````````````````                
                TEXT BAGIAN ATAS

                ````````````````
            */}
            <Box display="flex" justifyContent="center" > 
                <Typography variant='subtitle2' className={classes.titleWhite} style={{ 
                        position: 'relative', 
                        display: 'block'
                    }}
                >
                    { numeral(expectedValueAchievement).format('0.00')}% 
                    <i style={{fontSize: 14}} >(Expected)</i>
                </Typography>
            </Box>             
                
            <Box                
                display="flex" 
            >

                {/* 
                    ``````
                    #BOX-1

                    ``````
                */}
                {
                    resultValueAchievement === 0 ||  
                    resultValueAchievement < 0 ?

                         null : (

                            <Box 
                                flexGrow={1}                                                   
                                width={ `${resultValueAchievement}%`  } //*Lebar EVA  
                            >
                                <Paper                     
                                    square={true}
                                    className={classes.red}
                                    style={{borderTopLeftRadius: 2, borderBottomLeftRadius: 2}}
                                >
                                    <span style={{color: 'transparent'}}>1</span>                                                    
                                </Paper>   

                                <Typography variant='subtitle2' className={classes.titleWhite} 
                                // noWrap
                                    style={{
                                        marginLeft: -16 
                                    }}
                                >
                                    {
                                        resultValueAchievement.toString().indexOf('e') !== -1 ?
                                            numeral(ConvertExponentialToSubstring(resultValueAchievement)).format('0.00') :
                                            numeral(resultValueAchievement).format('0.00')
                                    }%
                                </Typography>
                                
                                {/* <br /> */}
                                <Box marginTop={-1}>
                                    <Typography 
                                        variant='subtitle2' 
                                        className={classes.titleWhite} 
                                        style={{
                                            // fontSize: 9,
                                            marginLeft: -16 
                                        }} 
                                        // noWrap
                                    >
                                        {/* <i>(RVA)</i> */}
                                        <i>(Result)</i>

                                    </Typography>
                                </Box>
                                
                            </Box>
                         )
                }

                {/*                         
                    ```````````````````````````````````````````````````````````````````````````````````````````````````````````````
                    #BOX-2
                    
                    VISUALISASI "resultValueAchievement" - "expectedValueAchievement" = "LEBAR BATANG" as tambahan ukuran lebat-nya
                    
                    ````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                */}
                <Box 
                    // width={(expectedValueAchievement - resultValueAchievement) * theme.spacing(0.2)}
                    width = { 

                        `${(expectedValueAchievement - resultValueAchievement)}%`                        
                    }
                >                       

                    <Paper 
                        square={true}
                        className={classes.yellow}
                        style={
                            resultValueAchievement === 0 ||  
                            resultValueAchievement < 0 ?
                                {
                                    borderTopLeftRadius: 2, 
                                    borderBottomLeftRadius: 2
                                } : 
                                { 
                                    borderTopLeftRadius: 0, 
                                    borderBottomLeftRadius: 0
                                }
                        }
                    >
                        <i style={{color: 'transparent'}}>2</i>                        
                    </Paper>   
                </Box>

                {/* 
                    ``````
                    #BOX-3
                    
                    ``````
                */}

                {/* <Box width={(100 - expectedValueAchievement) *  theme.spacing(0.3) } > */}
                <Box width={(100 - expectedValueAchievement) * `${matchesXL === true ? theme.spacing(0.4) : theme.spacing(0.3)}`} >

                

                    <Paper 
                        square={true}
                        className={ classes.grey}
                        style={{borderTopRightRadius: 2, borderBottomRightRadius: 2}}
                    >
                        <span style={{color: 'transparent'}}>3</span>
                    </Paper> 
                </Box>                                                     
            </Box>
        </div>
    )
};

export default BarDominantRedScenarioFOURTH;

// <div className="App">
//     <HSBar
//         height={50}
//         // showTextIn
//         // showTextUp
//         showTextDown
//         id="new_id"
//         fontColor="rgb(50,20,100)"
//         data={[
//             {
//                 name: "RVA",
//                 value: 80,
//                 description: "U$80,00",
//                 color: "red"
//             },
//             {
//                 name: "EVA",
//                 value: 200,
//                 description: "U$200,00",
//                 color: "rgb(150,150,220)"
//             }
//         ]}
//     />
// </div>