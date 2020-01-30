import React from 'react';



class AddSideBar extends React.Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this); 
 }
 
 goBack(){
     this.props.history.goBack();
 }
  render(){
    
    return (
      <ul className="detailsSideBar">
        <li><button onClick={this.goBack}> Go Back</button></li>
      </ul>
        
         
      
    );
  }
}

export default AddSideBar;