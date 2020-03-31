
/*
    ````````````````````````````````````````````````````````````````````````````````````````````````
    This bar is inspired by : https://www.quackit.com/css/flexbox/tutorial/create_a_flexible_box.cfm

    ````````````````````````````````````````````````````````````````````````````````````````````````
*/

/* 
    ``````````````````````````````````````````````````````````````````````````````````````````````````
    #SCENARIO-02 :

    - KALAU "result_value_achievement" LEBIH BESAR "expected_result_value_achievement" &

    - "result_value_achievement" ===  100
                                                    
    ``````````````````````````````````````````````````````````````````````````````````````````````````                                        
*/

import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";
import { SvgIcon, Collapse, Grid, Box, Avatar, Typography, Paper, Button } from '@material-ui/core';
import { fade, makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { green, lightGreen, yellow } from "@material-ui/core/colors";

const numeral = require('numeral');

const styles = theme => ({


    title: {

        fontFamily: 'Nunito'
    },
    titleWhite: {

        fontFamily: 'Nunito',
        color: 'white'
    },
    //*
    red : {

        background: 'red',       
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
        // '&::before': {
        //     content: "''",
        //     display: 'block',
        //     width: '5px',
        //     height: '5px',          
        //     borderRadius: '7.5px',
        //     position:'absolute',
        //     // left: '59%',
        //     // bottom: '69%',
        //     marginTop: -5,
        //     marginLeft: -4,
        //     backgroundColor: yellow[500],

        // },
        // '&::after': {

        //     content: "''",
        //     display: 'block',
        //     width: '5px',
        //     height: '5px',          
        //     borderRadius: '7.5px',
        //     position:'absolute',
        //     // left: '59%',
        //     // bottom: '69%',
        //     marginBottom: -5,
        //     marginLeft: -4,
        //     backgroundColor: yellow[500]            
        // }
    },
    greenBorderLeft: {

        background: lightGreen['A400'],
        // borderLeft: `${'2px solid ' + yellow[500]}`,
        // '&::before': {
        //     content: "''",
        //     display: 'block',
        //     width: '5px',
        //     height: '5px',          
        //     borderRadius: '7.5px',
        //     position:'absolute',
        //     // left: '59%',
        //     // bottom: '69%',
        //     marginTop: -5,
        //     marginLeft: -4,
        //     backgroundColor: yellow[500],

        // },
        // '&::after': {

        //     content: "''",
        //     display: 'block',
        //     width: '5px',
        //     height: '5px',          
        //     borderRadius: '7.5px',
        //     position:'absolute',
        //     // left: '59%',
        //     // bottom: '69%',
        //     marginBottom: -5,
        //     marginLeft: -4,
        //     backgroundColor: yellow[500]            
        // }
    },
    grey : {

        background: '#eee',
    },
    transparent : {

        background: 'transparent',
    },
});

const useStyles = makeStyles(styles);

const BarDominantGreenScenarioSECOND = (props) => {

    const { goalDetailState, resultValueAchievement, expectedValueAchievement } = props;

    const classes = useStyles();
    const theme = useTheme();

    return (

        <div style={{ width: '100%'}}>
            {/*             
                ````````````````                
                TEXT BAGIAN ATAS

                ````````````````

            */}
            <Box display="flex" justifyContent="flex-end" > 
                <Typography variant='subtitle2' className={classes.titleWhite} style={{ 
                        position: 'relative', 
                        display: 'block'
                    }}
                >
                    { numeral(resultValueAchievement).format('0.00')}% 
                    <i style={{fontSize: 14}} >(Result)</i>
                </Typography>
            </Box>    

            <Box display="flex" >

                {/* 
                    ``````
                    #BOX-1

                    ``````
                */}
                <Box 
                    flexGrow={1} 
                    width={ `${expectedValueAchievement}%`  } //*Lebar EVA
                    
                >
                    <Paper 
                        // elevation={2}
                        square={true}
                        className={classes.greenBorderLeft}
                        style={{borderTopLeftRadius: 2, borderBottomLeftRadius: 2}}
                    >
                        <span style={{color: 'transparent'}}>1</span>                                                    
                    </Paper>   

                    <Typography variant='subtitle2' className={classes.titleWhite} noWrap>
                        {numeral(expectedValueAchievement).format('0.00')}%
                    </Typography>
                    {/* <br /> */}

                    <Box marginTop={-1}>
                        <Typography 
                            variant='subtitle2' 
                            className={classes.titleWhite} 
                            // style={{fontSize: 9}} 
                            noWrap
                        >
                            {/* <i>(EVA)</i> */}
                            <i>(Expected)</i>

                        </Typography>
                    </Box>
                    
                </Box>

                {/* 
                    ```````````````````````````````````````````````````````````````````````````````````````````````````````````````
                    #BOX-2
                    
                    VISUALISASI "resultValueAchievement" - "expectedValueAchievement" = "LEBAR BATANG" as tambahan ukuran lebat-nya
                    
                    ````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                */}
                <Box width={
                    // (resultValueAchievement - expectedValueAchievement) * theme.spacing(0.2) 
                    `${(resultValueAchievement - expectedValueAchievement)}%` 
                    
                }>                             
                    <Paper 
                        square={true}
                        className={classes.green2}
                        style={
                            
                            expectedValueAchievement === 0 ? 
                                {borderTopRightRadius: 2, borderBottomRightRadius: 2, borderBottomLeftRadius: 2, borderTopLeftRadius: 2} :
                                    {borderTopRightRadius: 2, borderBottomRightRadius: 2}
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

                {/* <Box width={100 - resultValueAchievement} > 
                    <Paper 
                        square={true}
                        className={ classes.grey}
                        style={{borderTopRightRadius: 2, borderBottomRightRadius: 2}}
                    >
                        <span style={{color: 'transparent'}}>3</span>
                    </Paper> 
                </Box>                                                      */}
            </Box>
        </div>
    )
};

export default BarDominantGreenScenarioSECOND;
