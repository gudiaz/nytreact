import React from "react";

//define class
export class Header extends React.Component {
	render() {
	    return (	
	    	<div className="page-header">
   		    	<h3 className="text-center"><strong><i class="fa fa-newspaper-o"></i> New York Times Article Scrubber</strong></h3>
            	<h4 className="text-center">Search for and save articles of interest</h4>
  			</div>
        );
	}
}

module.exports = Header;