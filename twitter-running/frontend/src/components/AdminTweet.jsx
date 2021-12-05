import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Container, Row, Col, Card} from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel';
import Image from './la.jpg'
import Image1 from './chicago.jpg'
import Helmet from "react-helmet";
import SockJsClient from 'react-stomp';
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'



class HomeComponent extends Component {

    

    constructor(props) {
        super(props)

        this.handleScriptInject = this.handleScriptInject.bind(this);
         var stompClient = null;


        this.state = {
          myExternalLib: null,
                tweets: []
        }
    
    }

    componentDidMount(){
        
      
        axios.get(`https://baylor-board.herokuapp.com/tweets`)
      .then(res => {
        this.setState({ tweets: res.data.tweets});
      })


   
 var socket = new SockJS('https://baylor-board.herokuapp.com/gs-guide-websocket');
        this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, function (frame) {
            //setConnected();
            console.log('Connected: ' + frame);
            //this.stompClient.subscribe('/topic/greetings', function (greeting) {
              //  this.showGreeting(JSON.parse(greeting.body).content);
            //});
        });





    }


showGreeting(message) {
    }
 
send(str)
{
  console.log(str);
   this.stompClient.send("/app/hello", {}, JSON.stringify({'name': str }));

   axios.put( 'https://baylor-board.herokuapp.com/' + 'tweets/' + str + '/' + 'status?status=ACCEPTED' );

   console.log("changed on Database")

   document.getElementById(str).innerHTML="ACCEPTED";
   document.getElementById(str).style.backgroundColor = "#008000";

}
    
 handleScriptInject({ scriptTags }) {
        if (scriptTags) {
            const scriptTag = scriptTags[0];
            scriptTag.onload = () => {
                // I don't really like referencing window.
                console.log(`myExternalLib loaded!`, window.myExternalLib);
                this.setState({
                    myExternalLib: window.myExternalLib
                });
            };
        }
    }


    render() {
        return (
        

<div>
     
                <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                 <th> Tweet User</th>
                                    <th> Tweet Text</th>
                                    <th> Tweet Status</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tweets.map(
                                        tweets => 
                                        <tr key = {tweets.user}>
                                        <td> {tweets.user} </td>
                                             <td> {tweets.text} </td>   
<td>  <button id = {tweets.id} style={{marginLeft: "10px"}} className="btn btn-info">{tweets.status} </button> </td>
                                             <td>
 <button style={{marginLeft: "10px"}} onClick={ () => this.send(tweets.id)} className="btn btn-info">ACCEPT</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
          

              


            {/* Load the myExternalLib.js library. */}
            <Helmet
                script={[{ src: "https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.5.2/sockjs.min.js" }]}
                script={[{ src: "https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js" }]}
                // Helmet doesn't support `onload` in script objects so we have to hack in our own
                
                onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}

            />
            <div>
                {this.state.myExternalLib !== null
                    ? "We can display any UI/whatever depending on myExternalLib without worrying about null references and race conditions."
                    : "myExternalLib is loading..."}
            </div>

<div>
        <SockJsClient url='http://localhost:8080/gs-guide-websocket' topics={['/topics/all']}
            onMessage={(msg) => { console.log(msg); }}
            ref={ (client) => { this.clientRef = client }} />
      </div>




        </div>



        )
    }
}

export default HomeComponent
