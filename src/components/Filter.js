import React, { useState } from "react";
import Plot from "./Plot.js"
import Stack from '@mui/material/Stack';

import { dataset } from "./data/Dataset.js";

const inputNames = Object.keys(dataset["20170102_EXP_56"]["inputs"]);
const outputNames = Object.keys(dataset["20170102_EXP_56"]["outputs"]);

inputNames.unshift("Select an input");
outputNames.unshift("Select an output");

function Filter(){
    const [xdims, setxdims] = useState('Select an input');
    const [ydims, setydims] = useState('Select an output');

    return (
      <>

        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            >
            <select
            onChange={(event) => setxdims(event.target.value)}
            value={xdims}
            placeholder="Select an input"
            >
                options={
                inputNames.map((inputName) => (
                <option key={inputName} value={inputName}>
                    {inputName}
                </option>)
                    )
                }
            </select>

            <select
            onChange={(event) => setydims(event.target.value)}
            value={ydims}
            placeholder="Select an output"
            >
                options={
                outputNames.map((outputName) => (
                <option key={outputName} value={outputName}>
                    {outputName}
                </option>)
                    )
                }
            </select>

        </Stack>

        <Plot xdims={xdims} ydims={ydims}/>

      </>
      );
  }
 
export default Filter; 