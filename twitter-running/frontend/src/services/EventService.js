import axios from 'axios';
import config from '../services/config';

const Event_API_BASE_URL = config.geturl() + "events";

class EventService {

    getEvent(){
        console.log(Event_API_BASE_URL);
        return axios.get(Event_API_BASE_URL);
    }

    createEvent(em){
        return axios.post(Event_API_BASE_URL, em);
    }

    getEventById(emId){
        return axios.get(Event_API_BASE_URL + '/' + emId);
    }

    updateEvent(em, emId){
        return axios.put(Event_API_BASE_URL + '/' +  emId,  em);
    }

    deleteEvent(emId){
        return axios.delete(Event_API_BASE_URL + '/' + emId);
    }
}

export default new EventService()