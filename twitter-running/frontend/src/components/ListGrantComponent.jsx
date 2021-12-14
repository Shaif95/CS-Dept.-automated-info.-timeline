import React, { Component } from 'react'
import GrantService from '../services/GrantService'
import ReactHtmlParser from 'react-html-parser'; 
import './res/grant.css'

class ListGrantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Grant: []
        }
        this.addGrant = this.addGrant.bind(this);
        this.editGrant = this.editGrant.bind(this);
        this.deleteGrant = this.deleteGrant.bind(this);
    }

    deleteGrant(id){
        GrantService.deleteGrant(id).then( res => {
            this.setState({Grant: this.state.Grant.filter(Grant => Grant.id !== id)});
        });
    }
    viewGrant(id){
        this.props.history.push(`/view-grants/${id}`);
    }
    editGrant(id){
        this.props.history.push(`/update-grants/${id}`);
    }

    componentDidMount(){
        GrantService.getGrant().then((res) => {
            this.setState({ Grant: res.data.awards});
        });
    }

    addGrant(){
        this.props.history.push('/add-Grants/_add');
    }

    render() {
        return (
            <div>
              &emsp;
                 <h2 className="text-center">Awards List</h2>
                 <div className = "row">
                    <button style={{marginLeft: "20px"}}  className="btn btn-primary" onClick={this.addGrant}> Add Award</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table style={{marginLeft: "20px"}}  className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Award Title</th>
                                    <th> Award Description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Grant.map(
                                        Grant => 
                                        <tr key = {Grant.id}>
                                             <td> {Grant.title} </td>   
                                             <td>{ ReactHtmlParser  ( Grant.description) }</td>
                                             <td>
<button onClick={ () => this.editGrant(Grant.id)} className="btn btn-info">Update </button></td>
<td><button style={{marginLeft:"10px"}}onClick={()=>this.deleteGrant(Grant.id)}className="btn btn-danger">Delete</button></td>
<td><button style={{marginLeft: "10px"}} onClick={ () => this.viewGrant(Grant.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListGrantComponent
