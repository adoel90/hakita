import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";

import moment from 'moment';

import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const numeral = require('numeral');

const CircelInPercent = props => {

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
                            // value={5}
                            value={numeral(item.calculatedValue.expected_value_achievement).format('0,0')}
                            styles= {

                                buildStyles({
                                    pathColor: '#ffec59',  //*Yellow
                                    trailColor: '#eee',
                                })
                            }
                        >
                            <CircularProgressbar
                                value={numeral(item.calculatedValue.overall_achievement).format('0,0')} 
                                styles = {

                                    item.calculatedValue.gap_value_achievement > item.calculatedValue.overall_achievement ||
                                    item.calculatedValue.expected_value_achievement > item.calculatedValue.overall_achievement
                                    ?

                                        buildStyles({

                                            pathColor:'red',                                                             
                                            trailColor: 'transparent',
                                            textColor: 'black'
                                        }) : 

                                            buildStyles({
                                                pathColor:'rgba(61, 255, 41, 0.87)', //*Green                                                          
                                                trailColor: 'transparent',
                                                textColor: 'black',
                                            })
                                }

                                text={`${numeral(item.calculatedValue.overall_achievement).format('0.00')}%`}
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
                item.calculatedValue.overall_achievement === item.calculatedValue.expected_value_achievement  ? (

                    <CircularProgressbarWithChildren
                        value = { numeral(item.calculatedValue.overall_achievement).format('0,0') }

                        styles= {

                                buildStyles({
                                    pathColor:'#36cf5f',
                                    trailColor: '#eee'
                                })
                        }
                    >

                        <CircularProgressbar
                            value={numeral(item.calculatedValue.expected_value_achievement).format('0,0')} 
                            styles = {

                                buildStyles({

                                    pathColor: '#2ef062',                                                                         
                                    trailColor: 'transparent',
                                    textColor: 'black'
                                })                                                                     
                            }

                            text={`${numeral(item.calculatedValue.overall_achievement).format('0.00')}%`}

                        />

                    </CircularProgressbarWithChildren>

                ) : null

                }
        </Fragment>
    )

};

export default CircelInPercent;