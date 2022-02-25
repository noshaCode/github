import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import User from './component/User';
import Repositories from './component/Repositories';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      respositorie :[]

    }
  }
getRepositories =() => {
  axios.get("http://api.github.com/users/noshacode/repos?client_id=5adc8b1e744f10507b49&client_secret=877b6f31c0b7bcf63ca1b9b63db68cf49215635b&sort=created")
  .then(res=>{
    console.log(res.data)
    this.setState({
      respositorie :res.data
    })
    .catch(err=>{
      console.log(err)
    })
  })
}


  getUser = () => {
    axios.get("http://api.github.com/users/noshacode?client_id=5adc8b1e744f10507b49&client_secret=877b6f31c0b7bcf63ca1b9b63db68cf49215635b&sort=created")
      .then(res => {
        this.setState({
          user: res.data
        })

      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount = () => {
    this.getUser()
    this.getRepositories()
    

  }


  render() {
    
    return (

      <div className='App'>
       
       { this.state.user && <User user={this.state.user}/>}
      {this.state.respositorie && <Repositories myrRepos={this.state.respositorie}/>}
      
      </div>
    )
  }







}





export default App;
