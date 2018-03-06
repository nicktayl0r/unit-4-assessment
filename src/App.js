import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activeI: 0, 
      circles: [1, 2, 3, 4]
    }
  }
  chooseCircle = (x) => {
    this.setState({activeI: x})
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector activeI={this.state.activeI}
                          circles={this.state.circles}
                          chooseCircle={this.chooseCircle}/>
          <Circles  activeI={this.state.activeI}
                    circles={this.state.circles}/>
        </main>
      </div>
    );
  }
}



const CircleSelector = (props) => {
  console.log(props.activeI)
  let activeI = props.activeI;
  
  let buttons = props.circles.map((c, i) => 
      <div key={i}>
        <button  onClick={() => props.chooseCircle(i)} className={i === activeI ? 'selected': ''}>{i === activeI ? `CIRCLE ${c} SELECTED`: `SELECT CIRCLE ${c}`}</button>
      </div>

  );

  return(
    <div className="CircleSelector">
      {buttons}
    </div>
  )
}
const Circles = (props) => {

  let circles = props.circles.map((c, i) => 
  
    <div className={i === props.activeI ? 'selected': ''} >{c}</div>
);
  return(
  <div className="Circles">
  {circles}
  </div>
  )
}
export default App;
