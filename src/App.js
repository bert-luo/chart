import './App.css';
import React from "react";
import Header from "./components/Header.js";
import Filter from './components/Filter.js';
import Stack from '@mui/material/Stack';

//style={{ display: "flex", justifyContent: "space-between" }}>
function App(){
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <Header/>
      <Filter/>
    </Stack>
    );
}


export default App;
