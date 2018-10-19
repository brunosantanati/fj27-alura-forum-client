import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import MenuDuvidasForum from '../MenuDuvidasForum';
import ItemDuvidaForum from '../ItemDuvidaForum';

import BuscaDuvidasService from '../../services/BuscaDuvidasService';

class PainelDuvidasForum extends Component {

    constructor() {
        super();
        this.state = {
            duvidas: []
        }
    }

    componentDidMount = () => {
        this.recarregaDuvidas();
    }

    recarregaDuvidas = (options = {}) => {
        BuscaDuvidasService.executa(options)
            .then(json => this.setState({ duvidas: json, menu: options }))
            .catch(e => alert(e.message));
    }

    render() {
        const { duvidas } = this.state;

        return (
            <div>
                <MenuDuvidasForum atualizaDuvidasCallback={this.recarregaDuvidas} {...this.props}/>
                <div>{
                    duvidas.map(duvida => <ItemDuvidaForum duvida={duvida} key={String(duvida.id)}/>)
                }</div>
            </div>
        );
    }
}

export default PainelDuvidasForum;