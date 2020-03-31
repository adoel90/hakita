import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";

import moment from 'moment';

import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from './AnimatedProgressProvider';

import { red, yellow, grey, green, lightGreen } from "@material-ui/core/colors";

import TruncateNumber from '../utilities/TruncateNumber';
import TruncateSubstring from '../utilities/TruncateSubstring';

import "react-circular-progressbar/dist/styles.css";

const numeral = require('numeral');

const CircelInPercent = props => {

    const { classes, item, index} = props;

    return (

        <Fragment>

        {/* 
            ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
            # SCENARIO-01
            - INI SCENARIO KALAU "OVERALL_ACHIEVEMENT" KURANG DARI dari 85% ==> merah
                
            ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
        */}

    {

        numeral(item.calculatedValue.resultOriented.overall_result_achievement * 100).format('0.00') >= 0 &&
        numeral(item.calculatedValue.resultOriented.overall_result_achievement * 100).format('0.00') < 85 && (

            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={numeral(item.calculatedValue.resultOriented.overall_result_achievement).format('0.00')}
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
 numeral(TruncateSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format('0.00') >= 85 && 
  
  numeral(TruncateSubstring(item.calculatedValue.resultOriented.overall_result_achievement * 100)).format('0.00') < 100 && (

    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={numeral(TruncateSubstring(item.calculatedValue.resultOriented.overall_result_achievement)).format('0.00')}
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
item.calculatedValue.resultOriented.overall_result_achievement * 100 !== 200 &&                                
item.calculatedValue.resultOriented.overall_result_achievement * 100 >= 100 && 
item.calculatedValue.resultOriented.overall_result_achievement * 100 <= 200 &&
(

    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={numeral(item.calculatedValue.resultOriented.overall_result_achievement).format('0.00')}
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
item.calculatedValue.resultOriented.overall_result_achievement * 100 >= 200 && (

    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={item.calculatedValue.resultOriented.overall_result_achievement }
        duration={3}
        easingFunction={easeQuadInOut}
        // repeat
    >
        { value => {

            // const roundedValue = Math.round(value);

            return (

                <CircularProgressbar
                    value={value * 100}
                    // text={`${value * 100 }%`}//*Khusus yang ini ga pake numeral-an
                    // counterClockwise={true}
                    text={`${TruncateNumber(numeral(value * 100).format('0.00'))}%`}
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

    item.calculatedValue.resultOriented.overall_result_achievement < 0 && 
    // item.calculatedValue.resultOriented.overall_result_achievement !== 0 && 
    (
        

        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={(numeral(item.calculatedValue.resultOriented.overall_result_achievement).format('0.00') - (numeral(item.calculatedValue.resultOriented.overall_result_achievement).format('0.00') * 2)) }

            duration={3}
            easingFunction={easeQuadInOut}
            // repeat
        >
            {value => {

                return (
                    <CircularProgressbar
                        value={value * 100}
                        // text={`-${value * 100 }%`}
                        text={`${numeral(item.calculatedValue.resultOriented.overall_result_achievement * 100).format('0.00')  }%`}
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

export default CircelInPercent;
