import React from "react";
import Stack from '@mui/material/Stack';

function CalculateCorrelation(data){
    const n = data.length; 

    const xvalues = data.map((point) => point.x);
    const yvalues = data.map((point) => point.y);

    const xmean = xvalues.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0) / n;
    
    const ymean = yvalues.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0) / n;

    const numerator = data.reduce((accumulator, value) => {
        return accumulator + (value.x-xmean)*(value.y-ymean);
      }, 0)
    
    const denom1 = data.reduce((accumulator, value) => {
        return accumulator + (value.x-xmean)*(value.x-xmean);
      }, 0)

    const denom2 = data.reduce((accumulator, value) => {
        return accumulator + (value.y-ymean)*(value.y-ymean);
      }, 0)  

    const denominator = Math.sqrt(denom1*denom2)
    const result = numerator/denominator
    return Math.round(result*100000)/100000
}


function Insights({data}){

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1.5}
            >
            <h3>Correlation: {CalculateCorrelation(data)}</h3>

            <h3>Total Datapoints: {data.length}</h3>
        </Stack>
    )
}


export default Insights; 