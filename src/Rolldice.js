import React,{Component} from 'react'
import './Rolldice.css'
import Dice from './Dice'
class Rolldice extends Component{
    constructor(props){
    super(props);
    this.generateRandom=this.generateRandom.bind(this);
        this.state={
   rand1:this.props.icons[Math.floor(Math.random()*this.props.icons.length)],
   rand2:this.props.icons[Math.floor(Math.random()*this.props.icons.length)]
    }
   
    }
    static defaultProps={
        icons:["one","two","three","four","five","six"]
                }
 
    generateRandom(){
        var button= document.getElementsByClassName("Rolldice-mybtn")[0]
        var mydice1=document.getElementsByClassName("Dice")[0]
        var mydice2=document.getElementsByClassName("Dice")[1]
      button.innerText="Rolling...."
      mydice1.classList.add("Rolldice-shake")
      mydice2.classList.add("Rolldice-shake")
    setTimeout(()=>{
        this.setState({
            rand1:this.props.icons[Math.floor(Math.random()*this.props.icons.length)],
            rand2:this.props.icons[Math.floor(Math.random()*this.props.icons.length)]
    });
   button.innerText="Roll Dice"
   mydice1.classList.remove("Rolldice-shake")
   mydice2.classList.remove("Rolldice-shake")
    },1000)

         
    }
    render(){
return(
<div className='Rolldice'>
    <div className='Rolldice-dice'>
<Dice no={this.state.rand1}/>
<Dice no={this.state.rand2}/>
</div>
<button className='Rolldice-mybtn'onClick={this.generateRandom}>Roll Dice</button>
</div>
    
)

    }
}
export default Rolldice;