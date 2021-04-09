import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props){
  const[keyword, setKeyword]=useState(props.defaultKeyword);
  const[results, setResults]=useState(null);
  const [loaded, setLoaded]=useState(false);
  const [photos, setPhotos]=useState(null);

   

  function handleResponse(response){
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response){
setPhotos(response.data.photos);
  }

  function search (){
//documentation: https://dictionaryapi.dev/
 let apiURL=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
 axios.get(apiURL).then(handleResponse);

let pexelsApiKey="563492ad6f9170000100000184413a23d0bd462ca28e971c684de0a7";
let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
let headers={ Authorization: `Bearer ${pexelsApiKey}`};
axios.get (pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);

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
    <Photos photos={photos} />
    </div>
  );
} else{
  load();
  return "Loading";
}}