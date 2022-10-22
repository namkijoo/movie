import React from "react";
import "./Movie.css"

function Movie(props){
    return(
        <div className="wrapper">
            <div className="da" style={{backgroundColor:props.color}}>
                <div className="up">
                    <h1>무비스토리</h1>
                </div>
                <div  className="down">
                    <img src={props.image} alt=""></img>
                    <div className="inside">
                        <h1>{props.title}&nbsp; <span>{props.year}</span></h1>
                        <h4>{props.genre}</h4>
                        <h4>
                            {props.content}
                        </h4>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default Movie;