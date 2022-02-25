
import React, { Component } from 'react'

class Repositories extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <hr></hr>
                <h3>User Repositories</h3>
                <div className="container" >

                    {/* <div className='border'> */}
                    {/* <p className="p"> <a href="#">reactapp:</a>{this.props.user.login}</p> */}

                    {this.props.myrRepos.map((repo, index) => {
                        return (
                        <div className='border' key={repo.id}><a href={repo.html_url}>{repo.name}</a> 
                        </div>
                        )

                    })}
            </div>
            </div>
        )
    }
}

export default Repositories;