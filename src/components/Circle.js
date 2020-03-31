import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { 

    Container, Paper, Typography, Grid, TextField, Checkbox, CircularProgress,
    FormControlLabel, Box, Button, MenuItem, Dialog, DialogTitle, DialogContent, 
    DialogContentText, DialogActions, Breadcrumbs, Link, List, ListItem, ListItemText, 
    ListItemAvatar, Avatar, IconButton, InputBase, Divider, Tooltip, Table, Icon,
    TableBody, TableRow, TableCell, TablePagination, TableSortLabel, TableHead, Menu,
    ListItemIcon, Chip
    
} from '@material-ui/core';

import moment from 'moment';

import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const numeral = require('numeral');


const Circle = props => {

    const { classes, item, index} = props;

    return (

        <Fragment>

               {/* 
                    ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                    - INI SCENARIO KALAU ANTARA "GAP" LEBIH BESAR DARI "GOAL RESULT" ==> MERAH untuk "trail GOAL RESULT/Pencapaiannya" 
                    
                    - INI SCENARIO KALAU "POSISI AMAN" LEBIH BESAR DARI "GOAL RESULT" ==> YELLOW untuk "trail GAP-nya"
                    
                    `````````````````````````````````````````````````````````````````````````````````````````````````````````````````
                    
                */}

                {
                item.calculatedValue.expected_value_achievement > item.calculatedValue.overall_achievement && (

                    <CircularProgressbarWithChildren
                        value={numeral(item.calculatedValue.expected_value_achievement).format('0,0')}
                        // value={5}
                        styles= {

                                buildStyles({
                                    pathColor: '#ffec59',  
                                    trailColor: '#eee',
                                    // strokeLinecap: 'butt',//butt
                                })
                        }
                    >
                        <CircularProgressbar
                            value={numeral(item.calculatedValue.overall_achievement).format('0,0')} 
                            // value={20} 
                            styles = {

                                item.calculatedValue.gap_value_achievement > item.calculatedValue.overall_achievement ||
                                item.calculatedValue.expected_value_achievement > item.calculatedValue.overall_achievement
                                ?

                                    buildStyles({

                                        pathColor:'red',                                                             
                                        trailColor: 'transparent',
                                        // strokeLinecap: 'butt',
                                        textColor: 'black'
                                    }) : 

                                        buildStyles({

                                            pathColor:'rgba(61, 255, 41, 0.87)', //*Green                                                          
                                            trailColor: 'transparent',
                                            // strokeLinecap: 'butt',
                                            textColor: 'black',
                                        })
                            }

                            text={`${numeral(item.calculatedValue.overall_achievement).format('0,0')}%`}
                        />
                    </CircularProgressbarWithChildren>
                )
            }


                {/* 
                ``````````````````````````````````````````````````````````````````````````````````````````````````````````
                
                - INI SCENARIO KALAU "GOAL RESULT" LEBIH BESAR DARI "POSISI AMAN" ==> GREEN untuk "trail GOAL RESULT-nya" 

                    (Warna GREEN mendahului warna YELLOW GAP)
                
                ``````````````````````````````````````````````````````````````````````````````````````````````````````````
                
            */}
            
            {

                item.calculatedValue.overall_achievement > item.calculatedValue.expected_value_achievement ||
                item.calculatedValue.overall_achievement == item.calculatedValue.expected_value_achievement  ? (
                    // item.calculatedValue.overall_achievement > item.calculatedValue.expected_value_achievement ? (

                    <CircularProgressbarWithChildren
                        value = { numeral(item.calculatedValue.overall_achievement).format('0,0') }
                        // value = { numeral(item.calculatedValue.expected_value_achievement).format('0,0') }

                        styles= {

                                buildStyles({
                                    pathColor:'#36cf5f',
                                    // pathColor: 'green', 
                                    // pathColor: 'rgba(61, 255, 41, 0.87)', 
                                    // pathColor:'yellow',    
                                    trailColor: '#eee',
                                    // strokeLinecap: 'butt',//butt
                                })
                        }
                    >

                        <CircularProgressbar
                            value={numeral(item.calculatedValue.expected_value_achievement).format('0,0')} 
                            // value={numeral(item.calculatedValue.overall_achievement).format('0,0')} 
                            styles = {

                                // item.calculatedValue.overall_achievement > item.calculatedValue.expected_value_achievement ||
                                // item.calculatedValue.overall_achievement == item.calculatedValue.expected_value_achievement  ? 

                                

                                //     buildStyles({

                                //         pathColor:'rgba(61, 255, 41, 0.87)',                                                             
                                //         trailColor: 'transparent',
                                //         strokeLinecap: 'butt',
                                //         textColor: 'black'
                                //     }) : 

                                //         buildStyles({

                                //             pathColor:'red', //*Green                                                          
                                //             trailColor: 'transparent',
                                //             strokeLinecap: 'butt',
                                //             textColor: 'black',
                                //         })

                                buildStyles({

                                    // pathColor:'yellow',   
                                    // pathColor: 'rgba(61, 255, 41, 0.87)', 
                                    pathColor: '#2ef062',                                     
                                    
                                    trailColor: 'transparent',
                                    // strokeLinecap: 'butt',
                                    textColor: 'black'
                                })                                                                     
                            }

                            text={`${numeral(item.calculatedValue.overall_achievement).format('0,0')}%`}

                        />

                    </CircularProgressbarWithChildren>

                ) : null

                // (

                //     <CircularProgressbarWithChildren
                //         value = { numeral(item.calculatedValue.overall_achievement).format('0,0') }
                //         styles= {

                //                 buildStyles({
                //                     pathColor: 'red',     
                //                     trailColor: '#eee',
                //                     strokeLinecap: 'butt',//butt
                //                 })
                //         }
                //     >

                //         <CircularProgressbar
                //             value={numeral(item.calculatedValue.gap_value_achievement).format('0,0')} 
                //             styles = {

                //                 buildStyles({

                //                     // pathColor:'yellow',   
                //                     pathColor: 'rgba(61, 255, 41, 0.87)',                                                           
                //                     trailColor: 'transparent',
                //                     strokeLinecap: 'butt',
                //                     textColor: 'black'
                //                 })                                                                     
                //             }

                //             text={`${numeral(item.calculatedValue.overall_achievement).format('0,0')}%`}
                //         />

                //     </CircularProgressbarWithChildren>

                // )
                }

        </Fragment>       
    )

};

export default Circle;