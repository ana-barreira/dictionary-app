import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props){
  const[keyword, setKeyword]=useState(props.defaultKeyword);
  const[results, setResults]=useState(null);
  const [loaded, setLoaded]=useState(false);

  function handleResponse(response){
    setResults(response.data[0]);
  }

  function search (){
//documentation: https://dictionaryapi.dev/
 let apiURL=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
 axios.get(apiURL).then(handleResponse);
  }

 function handleSubmit(event){
event.preventDefault();
search();
}

 function handleKeywordChange(event){
setKeyword (event.target.value);
 }

 function load(){
   setLoaded(true);
   search();
 }


 if(loaded){
  return(
    <div className="Dictionary">
      <section>
        <h1>What are you searching for?</h1>
<form className="d-flex" onSubmit={handleSubmit}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
    </form>
    <div className="hint">
      Suggested words: sunrise, forest, hello
    </div>
    </section>
    <Results results={results} />
    </div>
  );
} else{
  load();
  return "Loading";
}}