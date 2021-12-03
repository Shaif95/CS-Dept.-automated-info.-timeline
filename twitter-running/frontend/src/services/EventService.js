import axios from 'axios';

const Event_API_BASE_URL = "https://baylor-board.herokuapp.com/events";

class EventService {

    getEvent(){
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