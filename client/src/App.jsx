import React, { Component } from 'react';



class App extends Component {
  constructor(){
    super();
    this.state = {
      data:"Hello State"
    }
  }
  componentWillMount(){
    
  }

  posting = (method)=>{
    return new Promise((resolve, reject)=>{
      fetch("http://localhost:5000", {
        method: method,
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify({a:1, b:2})
      }).then(data => {
      if(data){
        console.log(data);
        resolve(data)
      }
    }).catch( error=>{
      console.log("error");
      reject(error);
    })  
    })
    
  }
  getting = (method)=>{
    return new Promise((resolve, reject)=>{
      fetch("http://localhost:5000").then(data => {
      if(data){
        console.log(data);
        resolve(data)
      }
    }).catch( error=>{
      console.log("error");
      reject(error);
    })  
    })
    
  }
  render() { 
    return (  
      <div>
        <div>{this.state.data}</div>
        <button onClick = {() => this.posting("POST")}>POST</button>
        <button onClick = {() => this.getting("GET")}>GET</button>
      </div>
    );
  }
}
 
export default App;
