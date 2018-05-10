import React from 'react'


const Dropdown = (props) => {


  return (
    <select onChange={props.select} className="dropdown" style={{float:"right"}} placeholder="Interested in...">
      <option value="" disabled selected>Interested in...</option>
      <option value="marketing">Marketing</option>
      <option value="ecommerce">Ecommerce</option>
      <option value="Media">Media</option>
    </select>
  )
}

export default Dropdown

//   onClick onDragEnd onDragEnter onDragExit
// onDragLeave onDragOver onDragStart onDrop  onMouseEnter onMouseLeave
// onMouseMove onMouseOut onMouseOver onMouseUp
