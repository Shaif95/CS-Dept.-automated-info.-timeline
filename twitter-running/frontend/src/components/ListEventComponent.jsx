import React, { Component } from 'react'
import EventService from '../services/EventService'
import './res/grant.css'

class ListEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                event: []
        }
        this.addEvent = this.addEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    deleteEvent(id){
        EventService.deleteEvent(id).then( res => {
            this.setState({event: this.state.event.filter(event => event.id !== id)});
        });
    }
    viewEvent(id){
        this.props.history.push(`/view-events/${id}`);
    }
    editEvent(id){
        this.props.history.push(`/update-events/${id}`);
    }

    componentDidMount(){
        EventService.getEvent().then((res) => {
            this.setState({ event: res.data.events});
        });
    }

    addEvent(){
        this.props.history.push('/add-events/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Event List</h2>
                 <div className = "row">
                    <button style={{marginLeft: "20px"}} className="btn btn-primary" onClick={this.addEvent}> Add Event</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table style={{marginLeft: "20px"}} className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Event Title</th>
                                    <th> Event Coordinator</th>
                                    <th> Event Description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.event.map(
                                        event => 
                                        <tr key = {event.id}>
                                             <td> {event.title} </td>   
                                             <td> {event.coordinator}</td>
                                             <td> {event.description}</td>
                                             <td>
 <button onClick={ () => this.editEvent(event.id)} className="btn btn-info">Update </button></td>
<td><button style={{marginLeft: "10px"}}onClick={()=>this.deleteEvent(event.id)}className="btn btn-danger">Delete</button></td>
<td> <button style={{marginLeft: "10px"}} onClick={ () => this.viewEvent(event.id)} className="btn btn-info">View </button>
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

export default ListEventComponent
