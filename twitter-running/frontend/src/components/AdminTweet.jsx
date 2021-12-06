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
import config from '../services/config';
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'



class HomeComponent extends Component {

    

    constructor(props) {
        super(props)

        this.handleScriptInject = this.handleScriptInject.bind(this);
         var stompClient = null;


        this.state = {
          myExternalLib: null,
                tweets: [],
        }
    
    }

    componentDidMount(){
        
      
        axios.get(config.geturl() + "tweets")
      .then(res => {
        this.setState({ tweets: res.data.tweets});
      })


   
 


    }

change(str)
{
    if(str.message=="a")
    {
  axios.put( config.geturl() + 'tweets/' + str.name + '/' + 'status?status=ACCEPTED' );

   console.log("changed on Database")

   document.getElementById(str.name).innerHTML="ACCEPTED";
   document.getElementById(str.name).style.backgroundColor = "#008000";
}

if(str.message=="c")
    {
  axios.put( config.geturl() + 'tweets/' + str.name + '/' + 'status?status=PENDING' );

   console.log("changed on Database")

   document.getElementById(str.name).innerHTML="PENDING";
   document.getElementById(str.name).style.backgroundColor = "#008000";
}

}


send(str)
{
  //console.log(str);
   this.clientRef.sendMessage("/app/user-all",  JSON.stringify({

    'name': str,
    'message': "a"

    }));

 

}

send2(str)
{
  //console.log(str);
   this.clientRef.sendMessage("/app/user-all",  JSON.stringify({

    'name': str,
    'message': "c"

    }));

 

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
                                    <th> ACCEPT </th>
                                    <th> PENDING </th>
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

                                             <td>
 <button style={{marginLeft: "10px"}} onClick={ () => this.send2(tweets.id)} className="btn btn-info">PENDING</button>
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
                    : ""}
            </div>

<div>
        <SockJsClient 
  url = 'https://baylor-board.herokuapp.com/websocket-chat/'
  topics={['/topic/user']} 
  onConnect={console.log("Connection established!")} 
  //onDisconnect={console.log("Disconnected!")}
  onMessage={(msg) => {   

    console.log(msg.name);
    this.change(msg);
    

   } }
  ref={(client) => {
                                  this.clientRef = client
                              }}  
/> 
      </div>




        </div>



        )
    }
}

export default HomeComponent
