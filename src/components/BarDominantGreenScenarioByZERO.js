
/*
    ````````````````````````````````````````````````````````````````````````````````````````````````
    This bar is inspired by : https://www.quackit.com/css/flexbox/tutorial/create_a_flexible_box.cfm

    ````````````````````````````````````````````````````````````````````````````````````````````````
*/

/* 
    ``````````````````````````````````
    #SCENARIO-06 :

    - "result_value_achievement" === 0
                                                    
    ``````````````````````````````````
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
        // borderBottom: `${'1px solid' + " " + yellow[800]}`,
        // borderTop: `1px solid transparent`,
        // borderLeft: `1px solid transparent`,
        // padding: '1px 2px',
        // borderRadius: 3
        
        
    },
    green2: {

        background: lightGreen['A700'],
    },

    grey : {

        background: '#eee',
    },
    transparent : {

        background: 'transparent',
    },
});

const useStyles = makeStyles(styles);

const BarDominantGreenScenarioFIRST = (props) => {

    const { goalDetailState, resultValueAchievement, expectedValueAchievement } = props;

    const classes = useStyles();
    const theme = useTheme();

    // console.log();

    return (

        <div style={{ width: '100%'}}>
         {/* <Fragment> */}
            <Box display="flex" >            
                <Box 
                    flexGrow={1}    
                    width={100 * theme.spacing(0.2)}
                    // width={100 }
                 >                            
                    <Paper 
                        square={true}
                        className={ classes.grey}
                        style={{
                            borderTopLeftRadius: 2, 
                            borderBottomLeftRadius : 2,
                            borderTopRightRadius: 2, 
                            borderBottomRightRadius: 2,
                            // paddingLeft: -8
                        }}
                    >
                        <span style={{color: 'transparent'}}>3</span>
                    </Paper>  
                    <Typography variant='subtitle2' className={classes.titleWhite} noWrap>
                        0%
                    </Typography>
                    {/* <br /> */}
                    <Box marginTop={-1}>
                        <Typography 
                            variant='subtitle2' 
                            className={classes.titleWhite} 
                            style={{fontSize: 14}} 
                            noWrap
                        >
                            {/* <i>(ERVA)</i> */}
                            <i>(Result)</i>
                        </Typography>
                    </Box>                
                </Box>                                                
            </Box>
        </div>
        //  </Fragment>
    )
};

export default BarDominantGreenScenarioFIRST;
