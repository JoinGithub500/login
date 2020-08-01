import React from "react";
import './Top.css'
import yerer from './yerer.png';


const Top = () => {
	return(
    <div>
    	<div className="w3-row w3-mycolor w3-padding">
        <div className="w3-half">
          <a href='#.html'><img className="logo-img" src={yerer} alt='#' /></a>
        </div>
        <div className="w3-half w3-wide w3-hide-medium w3-hide-small">
          <div className="w3-right w3-text-white">
            " '' Let See What We Could Do For You "
          </div>
        </div>
      </div>
    </div>
	);
}

export default Top;