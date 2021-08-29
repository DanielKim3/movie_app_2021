import React from "react";
import PropTypes from "prop-types";
import { thisStringValue } from "es-abstract";

//react는 자동적으로 class component의 render method를 자동으로 실행
//state는 objec component의 data를 넣을 공간 데이터는 변한다
//setState를 호출할때마다 react는 새로운 state와 함께 render function을 호출한다.


class App extends React.Component { 
 state = {
   isLoading: true
 };
 componentDidMount(){
   setTimeout(() => {
    this.setState({ isLoading:false});
   }, 6000);
 }
  render() {
    const { isLoading } = this.state;
    return <div>{this.state.isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
    
  
  


export default App;