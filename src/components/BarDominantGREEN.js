import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";
import Chart from "react-apexcharts";
import { green, lightGreen } from "@material-ui/core/colors";

import './Bar.css';

const numeral = require('numeral');


const BarDominantGREEN = props => {

    const { 
        
        classes,
        goalDetailState

    } = props;

    useEffect(() => {

        if(goalDetailState !== null && goalDetailState !== undefined){

            if(goalDetailState.id !== null){
                if(goalDetailState.member !== null){

                    setSeriesBar(

                        [
                            {
                              name: "Expected Value Achievement",
                              data: [numeral(goalDetailState.calculatedValue.expected_value_achievement * 100).format('0.00') ]
                            },
                            {
                              name: "Result Value Achievement",
                              data: [numeral(goalDetailState.calculatedValue.result_value_achievement * 100 ).format('0.00')  ]
                            },
                            {
                                name: "Target Result Value",
                                data: [100 - ((goalDetailState.calculatedValue.result_value_achievement * 100) - (goalDetailState.calculatedValue.expected_value_achievement * 100))]
                                // data: [goalDetailState.calculatedValue.target_value - goalDetailState.calculatedValue.result_value - goalDetailState.calculatedValue.expected_value ]
                                // data: [goalDetailState.calculatedValue.target_value - goalDetailState.calculatedValue.result_value - goalDetailState.calculatedValue.expected_value ]
                            }
                        ]
                    );

                    let okeSip = {
                        
                        xaxis: {

                            type: "category",

                            //*NEW
                            categories: [
                                'EVA',
                                'RVA',
                                'TRV'                   
                              ],
                            labels: {
                                show: true
                            },
                        },
                        tickPlacement: 'between'
                    }

                    setOptionBar({...optionsBar,   okeSip})

                };
            };
        };
        
    },[goalDetailState])

    /*
        ````````````````````
        BAR HORIZONTAL CHART
        ````````````````````
    */

    const [ seriesBar, setSeriesBar ] = useState(

        [
            {
                name: "Result Value Achievement",
                data: [0]
            },
            {
                name: "Expected Result Value Achievement",
                data: [1]
            },
            {
                name: "Target Result Value Achievement",
                data: [2]
            }
        ] 
    );

    const [optionsBar, setOptionBar] = useState(
        {

            //*NEW
            tooltip: {

                    style: {
                    
                    fontSize: '11px',
                    fontFamily: 'Nunito'

                },
                enabled: true,
                custom: function({ series, seriesIndex, dataPointIndex }) {

                    let sipOke = [
                        {
                            name: 'EVA'
                        },
                        {
                            name: 'RVA'
                        },
                        {
                            // name: 'TRV'
                            name: ''
                        },
                    ];

                    return (
                        '<div class="arrow_box">' +
                            "<span>" +
                                // w.globals.labels[dataPointIndex] +
                                sipOke[seriesIndex].name + 
                                `${sipOke[seriesIndex].name !== '' ? ' : ' : ''}` + 
                                // " : " +
                                // series[seriesIndex][dataPointIndex] + `${sipOke[seriesIndex].name !== 'TRV' ? "%" : ""}` +
                                `${sipOke[seriesIndex].name !== '' ? series[seriesIndex][dataPointIndex] + "%" : ""}` +
                            "</span>" +
                        "</div>"
                    );
                }                       
            },

            //*
            chart: {

                stacked: true,
                stackType: "100%",//*Lebar batang BAR
                // stackType: `${goalDetailState.calculatedValue.target_value - goalDetailState.calculatedValue.start_value + "%"}`,
                toolbar: {

                    show: false
                    
                },
                sparkline: {

                    enabled: true
                }
            },
            colors: [

                lightGreen['A400'],
                lightGreen['A700'],  //*#5ce663: greenLight
                '#eee'//*Llike grey
            ],
            plotOptions: {

                bar: {

                    horizontal: true,
                    barHeight: '100%',
                }
            },
            series: [

                {
                  data: ['RVA', 'EVA', 'TRV']
                }
            ],

            legend: {
                
                show: false
            },

            stroke: {
                
                width: 0,
                show: true
            },                        
            dataLabels: {

                enabled: false,
                // textAnchor: 'start',
                // style: {
                //   colors: ['#fff']
                // },
                // formatter: function (val, opt) {

                //     console.log("Val : ", val)
                //     //   return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                //     return numeral(val).format("0")

                // },
                // offsetX: 0,
                // dropShadow: {
                //   enabled: true
                // }
            }    
        }
    );

    return (

        <Chart
            options={optionsBar}
            height={16}
            series={seriesBar}
            type="bar"
            width='120%'
        />
    )
};

export default BarDominantGREEN;
