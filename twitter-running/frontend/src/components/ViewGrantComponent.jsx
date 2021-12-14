import React, { Component } from 'react'
import GrantService from '../services/GrantService'
import ReactHtmlParser from 'react-html-parser'; 
import './res/grant.css'

class ViewGrantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Grant: {}
        }
    }

    componentDidMount(){
        GrantService.getGrantById(this.state.id).then( res => {
            this.setState({Grant: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div  style={{color: 'black'}} className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> { this.state.Grant.title }</h3>
                    <div className = "card-body">
                        {/* <div className = "row">
                            <label style={{color: 'black'}} > Awards Title: </label>
                            <div> { this.state.Grant.title }</div>
                        </div> */}
            
                        <div className = "row">
                            {/* <label style={{color: 'black'}} > Awards Description: </label> */}
                            <div>  { ReactHtmlParser  ( this.state.Grant.description) }</div>
                        </div>

                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewGrantComponent
