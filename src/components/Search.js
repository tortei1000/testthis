import React, { Component } from 'react';



export default class Search extends Component {
  constructor() {
    super();
    
    this.state = {
      filterText: '',
     
    };

  
  }
  
  handleChange(e){
    console.log(e.target.value)
    this.setState({filterText:e.target.value})
    
   }
  
  
  render() {
    
    return (
      <section >

        <div className="search_container">
          <input className="search_input" onKeyPress={(e)=>{
            
            if(e.key === 'Enter'){ 
            this.props.searchRecipe(this.state.filterText)}}} 
          onChange={(e)=>this.handleChange(e)} placeholder="This is a query" />
          
          <button className="fas fa-search" onClick={()=>this.props.search(this.state.filterText)}>search</button>
          
        </div>
        
      </section>
    )
  }
}