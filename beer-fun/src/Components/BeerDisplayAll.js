import React, {Component} from 'react'; 
import Header from './Header';
import axios from 'axios'; 

class BeerDisplayAll extends Component{
    constructor(){
        super(); 
        this.state = {
            beer: [], 
        }
    }

    componentDidMount(){
        axios.get("https://beer.fluentcloud.com/v1/beer").then( beers=> {
            this.setState({beer: beers.data}); 
            console.log(beers)
        })
    }

    render(){
        return(
            <div className = "beer-display">
               <Header /> 
               {
                   this.state.beer.map(beer => {
                       return (
                           <div className = "beer">
                                <p>{beer.name}</p>
                                <p>{beer.likes}</p>
                           </div>
                       )
                   })
               }
            </div>
        )
    }
}

export default BeerDisplayAll; 