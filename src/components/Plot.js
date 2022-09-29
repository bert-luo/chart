import React from "react";
import { Scatter } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title
  } from 'chart.js';
import { dataset } from "./data/Dataset.js";
import Stack from '@mui/material/Stack';
import Insights from "./Insights.js"

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

function ExtractData(dataObject, xdim, ydim, zeroes){
    const points =   Object.entries(dataObject).map(
          ([k, v]) => ({x: v["inputs"][xdim], y: v["outputs"][ydim]})
        )
    if (zeroes){
        return (points)
    } else {
        return points.filter((point) => point.x != 0)
    }
    
}

function Plot({xdims, ydims}){

    if (xdims=='Select an input' || ydims=='Select an output'){
        return (
            <h2>Please select an input and ouptut</h2>
        )
    } else {
        // update the data
        const scatterPoints = ExtractData(dataset, xdims, ydims, false);
        let dataparam = {
            datasets:[{
                labels: ['hi'], 
                data: scatterPoints,
                backgroundColor: 'rgb(255, 99, 132)',
                radius: 5
            }]
        };

        const options = {

            scales: {
              x: {
                type: "linear",
                position: "bottom", 
                title: {
                    display: true, 
                    text: xdims
                }
              },
              y: {
                type: "linear",
                title: {
                    display: true, 
                    text: ydims
                }
              },
            },
            plugins: {
                title: {
                    display: true,
                    text: xdims + " vs. " + ydims,
                    fontSize: 50
                },
                legend: {
                    display: false
                }
            }
          };

        return (
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                >
                <div className="chart">
                    <Scatter 
                        data={dataparam} 
                        options={options}
                        style={{width: 600}}
                />
                </div>                    
                <Insights data={scatterPoints}/>
            </Stack>
          );
    }
    

  }



export default Plot; 