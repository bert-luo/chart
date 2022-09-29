import React, { useState } from "react";
import Plot from "./Plot.js"
import Stack from '@mui/material/Stack';

import { dataset } from "./data/Dataset.js";


function Filter(){
    const [xdims, setxdims] = useState('');
    const [ydims, setydims] = useState('');

    const inputNames = Object.keys(dataset["20170102_EXP_56"]["inputs"]);
    const outputNames = Object.keys(dataset["20170102_EXP_56"]["outputs"]);

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
            placeholder="Select an option"
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
            placeholder="Select an option"
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