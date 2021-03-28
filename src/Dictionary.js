import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
  const[keyword, setKeyword]=useState("");

 function search(event){
event.preventDefault();
 alert(`${keyword}`);
 }

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