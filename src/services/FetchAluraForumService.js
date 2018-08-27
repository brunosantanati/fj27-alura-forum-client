import { defaultExt } from "upath";

const BASE_URI = 'http://localhost:8080/api';

class FetchAluraForumService {

    static get(resource) {
        const uri = `${BASE_URI}/${resource}`;

        return fetch(uri)
            .then(response => {
                if(response.ok)
                return response.json();

                throw new Error('Não foi possível obter dados da API');
            });
    }
} 

export default FetchAluraForumService;