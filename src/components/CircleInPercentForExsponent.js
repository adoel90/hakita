import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";
import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from './AnimatedProgressProvider';

import { red, yellow, grey, green, lightGreen } from "@material-ui/core/colors";

import TruncateNumber from '../utilities/TruncateNumber';
import ConvertExponentialToSubstring from '../utilities/ConvertExponentialToSubstring';
import ConvertExponentialToDecimal from '../utilities/ConvertExponentialToDecimal';

import "react-circular-progressbar/dist/styles.css";

const numeral = require('numeral');

const CircelInPercentForExsponent = props => {

    const { item} = props;

    // console.log("Item in Eksponenr : ", numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00"))
    // console.log("Type ", typeof numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00"))

    return (

        <Fragment>

        {/* 
            ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
            # SCENARIO-01
            - INI SCENARIO KALAU "OVERALL_ACHIEVEMENT" KURANG DARI dari 85% ==> merah
                
            ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
        */}

    {

        numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00") >= 0 &&        
        numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00") < 85 && (


            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00")}
                duration={3}
                easingFunction={ easeQuadInOut }
                // repeat
            >
                {value => {
                
                    return (
                        <CircularProgressbar
                            // value={numeral(ConvertExponentialToSubstring(value * 100)).format('0.00')}
                            value={value}
                            text={`${numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00") }%`}

                            /* This is important to include, because if you're fully managing theanimation yourself, you'll want to disable the CSS animation. */
                            styles = {
                    
                                buildStyles({
                                    
                                    pathColor: red[800],
                                    textColor: 'black',
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
 numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00") >= 85 &&  
  
 numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00") < 100 && (

    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00")}
        duration={3}
        easingFunction={ easeQuadInOut }
        // repeat
    >
        { value => {

            return (
               
                <CircularProgressbar
                    value={numeral(ConvertExponentialToSubstring(value * 100)).format("0.00")}                                        
                    text={`${numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00")}%`}                                        
                    styles = {
            
                        buildStyles({                                            
                            pathColor: yellow[400], 
                            trailColor: '#eee',//* Kalau di list goal detail  pakai *grey
                            textColor: 'black',
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
    numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format('0.00') !== 200 &&                                
    numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format('0.00') >= 100 && 
    numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format('0.00') <= 200 &&
(

    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format('0.00')}
        duration={3}
        easingFunction={ easeQuadInOut }
        // repeat
    >
        { value => {

            return (

                <CircularProgressbarWithChildren
                    value = { 100 }
                    styles= {

                        buildStyles({                           
                            pathColor:  green[500],                                                
                            trailColor: 'grey',//* Kalau di list goal pakai *#eee
                        })
                    }
                >
                    <CircularProgressbar
                        value={value - 100}
                        // value={100}
                        text={`${numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00")}%`}
                        styles = {
                
                            buildStyles({                                                    
                                // pathColor:  yellow[400],
                                // strokeLinecap: 'butt',//*Untuk supaya trail progress TEGAK   
                                pathColor:  green[800],//lightGreen['A400'],
                                trailColor: 'transparent',//*Ini di pake kalau ada element parent : "CircularProgressbarWithChildren"
                                textColor: 'black',
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
    numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format('0.0') >= 200 && (

    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement)).format('0.00') }
        duration={3}
        easingFunction={easeQuadInOut}
        // repeat
    >
        { value => {

            return (

                <CircularProgressbar
                    value={value * 100}                   
                    text={`${numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00")}%`}
                    styles = {
            
                        buildStyles({
                                                                        
                            pathColor: green[800], //lightGreen['A400'],
                            textColor: 'black',
                            trailColor: 'white',//* Kalau di list goal pakai *#eee
                            pathTransition: "none"                                                                                 
                            // trailColor: 'transparent',//*Ini di pake kalau ada element parent : "CircularProgressbarWithChildren"
                            // strokeLinecap: 'butt',  
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

numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement)).format('0.00') < 0 && 
    // item.calculatedValue.resultOriented.overall_result_achievement !== 0 && 
    (
        

        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={(numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement)).format('0.00') - (numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format('0.00') * 2)) }

            duration={3}
            easingFunction={easeQuadInOut}
            // repeat
        >
            {value => {

                return (
                    <CircularProgressbar
                        value={value}
                        // text={`-${value * 100 }%`}
                        text={`${numeral(ConvertExponentialToSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format("0.00")}%`}
                        counterClockwise={true}
                        styles = {
                
                            buildStyles({                                                    
                                pathColor: red[800], 
                                // trailColor: 'transparent',//*Ini di pake kalau ada element parent : "CircularProgressbarWithChildren"
                                textColor: 'black',
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


        </Fragment>
    )

};

export default CircelInPercentForExsponent;