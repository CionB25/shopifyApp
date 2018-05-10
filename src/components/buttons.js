import React from 'react';
import Dropdown from './dropdown'
import ThankYou from './thankYous'

const Button = (props) => {
  
  let forms
  let button

    if (props.validEmail === "") {

      button =  <div>
        <p className='email-warning'>Please enter a valid email address</p>
        <button>Sign up now</button>
      </div>

    } else {

      button = <div>
          <button className="signup">Sign up now</button>
        </div>

    }

    if (props.email === "") {

      forms =  <form onSubmit={props.submit}>
          <p className="free-tips">Subscribe for free marketing tips</p>
          <span className="inputs">
            <input className="email-biz" onChange={props.change} placeholder={"Email Address"} style={{float:"left"}}  value={props.inputVal}/>
            <Dropdown select={props.select}/>
          </span>
          {button}
        </form>
    } else {

      if (props.email !== "Today") {

        forms =  <form onSubmit={props.submit}>
            <p className="free-tips">Subscribe for free marketing tips</p>
            <span className="inputs">
              <input className="email-biz" onChange={props.change} placeholder={"Email Address"} style={{float:"left"}}  value={props.inputVal}/>
              <Dropdown select={props.select}/>
            </span>
            <div>
                <button className="submit">Submitting...</button>
              </div>
          </form>
        } else {

          forms = <ThankYou/>

        }
    }



  return (
    <div>
      {forms}
    </div>

  )
}

export default Button
