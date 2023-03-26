import React, { useState } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { width } from "@mui/system";

const SearchBar = ({handleOnformSubmit}) => {
  const [Term, setTerm] = useState("");
  const handleChange=event=>{
    setTerm(event.target.value)

  }
  const handleSubmit=e=>{
    e.preventDefault()
    handleOnformSubmit(Term)
    setTerm("")
    
    
  }
  return (
    <Paper
      elevation={4}
      style={{ padding: "15px", width: "30%", margin: "0px auto" }}
    >
      <form onSubmit={handleSubmit}>
        <TextField style={{ width: "100%" }} label="...Search"  value={Term} onChange={handleChange} />
        {/* <Button
          onClick={() => console.log("hi")}
          color="secondary"
          variant="filled"
        
          
        >
          Search
        </Button> */}
      </form>
    </Paper>
  );
};

export default SearchBar;
