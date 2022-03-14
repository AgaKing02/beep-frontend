import axios from 'axios';

export default class StreamService {

   getAllStreams(){
    return axios.get('http://localhost:8080/api/v1/streams').then(d => d.data);
   }
	
}