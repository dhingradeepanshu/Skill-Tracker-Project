import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class EngineerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    console.log(this.props.val)
    // this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      console.log("I'm here")
      console.log(this.props.val)
      this.setState({Details: this.props.val})
      // this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  // getCustomerDetails(id) {
  //   axios.get('assets/samplejson/customer' + id + '.json').then(response => {
  //     this.setState({customerDetails: response})
  //   })
  // };

  // getNameData(){

  // }

  render() {
    if (!this.state.Details)
      return (
        // <p>Loading</p>
      <Panel>
        <Panel.Heading>
        <Panel.Title componentClass="h3">Results Will Appear Here</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
         
        </Panel.Body>
      </Panel>

      )
    if(!this.state.Details.length)
    return(
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title>Details</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {
            <Panel>
            <Panel.Heading>
              <Panel.Title>{"User ID: " + this.state.Details.userID}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>Name: {this.state.Details.name}</p>
              <p>Associate ID: {this.state.Details.associateID}</p>
              <p>Email: {this.state.Details.email}</p>
              <p>Mobile: {this.state.Details.mobile}</p>
              <p>Date Added: {this.state.Details.dateAdded}</p>
              <p>Date Updated: {this.state.Details.dateUpdated}</p>
              {
                this.state.Details.skills.map((skill) =>
                  <p>Skill Name: {skill.skillName} , Expertise Level: {skill.expertiseLevel}</p>
                )
              }

            </Panel.Body>
          </Panel>
          }
        </Panel.Body>

      </Panel>
    )
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Details</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
        
          {
            
            this.state.Details.map((engineer) =>
            <Panel>
              <Panel.Heading>
                <Panel.Title>{"User ID: " + engineer.userID}</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <p>Name: {engineer.name}</p>
                <p>Associate ID: {engineer.associateID}</p>
                <p>Email: {engineer.email}</p>
                <p>Mobile: {engineer.mobile}</p>
                <p>Date Added: {engineer.dateAdded}</p>
                <p>Date Updated: {engineer.dateUpdated}</p>
                {
                  engineer.skills.map((skill) =>
                    <p>Skill Name: {skill.skillName} , Expertise Level: {skill.expertiseLevel}</p>
                  )
                }

              </Panel.Body>
            </Panel>
            // <p></p>
            
            
            
            
            )
          }
          {/* <p>{this.state.Details[0].name}</p> */}
          {/* <p>Name : {this.state.customerDetails.data.name}</p>
          <p>Email : {this.state.customerDetails.data.email}</p>
          <p>Phone : {this.state.customerDetails.data.phone}</p>
          <p>City : {this.state.customerDetails.data.city}</p>
          <p>State : {this.state.customerDetails.data.state}</p>
          <p>Country : {this.state.customerDetails.data.country}</p>
          <p>Organization : {this.state.customerDetails.data.organization}</p>
          <p>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
          <p>Additional Info : {this.state.customerDetails.data.additionalInfo}</p> */}
        </Panel.Body>
      </Panel>
    </div>)
  }
}
