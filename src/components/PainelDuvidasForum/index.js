import React, { Component } from 'react';

import MenuDuvidasForum from '../MenuDuvidasForum';
import ItemDuvidaForum from '../ItemDuvidaForum';
import PaginacaoForum from '../PaginacaoForum';

import BuscaDuvidasService from '../../services/BuscaDuvidasService';

class PainelDuvidasForum extends Component {

    constructor() {
        super();
        this.state = {
            duvidas: {
                content: []
            },
            menu: {
                categoria: null,
                status: null
            }
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
                    duvidas.content.map(duvida => <ItemDuvidaForum duvida={duvida} key={String(duvida.id)}/>)
                }</div>
                <PaginacaoForum totalDePaginas={duvidas.totalPages} 
                        paginaAtual={duvidas.number} 
                        atualizaDuvidasCallback={this.recarregaDuvidas}
                        filtros={this.state.menu}/>

            </div>
        );
    }
}

export default PainelDuvidasForum;