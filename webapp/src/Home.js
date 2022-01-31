import React from 'react';
import './Home.css';

//have a class called Home which is a react component
class Home extends React.Component { 

  //whenever a class is built a constructor is called.
  constructor() {
    super();
    //react states are dynamic
    this.state = { 
      testVariable: 'garbanzo'
    };
    
  }

  //this is where external data is collected
  componentDidMount()
  {
    
  }

  render()
  {  
    return (
      <div className="pageContainer">
        <h1>dianamilena35mm.blog</h1>
        <h1>dianamilena35mm.blog</h1>
      </div>
    )
    
    
          
      
  }
}
export default Home;
