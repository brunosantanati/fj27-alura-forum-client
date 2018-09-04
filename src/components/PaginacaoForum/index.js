import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkPrevNext from './components/LinkPrevNext';

class PaginacaoForum extends Component {

    _renderLinks = (numberOfLinks) => {
        const { paginaAtual, totalDePaginas } = this.props;
        const links = []

        if (totalDePaginas <= 5) {
            for (let index = 0; index < numberOfLinks; index++) {
                const link = 
                    <a href="#" key={index} onClick={() => this.buscaDuvidas(index)}               
                            className={`paginationLink ${index === paginaAtual ? 'busca-botao-selecionado': ''}`}>
                        {index + 1}
                    </a>
    
                links.push(link);
            }
            return links;
        }

        return this._renderMultiLinks(paginaAtual, totalDePaginas);
    }

    _renderMultiLinks = (paginaAtual, totalDePaginas) => {
        let multiLinks = [];
        let atualProximaDoInicio = false;
        let atualProximaDoFim = false;

        if (paginaAtual <= 2) {
            multiLinks = [0, 1, 2, 3, (totalDePaginas - 1)];
            atualProximaDoInicio = true;
            atualProximaDoFim = false;
            
        } else if (paginaAtual >= (totalDePaginas - 3)) {
            multiLinks = [0, (totalDePaginas - 4), (totalDePaginas - 3), (totalDePaginas - 2), (totalDePaginas - 1)]
            atualProximaDoInicio = false;
            atualProximaDoFim = true

        } else {
            multiLinks = [0, (paginaAtual - 1), paginaAtual, (paginaAtual + 1), (totalDePaginas - 1)];
            atualProximaDoInicio = false;
            atualProximaDoFim = false;
        }
            
        return multiLinks.map((pagina, index) => {
            return (
                <a href="#" onClick={() => this.buscaDuvidas(pagina)} key={String(pagina)}
                        className={`paginationLink 
                            ${paginaAtual === pagina ? 'busca-botao-selecionado': ''}
                            ${(index === 1 && !atualProximaDoInicio) ? 'paginationLink--withSuspensionPoints' : ''} 
                            ${index === 4 && !atualProximaDoFim ? 'paginationLink--withSuspensionPoints' : ''} 
                        `}>   
                    {pagina + 1}
                </a>
            );
        });
    }

    buscaDuvidas = (pagina) => {
        const options = { ...this.props.filtros, pagina }
        this.props.atualizaDuvidasCallback(options);
    }

    render() {
        const { totalDePaginas, paginaAtual } = this.props;
        const ultimaPagina = totalDePaginas - 1;

        return totalDePaginas > 1 &&
            <div className="container">
                <nav className="busca-paginacao">
                    
                    <LinkPrevNext rel="prev" disabled={paginaAtual === 0}
                            atualizaDuvidasCallback={() => this.buscaDuvidas(paginaAtual - 1)}/>
                    
                    <nav className="busca-paginacao-links">
                        {this._renderLinks(totalDePaginas)} 
                    </nav>

                    <LinkPrevNext rel="next" disabled={paginaAtual === ultimaPagina} 
                            atualizaDuvidasCallback={() => this.buscaDuvidas(paginaAtual + 1)} />
                </nav>
            </div>
    }
}

PaginacaoForum.propTypes = {
    totalDePaginas: PropTypes.number.isRequired,
    paginaAtual: PropTypes.number
}

PaginacaoForum.defaultProps = {
    totalDePaginas: 0,
    paginaAtual: 0
}

export default PaginacaoForum;

