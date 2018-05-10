import React, { Component } from 'react';
import Button from './buttons'
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      setEmail: "jt",
      inputVal: "",
      selectVal: "",
      validEmail: ""
    }
  }

  change = (event) => {
    event.preventDefault()
    this.setState({
      inputVal: event.target.value
    }, this.validate(event.target.value))
  }

  select = (event) => {
    event.preventDefault()
    this.setState({
      selectVal: event.target.value
    }, console.log(this.state.selectVal))
  }

  submit = (event) => {
    event.preventDefault()
    this.setState({
      setEmail: this.state.validEmail
    })
    console.log(this.state.validEmail);
    console.log(this.state.selectVal);
  }

  validate = (email) => {

   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   if (reg.test(email) == true)
   {
       this.setState({
         validEmail: email
       }, console.log(this.state.validEmail))
   }
  }


  render() {


    return (
      <div className="App">
        <div className="box">
          <div className="header">
            <h2 className="title">Stay up to date with ecommerce trends  with Shopify's Newsletter</h2>
            <p className="dash">__</p>
          </div>
            <Button email={this.state.setEmail} inputVal={this.state.inputVal} change={this.change} select={this.select} submit={this.submit}/>
        </div>
      </div>
    );
  }
}

export default App;
