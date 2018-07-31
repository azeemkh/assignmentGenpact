import React from 'react';

const Details = (props) => (
		<div className="logo">
          <img src={props.img}/>
          <span style={{paddingRight: '0px'}} className="test">
            <label>Id: </label>{props.id}
          </span>
          <span style={{paddingLeft: '100px'}}>
            <label>Name: </label>{props.name}
          </span>
        </div>
    )

export default Details