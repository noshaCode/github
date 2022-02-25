
import React, { Component } from 'react'
import './user.css';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (


            <div className="usercontainer" >

                <div className='box' >
                    <img className='img' src={this.props.user.avatar_url} alt="" />
                </div>
                <div className='box'>
                    <div className='border'>
                        <p className="p"><strong>Fullname:</strong> {this.props.user.name ? this.props.user.name : "Not available"}</p>
                    </div>
                    <div className='border'>
                        <p className="p"><strong>Username:</strong> {this.props.user.login}</p>
                    </div>
                    <div className='border'>
                        <p className="p"><strong>Location:</strong> {this.props.user.location}</p>
                    </div>
                    <div className='border'>
                        <p className="p"><strong>Email Address:</strong> {this.props.user.email ? this.props.user.email : "Not available"}</p>
                    </div>
                </div>

            </div>

        )
    }
}
export default User;