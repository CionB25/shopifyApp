import React from 'react';
import Dropdown from './dropdown'
import ThankYou from './thankYous'

const Button = (props) => {
  console.log(props);
  let forms
  let button


  if (props.email === "") {

    forms =  <form onSubmit={props.submit}>
        <p className="free-tips">Subscribe for free marketing tips</p>
        {button}
      </form>
  } else {
    forms = <ThankYou/>
  }

// forms =  <form onSubmit={props.submit}>
//     <p className="free-tips">Subscribe for free marketing tips</p>
//     <span className="inputs">
//       <input className="email-biz" onChange={props.change} placeholder={"Email Address"} style={{float:"left"}}  value={props.inputVal}/>
//       <Dropdown select={props.select}/>
//     </span>
//
//
//     <div>
//       <button>Sign up now</button>
//     </div>
//
//     <div>
//       <button>Submitting...</button>
//     </div>
//
//   </form>


  return (
    <div>
      {forms}
    </div>

  )
}

export default Button
