import React, { Component } from 'react';
import axios from "axios";
import './styles/App.css';
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
  axios.get(`http://api.github.com/users/${process.env.REACT_APP_user}/repos?client_id=${process.env.REACT_APP_user}&client_secret=${process.env.REACT_APP_client_id}&sort=created`)
  .then(res=>{
   
    this.setState({
      respositorie :res.data
    })
  }).catch(err=>{
      console.log(err)
    })
}


  getUser = () => {
    axios.get(`http://api.github.com/users/${process.env.REACT_APP_user}?client_id=${process.env.REACT_APP_user}&client_secret=${process.env.REACT_APP_client_id}&sort=created`)
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
