import React, {Component} from "react";

class Hello extends Component {

    render(){

        return(

            <div>

         <h1>Hello {this.props.greeting} </h1>
         <p>Another Text</p>

            </div>
        

        
        )
    }


}

export default Hello;