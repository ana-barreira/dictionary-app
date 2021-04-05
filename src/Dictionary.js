import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
  const[keyword, setKeyword]=useState("");

  function handleResponse(response){
    console.log(response.data[0]);
  }

 function search(event){
event.preventDefault();

//documentation: https://dictionaryapi.dev/
 let apiURL=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
 axios.get(apiURL).then(handleResponse);}

 function handleKeywordChange(event){
setKeyword (event.target.value);
 }

  return(
    <div className="Dictionary">
<form className="d-flex" onSubmit={search}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleKeywordChange} />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
  );
}