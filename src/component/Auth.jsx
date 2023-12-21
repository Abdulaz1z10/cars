import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Auth extends Component {
  state={
    username: "",
    password: ""
  }
  handleUsername=(event)=>{
    this.setState({
      username: event.target.value
    })
  }
  handlePassword=(event)=>{
    this.setState({
      password: event.target.value
    })
  }
  login =()=>{
    const {username, password} = this.state
    console.log(username)
    console.log(password);
  }
  render() {
    return (
      <div className='container'>
        <div className='row mt-4'>
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-header">
            <h1 className='text-center'>Login</h1>
          </div>
          <div className="card-body">
            <input type="text" onChange={this.handleUsername} placeholder='Username' className='form-control' />
            <input type="text" onChange={this.handlePassword} placeholder='Password' className='form-control' />
          </div>
          <div className="card-footer d-flex justify-content-center">
            <div className="row">
              <button className='btn btn-success' onClick={this.login}>Login</button>
              <Link to='/cars' className='btn btn-danger'>Cars page</Link>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    )
  }
}
