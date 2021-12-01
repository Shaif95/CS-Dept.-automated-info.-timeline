import axios from 'axios';

const Grant_API_BASE_URL = "http://localhost:8080/Grants";

class GrantService {

    getGrant(){
        return axios.get(Grant_API_BASE_URL);
    }

    createGrant(em){
        return axios.post(Grant_API_BASE_URL, em);
    }

    getGrantById(emId){
        return axios.get(Grant_API_BASE_URL + '/' + emId);
    }

    updateGrant(em, emId){
        return axios.put(Grant_API_BASE_URL + '/' +  emId,  em);
    }

    deleteGrant(emId){
        return axios.delete(Grant_API_BASE_URL + '/' + emId);
    }
}

export default new GrantService()