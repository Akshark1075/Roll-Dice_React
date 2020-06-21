import React, {Component} from 'react'
import './Dice.css'
class Dice extends Component{
    render(){
        var myclass="fas fa-dice-"+this.props.no+' Dice'
        console.log(myclass)
        return(<i className={myclass}></i>)
    }
}
export default Dice