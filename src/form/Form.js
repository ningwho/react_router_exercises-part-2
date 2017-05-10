/*
For this form, we'll bind the form inputs' values to the store state values.
Although we could also use `this.state` and `this.setState` for forms, we'll
use the store state to get more practice.

For each input:

1. Bind the onChange property to trigger an function prop
2. Create the action creator that matches the function prop
3. Update the reducer to return the new state
4. Bind the state value to the coorsponding input value to the inputs value change
*/

import React from 'react'
import * as ReactRedux from 'react-redux';
import * as actions from './Form.actions';

class Form extends React.Component {
  constructor() {
    super();
    // add code here

  }
  render() {
    return (
      <div>
        <div>
          <h1>This is a form</h1>
          <div>
            <label>Name</label><br/>
            <input onChange={(event)=>this.props.changeName(event)} type="text"/>
          </div>
          <div>
            <label>Email</label><br/>
            <input onChange={(event)=>this.props.changeEmail(event)} type="text"/>
          </div>
          <div>
            <label>Phone</label><br/>
            <input onChange={(event)=>this.props.changePhone(event)} type="text"/>
          </div>
          <button>Submit</button>
        </div>
        <div>
          <h2>Current Values</h2>
          <label>Name: {this.props.name}</label><br/>
          <label>Email: {this.props.email}</label><br/>
          <label>Phone: {this.props.phone}</label><br/>
        </div>
      </div>
    );
  }
}

const FormContainer = ReactRedux.connect(
  state => state.form,
  actions
)(Form);

export default FormContainer;
