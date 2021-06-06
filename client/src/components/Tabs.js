import React, { Component } from 'react'
import Table1 from './Table1'
import Table2 from './Table2'
import Table3 from './Table3'
import Table4 from './Table4'




class Tabs extends Component {
    

    constructor(props) {
      super(props)
    
      this.state = {
        error: null,
        isLoaded: true,
        name: '',
        year: '',
        year2: '',
        category: '',
        order:'',
        apiResponse1: [],
        apiResponse2: [],
        apiResponse3: [],
        apiResponse4: []
      }
      
      this.updateState = this.updateState.bind(this);
      }
  
     

    updateState(e) {
      let nam = e.target.name;
      let val = e.target.value;
      this.setState({[nam]: val});
   }


    
   handleSubmit = e => {
    e.preventDefault();
    const name1 = this.state.name

    fetch("/search_by_name_API/name="+name1)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          
          apiResponse1: result
          
        });
         
        console.log(this.state.apiResponse1)
      
      },
     
      (error) => {
        this.setState({
          
          error
        });
      }
    )
  };


  handleSubmit2 = e => {
    e.preventDefault();
    const year1 = this.state.year

    fetch("/search_by_year_API/year="+year1)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          
          apiResponse2: result
          
        });
       
        console.log(this.state.apiResponse2)
        
      
      },
     
      (error) => {
        this.setState({
          
          error
        });
      }
    )
  };





  handleSubmit3 = e => {
    e.preventDefault();
    const year3 = this.state.year2
    const category2 = this.state.category

    fetch("/search_by_year_category_API/year="+year3+"/category="+category2)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          
          apiResponse3: result
          
        });
       
        console.log(this.state.apiResponse3)
      
      },
     
      (error) => {
        this.setState({
          
          error
        });
      }
    )
  };


  

  handleSubmit4 = e => {
    e.preventDefault();
    const order2 = this.state.order
    

    fetch("/search_by_order_API/order="+order2)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          
          apiResponse4: result
          
        });
        
        console.log(this.state.apiResponse4)
      
      },
     
      (error) => {
        this.setState({
          
          error
        });
      }
    )
  };





    render() {
        const { error, isLoaded } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
         
          
          
        return (
            <div>

<div>
            <ul className="nav nav-tabs nav-pills nav-justified">
    <li className="active"><a data-toggle="tab" href="#home">Name</a></li>
    <li><a data-toggle="tab" href="#menu1">Year</a></li>
    <li><a data-toggle="tab" href="#menu2">Year & Category</a></li>
    <li><a data-toggle="tab" href="#menu3">Sort Alphabetically</a></li>
  </ul>
  
  <div className="tab-content">

    <div id="home" className="tab-pane fade in active">
     
    <form onSubmit={this.handleSubmit}>

      <h3 style={{textAlign: 'center'}}>Enter  Nobel prize winner name</h3>
    <div style={{textAlign: 'center'}}>
      <input type = "text" name="name" value = {this.state.name} 
               onChange = {this.updateState} />
            
       </div>
       <br />
            
            <div className="text-center">
            <button className="btn btn-success" type="submit">
                Search
              </button>

            </div>
             
          

       <br /> </form> <br /> 
       <Table1 apiResponse1={this.state.apiResponse1} />
    </div>
    


    <div id="menu1" className="tab-pane fade">
    <form onSubmit={this.handleSubmit2}>

           <h3 style={{textAlign: 'center'}}>Enter Year</h3>
           <div style={{textAlign: 'center'}}>
           <input type = "text" name="year" value = {this.state.year} 
                    onChange = {this.updateState} />
      
            </div>
            <br />
            <div className="text-center">
            <button className="btn btn-success" type="submit">
                Search
              </button>

            </div>

            <br /> </form> <br /> 
 

       <Table2  apiResponse2={this.state.apiResponse2} />


    </div>





    <div id="menu2" className="tab-pane fade">

    <form onSubmit={this.handleSubmit3}>
        <div className="col-md-6">
        
        <div className="form-group">
        <h3>Enter Year</h3>
        <input type = "text" name="year2" className="form-control" value = {this.state.year2} 
               onChange = {this.updateState} />
               </div>
        </div>

        <div className="col-md-6">
        <div className="form-group">
        <h3>Enter Category</h3>
        <input type = "text" name="category" className="form-control" value = {this.state.category} 
               onChange = {this.updateState} />
               </div>
        </div>


        <br />
        <div className="text-center">
            <button className="btn btn-success" type="submit">
                Search
              </button>

            </div>

            <br /> </form> <br /> 
 

       <Table3  apiResponse3={this.state.apiResponse3} />




      
    </div>
    


    <div id="menu3" className="tab-pane fade">
      <br />
      <h3 style={{textAlign: 'center'}}>

          Choose the order

      </h3>
      <br />
      <form onSubmit={this.handleSubmit4}>
      <div onChange={this.updateState} className="inputField">

            <input className="radio-input" type="radio" name="order" value="Ascending" />
            <label className="radio-label r1" >Ascending</label>
            <input className="radio-input" type="radio" name="order" value="Descending" />
            <label className="radio-label">Descending</label>
      </div>

      <br />
      <div className="text-center">
            <button className="btn btn-success" type="submit">
                Search
              </button>

            </div>


      <br /> </form> <br /> 
        
        <Table4 apiResponse4={this.state.apiResponse4} />
      
    </div>
























































































    


    





  </div>
  
        </div>
                












            </div>
        )
    }
  }
}

export default Tabs
