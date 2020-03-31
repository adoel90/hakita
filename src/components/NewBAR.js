
/*
    ````````````````````````````````````````````````````````````````````````````````````````````````
    This bar is inspired by : https://www.quackit.com/css/flexbox/tutorial/create_a_flexible_box.cfm

    ````````````````````````````````````````````````````````````````````````````````````````````````
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

const NewBAR = (props) => {

    const { goalDetailState, resultValueAchievement, expectedValueAchievement, lengthWidthDefaultBAR, scalingLebarSeratusPersen, lengthRVA} = props;

    const classes = useStyles();
    const theme = useTheme();

    // useEffect(() => {
        
    //     console.log("scalingLebarSeratusPersen inside component : ", scalingLebarSeratusPersen);

    // },[scalingLebarSeratusPersen])

    return (

        // <div style={{ width: '100%'}}>
        <div style={{ width: `${scalingLebarSeratusPersen}%`}}>  
        {/* <div style={{ width: `${lengthWidthDefaultBAR}%`}}>   */}

      

        {/* <Fragment>    */}
            <Box display="flex">   
                <Box 
                    flexGrow={1} 
                    width={`${'"' + 50 * theme.spacing(0.3) + '%"'}`}
                    // width={`${'"' + 100 * theme.spacing(0.3) + '%"'}`}

                 >                            
                    <Paper 
                        square={true}
                        className={ classes.green}
                        style={{

                            borderTopLeftRadius: 2, 
                            borderBottomLeftRadius : 2,
                            borderTopRightRadius: 2, 
                            borderBottomRightRadius: 2,
                        }}
                    >
                        <span style={{color: 'transparent'}}>1</span>
                    </Paper>  

                    <Typography variant='caption' className={classes.titleWhite} noWrap>
                        0%
                    </Typography>
                    <br />
                    <Box marginTop={-1}>
                        <Typography 
                            variant='caption' 
                            className={classes.titleWhite} 
                            style={{fontSize: 9}} 
                            noWrap
                        >
                            <i>(Expected)</i>
                        </Typography>
                    </Box>                
                </Box>                                                
            </Box>
        </div>
        /* </Fragment>  */
    )
};

export default NewBAR;
