

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";


const Pie = props => {

    const { width, height } = props;
    

    var totals = [
        {
            title: "Soft-serve",// 
            value: 286,//Goal Result
            all: 1000//Target
        },
        {
            title: "Scooped",
            value: 1000,
            all: 1000
        },
        // {
        //     title: "No Preference",
        //     value: 318,
        //     all: 1000
        // },
        // {
        //     title: "Not Sure",
        //     value: 22,
        //     all: 1000
        // }
    ];

    // let width = 360;
    // let height = 360;

    // let radius = Math.min(width, height) / 2;
    // let donutWidth = 75; //This is the size of the hole in the middle

    const ref = useRef(null);

    const pie = d3
        .pie()
        .value(d => d.value)
        .sort(null);
  
    const arc = d3
        .arc()
        .innerRadius(props.innerRadius  )
        .outerRadius(props.outerRadius);
  
    // const colors = d3.scaleOrdinal(d3.schemeCategory10);
    let color = d3.scaleOrdinal()
        // .range(["#5A39AC", "#DD98D6", "#E7C820", "#08B2B2"]);
        .range(["#5A39AC", "#DD98D6", "#E7C820", "grey"]);


    const format = d3.format(".2f");
        
    useEffect(() => {
            
        // let svg = d3.select('#donut')
        let svg = d3.select(ref.current)
            // .append('svg')
            // .attr('width', width)
            // .attr('height', height)
            // .append('g')
            // .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

        let path = svg.selectAll('path')
            .data(pie(totals))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function (d, i) {
    
                return color(d.data.title);
            })
            .attr('transform', 'translate(0, 0)')

    },[totals])




    return (
        <svg width={width} height={height}>
            <g
                ref={ref}
                transform={`translate(${props.outerRadius} ${props.outerRadius})`}
            />
        </svg>
    );

};

export default Pie;









// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const Pie = props => {

//   const ref = useRef(null);
//   const createPie = d3
//     .pie()
//     .value(d => d.value)
//     .sort(null);
//   const createArc = d3
//     .arc()
//     .innerRadius(props.innerRadius)
//     .outerRadius(props.outerRadius);
//   const colors = d3.scaleOrdinal(d3.schemeCategory10);
//   const format = d3.format(".2f");

//   useEffect(
//     () => {
//       const data = createPie(props.data);
//       const group = d3.select(ref.current);
//       const groupWithData = group.selectAll("g.arc").data(data);

//       groupWithData.exit().remove();

//       const groupWithUpdate = groupWithData
//         .enter()
//         .append("g")
//         .attr("class", "arc");

//       const path = groupWithUpdate
//         .append("path")
//         .merge(groupWithData.select("path.arc"));

//       path
//         .attr("class", "arc")
//         .attr("d", createArc)
//         .attr("fill", (d, i) => colors(i));

//       const text = groupWithUpdate
//         .append("text")
//         .merge(groupWithData.select("text"));

//       text
//         .attr("text-anchor", "middle")
//         .attr("alignment-baseline", "middle")
//         .attr("transform", d => `translate(${createArc.centroid(d)})`)
//         .style("fill", "white")
//         .style("font-size", 10)
//         .text(d => format(d.value));
//     },
//     [props.data]
//   );

//   return (
//     <svg width={props.width} height={props.height}>
//       <g
//         ref={ref}
//         transform={`translate(${props.outerRadius} ${props.outerRadius})`}
//       />
//     </svg>
//   );
// };

// export default Pie;
