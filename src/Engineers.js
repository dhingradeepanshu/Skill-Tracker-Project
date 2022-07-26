import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import EngineerDetails from './EngineerDetails'
import axios from 'axios'

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      boolval: false
    }

    this.onSubmit1 = this.onSubmit1.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.onSubmit3 = this.onSubmit3.bind(this);
  }

  //function which is called the first time the component loads
  // componentDidMount() {
  //   this.getCustomerData();
  // }

  //Function to get the Customer Data from json
  onSubmit1(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + event.target.Name.value);
    
    // console.log(this.state.criteria + this.state.criteria)
    // this.setState({criteria: "Name", criteriaValue: event.target.Name.value})
    console.log(event.target.Name.value)
    fetch("http://localhost:8080/skill-tracker/api/v1/admin/Name/"+event.target.Name.value)
    .then((response) => response.json())
    .then((json) => {
      console.log("Setting state")
      console.log(json)
      this.setState({
        items: json,
        boolval: true
    });
    })
    
    
  };

  onSubmit2(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + event.target.Name.value);
    
    // console.log(this.state.criteria + this.state.criteria)
    // this.setState({criteria: "Name", criteriaValue: event.target.Name.value})
    console.log(event.target.Name.value)
    fetch("http://localhost:8080/skill-tracker/api/v1/admin/AssociateId/"+event.target.Name.value)
    .then((response) => response.json())
    .then((json) => {
      console.log("Setting state")
      console.log(json)
      this.setState({
        items: json,
        boolval: true
    });
    })
    
    
  };


  onSubmit3(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + event.target.Name.value);
    
    // console.log(this.state.criteria + this.state.criteria)
    // this.setState({criteria: "Name", criteriaValue: event.target.Name.value})
    console.log(event.target.Name.value)
    fetch("http://localhost:8080/skill-tracker/api/v1/admin/Skill/"+event.target.Name.value)
    .then((response) => response.json())
    .then((json) => {
      console.log("Setting state")
      console.log(json)
      this.setState({
        items: json,
        boolval: true
    });
    })
    
    
  };

  render() {
    // if (!this.state.result)
    //   return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-1"></div>
      <div className="col-md-3">
      <Panel className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Search By Name</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <form onSubmit={this.onSubmit1}>
                <input type="text" name="Name" class="form-control" placeholder='Name'/>
                <br/>
                <input type="submit" value="Submit"  class="btn btn-primary"/>
              </form>
              </Panel.Body>
          </Panel>
          <Panel className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Search By Associate Id</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <form onSubmit={this.onSubmit2}>
                <input type="text" name="Name" class="form-control" placeholder='Associate ID'/>
                <br/>
                <input type="submit" value="Submit"  class="btn btn-primary"/>
              </form>
              </Panel.Body>
          </Panel>
          <Panel className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Search By Skill</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <form onSubmit={this.onSubmit3}>
                <input type="text" name="Name" class="form-control" placeholder='Skill'/>
                <br/>
                <input type="submit" value="Submit"  class="btn btn-primary"/>
              </form>
              </Panel.Body>
          </Panel>
        {

          // <Panel className="centeralign">
          //   <Panel.Heading>
          //     <Panel.Title componentClass="h3">Search By Name</Panel.Title>
          //   </Panel.Heading>
          //   <Panel.Body>
          //     <form>
          //       <input type="text" value="Name" class="form-control"/>
          //       <br/>
          //       <input type="submit" value="Submit"  class="btn btn-primary"/>
          //     </form>
          //     </Panel.Body>
          // </Panel>

          

          

              

          // this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.name} className="centeralign">
          //   <Panel.Heading>
          //     <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
          //   </Panel.Heading>
          //   <Panel.Body>
          //     <p>{customer.email}</p>
          //     <p>{customer.phone}</p>
              
          //     <form onSubmit={this.handleSubmit}>
          //       <label>
          //         Name:
          //         <input type="text" value={this.state.value} onChange={this.handleChange} />
          //       </label>
          //       <input type="text" value="Name" onChange={this.handleChange} />
          //       <input type="submit" value="Submit" />
          //     </form>
              
          //     <Button bsStyle="info" onClick={() => this.setState({selectedCustomer: customer.id})}>

          //       Click to View Details

          //     </Button>

          //   </Panel.Body>
          // </Panel>)
        }
      </div>
      <div className="col-md-6">
        
      <EngineerDetails val={this.state.items}/>
       

      </div>
    </div>)
  }

}
