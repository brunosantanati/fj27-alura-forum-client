import React, { Component } from 'react';

import './style.css';
import MobileIcon from './resources/mobile.svg';
import ProgracaoIcon from './resources/programacao.svg';
import FrontEndIcon from './resources/front-end.svg';
import InfraestruturaIcon from './resources/infraestrutura.svg';
import DesignIcon from './resources/design-ux.svg';
import BusinessIcon from './resources/business.svg';

import ItemDashboard from '../ItemDashBoard';
import FetchAluraForumService from '../../services/FetchAluraForumService';

class DashboardCategoriasForum extends Component {

    constructor() {
        super();
        this.state = {
            visivel: true,
            categorias: [],
        }
    }

    componentDidMount() {
        FetchAluraForumService.get("topics/dashboard")
            .then(categorias => this.setState({categorias}));
    }

    render() {
        return this.state.visivel && <div>
            <main className="dashboard">
                <div className="container">
                    <ul className="dashboard-categoryList">
                        {
                            this.state.categorias.map(categoria =>
                                <ItemDashboard item={categoria}/>
                            )
                        }
                    </ul>
                </div>
            </main>
        </div>
    }
} export default DashboardCategoriasForum;