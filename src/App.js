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
    dropDownId: 'empId'
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
        loading: false
	    })
    this.reset(this.state.dropDownId)
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
    let dropDownId = e.target.id == 'depart' ? 'empId' : 'depart'
    this.reset(dropDownId)
  }

  // Reset DropDown
  reset(dropDownId) {
    let dropDown = document.getElementById(dropDownId);
    dropDown.selectedIndex = 0;
  }

  render() {
    return (
      <div className="App">
        <label>Departments: </label>
        <select id="depart" ref="departInput" onChange={this.handleId.bind(this)}>
          <option value="0">Please select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label> Employee Id: </label>
        <select id="empId" ref="empIdInput" onChange={this.handleId.bind(this)}>
          <option value="0">Please select</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
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
