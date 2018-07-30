import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actionCreators from "./actions/index.js";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
  	img: '',
    name: '',
    id: null,
    depart: '',
    dropDownId: 'empId',
    dropDownDepart: 'depart',
    hr: [1,2,3,4,5],
    engr: [6,7,8,9,10]
  }

  componentWillReceiveProps (nextProps) {
  	if(nextProps.data) {
      let {first_name, last_name, id, avatar} = nextProps.data.data
	    this.setState({
	    	img: avatar,
        name: first_name + ' ' + last_name,
        id: id
	    })
	} else {
		this.setState({
	    	img: '',
        name: '',
        id: null,
        loading: false,
        depart: ''
	    })
    this.reset(this.state.dropDownId, this.state.dropDownDepart)
	 }
   this.setState({
    loading: false
   })
  }

  // Fetching data from backend
  handleGetData(){
    if (this.state.id) {
      this.props.getData(this.state.id)
      this.setState({loading:true})
    }
  }

  // Get Selected Id from dropdown
  handleId(e) {
    if(e.target.value > 0) {
      this.setState({
        id: parseInt(e.target.value),
        dropDownId: e.target.id
      })
    } else {
      this.setState({
        id: null
      })
    }
  }

  // Select Department
  handleDepart(e) {
    if (e.target.value == "HR") {
      this.setState({
        depart: e.target.value
      })
    } else if(e.target.value == "ENGINEERING") {
      this.setState({
        depart: e.target.value
      })
    }
  }

  // Reset DropDown
  reset(dropDownId, dropDownDepart) {
    let id = document.getElementById(dropDownId);
    let depart = document.getElementById(dropDownDepart);
    id.selectedIndex = 0;
    depart.selectedIndex = 0;
  }

  render() {
    let options = null
    if (this.state.depart == "ENGINEERING") {
      options = this.state.engr.map((item, key) =>
          <option value={item} key={key}>{item}</option>
      )
    } else if (this.state.depart == "HR") {
      options = this.state.hr.map((item, key) =>
          <option value={item} key={key}>{item}</option>
      )
    }

    return (
      <div className="App">
        <label>Departments: </label>
        <select id="depart" onChange={this.handleDepart.bind(this)}>
          <option value="0">Please select</option>
          <option value="HR">HR</option>
          <option value="ENGINEERING">ENGINEERING</option>
        </select>
        <label> Employee Id: </label>
        <select id="empId" onChange={this.handleId.bind(this)}>
          <option value="0">Please select</option>
          {options}
        </select>
        <button style={{margin: '10px'}} onClick={this.handleGetData.bind(this)}>GetDetails</button>
        <button onClick={this.props.clearData}>Clear</button>
       {this.props.data &&
        <div className="logo">
          <img src={this.state.img}/>
          <span style={{paddingRight: '0px'}}>
            <label>Id: </label>{this.state.id}
          </span>
          <span style={{paddingLeft: '100px'}}>
            <label>Name: </label>{this.state.name}
          </span>
        </div>
      }
      {this.state.loading &&
       <div>
        <p>loading...</p>
       </div>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return	{
		data: state.data
	}
}

export default connect(mapStateToProps, actionCreators)(App);
