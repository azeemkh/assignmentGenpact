import React from 'react';


const DropDown = (props) => (
  <div>
    <label>Departments: </label>
      <select id="depart" onChange={props.handleDepart}>
        <option value="0">Please select</option>
        <option value="HR">HR</option>
        <option value="ENGINEERING">ENGINEERING</option>
      </select>
      <label> Employee Id: </label>
      <select id="empId" onChange={props.handleId}>
        <option value="0">Please select</option>
        {props.options}
      </select>
      <button style={{margin: '10px'}} onClick={props.handleGetData}>GetDetails</button>
      <button onClick={props.clearData}>Clear</button>
  </div>
)


export default DropDown;