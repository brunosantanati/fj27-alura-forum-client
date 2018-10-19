import FetchAluraForumService from './FetchAluraForumService';
import CategoriasDoForum from '../CategoriasDoForum';

class BuscaDuvidasService {

    static executa ({categoria = CategoriasDoForum['TODAS'], status = ''} = {}) {

        const resource = this._resolveURL(status, categoria);
        return FetchAluraForumService.get(resource);
    }

    static _resolveURL = (status, categoria) => {
        let resource = `topics?`;

        if (status !== '')
            resource += `status=${status}`;
            
        if (JSON.stringify(categoria) !== JSON.stringify(CategoriasDoForum['TODAS']))
            resource += `&categoryName=${categoria.nome}`

        return resource;
    }
} 

export default BuscaDuvidasService;