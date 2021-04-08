import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props){
  return(
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index){
        return(
          <div key={index}>
            <div className="definition">
              {definition.definition}
              <br />
              <em><Example example={definition.example}/></em>
              <p/>
              <Synonyms synonyms={definition.synonyms} />
            </div>
            </div>
        );
      })}
    </div>
  );
}