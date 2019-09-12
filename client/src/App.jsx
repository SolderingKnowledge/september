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

  requesting = (method)=>{
    return new Promise((resolve, reject)=>{
      fetch("http://localhost:3001", {
      method: method,
      headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({a:1, b:2})
    }).then(data => {
      if(data){
        resolve(data)
        console.log(data);
      }
    }).catch( error=>{
      reject(error);
    })  
    })
    
  }
  render() { 
    return (  
      <div>
        <div>{this.state.data}</div>
        <button onClick = {() => this.requesting("POST")}></button>
      </div>
    );
  }
}
 
export default App;
