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

    static post(resource, data) {
        const uri = `${BASE_URI}/${resource}`;

        const headers = new Headers({
            'Content-type': 'application/json'
        });

        const jwtInfo = localStorage.getItem("jwtInfo");
        if(jwtInfo) {
            headers.append('Authentication', `${jwtInfo.tokenType} ${jwtInfo.token}`);
        }

        const requestDetails = {
            method: 'POST',
            body: JSON.stringify(data),
            headers            
        }

        return fetch(uri, requestDetails)
            .then(response => {

                if(response.ok)
                    return response.json();

                const error = new Error('Não foi possível postar dados para a API');
                error.httpStatus = response.status;
                throw error;
            })
    }
} 

export default FetchAluraForumService;