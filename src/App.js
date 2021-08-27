import React from "react";
import PropTypes from "prop-types";
import { thisStringValue } from "es-abstract";

//react는 자동적으로 class component의 render method를 자동으로 실행
//state는 objec component의 data를 넣을 공간 데이터는 변한다

class App extends React.Component{
  state = {
    count: 0
  };
  add= () => {
    this.setState(current =>({ count: current.count + 1}));
  }; //javascript코드
  minus= () => {
    this.setState(current =>({ count: current.count - 1}));
  }
  render(){
    return<div>
       <h1>The number is: {this.state.count}</h1>
       <button onClick={this.add}>Add</button>
       <button onClick={this.minus}>Minus</button>
    </div>;
  }
}


export default App;