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
import { fontSize } from "@mui/system";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

function ExtractData(dataObject, xdim, ydim){
    return(
        Object.entries(dataObject).map(
          ([k, v]) => ({x: v["inputs"][xdim], y: v["outputs"][ydim]})
        )
    )  
}

function Plot({xdims, ydims}){

    if (xdims=='' || ydims==''){
        return (
            <h2>Please select an input and ouptut</h2>
        )
    } else {
        // update the data
        const scatterPoints = ExtractData(dataset, xdims, ydims);
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
            <div className="chart">
                <Scatter 
                    data={dataparam} 
                    options={options}
                    style={{width: 600}}
            />
            </div>
          );
    }
    

  }



export default Plot; 