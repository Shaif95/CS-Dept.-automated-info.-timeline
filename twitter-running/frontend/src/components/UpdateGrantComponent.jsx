import React, { Component } from 'react'
import GrantService from '../services/GrantService';
import './res/grant.css'
import axios from 'axios';

class UpdateGrantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            coordinator: '',
            description: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateGrant = this.updateGrant.bind(this);
    }

    componentDidMount() {
        GrantService.getGrantById(this.state.id).then((res) => {
            let Grant = res.data;
            this.setState({
                title: Grant.title,
                coordinator: Grant.coordinator,
                description: Grant.description
            });
        });
    }

    updateGrant = (e) => {
        e.preventDefault();
        let Grant = JSON.stringify({ title: this.state.title, coordinator: this.state.coordinator, description: this.state.description });
        console.log('id => ' + JSON.stringify(this.state.id));
        let old_id = this.state.id;
        console.log(Grant)

        axios.put('https://baylor-board.herokuapp.com/awards/' + old_id, Grant, { headers: { 'Content-Type': 'application/json' } });

        this.props.history.push('/awards');
    }

    changeFirstNameHandler = (Grant) => {
        this.setState({ title: Grant.target.value });
    }

    changeLastNameHandler = (Grant) => {
        this.setState({ coordinator: Grant.target.value });
    }

    changeEmailHandler = (Grant) => {
        this.setState({ description: Grant.target.value });
    }

    cancel() {
        this.props.history.push('/awards');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Award</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label style={{ color: 'black' }}> Title: </label>
                                        <input placeholder="title" name="title" className="form-control"
                                            value={this.state.title} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ color: 'black' }}> Coordinaotr: </label>
                                        <input placeholder="coordinator" name="coordinator" className="form-control"
                                            value={this.state.coordinator} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ color: 'black' }}> Description: </label>
                                        <input placeholder="description" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateGrant}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateGrantComponent
