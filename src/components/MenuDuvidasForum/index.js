import React, { Component } from 'react';
import './style.css';

import CategoriasDoForum from '../../CategoriasDoForum';

class MenuDuvidasForum extends Component {

    constructor() {
        super();
        this.state = {
            filtroAtivo: '',
            categoriaAtiva: CategoriasDoForum['TODAS'],
            seletorDeCatoriaAtivo: false
        }
    }

    toggleDropDownCategoria = () => {
        this.setState({seletorDeCatoriaAtivo: !this.state.seletorDeCatoriaAtivo})
    }

    selecionaCategoria = (categoria) => {
        this.setState({categoriaAtiva: CategoriasDoForum[categoria]})
        setTimeout(() => this.buscaDuvidas(), 300);
    }

    toggleRestricoes = (filtro) => {
        this.setState({filtroAtivo: filtro})
        setTimeout(() => this.buscaDuvidas(), 300);
    }

    buscaDuvidas = () => {
        const { atualizaDuvidasCallback } = this.props;
        const { filtroAtivo, categoriaAtiva } = this.state;
        
        const uri = this.resolveURI(filtroAtivo, categoriaAtiva);
        
        fetch(uri)
            .then(response => {
                if(response.ok)
                return response.json();

                throw new Error('Não foi possível obter dados da API');
            })
            .then(json => {
                atualizaDuvidasCallback(json);
            })
            .catch(e => alert(e.message));
    }

    resolveURI(filtro, categoria) {
        let uri = `http://localhost:8080/api/topics/`;

        if (filtro !== '')
            uri += filtro;
            
        if (JSON.stringify(categoria) !== JSON.stringify(CategoriasDoForum['TODAS']))
            uri += `?categoryName=${categoria.nome}`

        console.log(uri)    
        return uri;
    }

    render() {
        const { categoriaAtiva } = this.state;

        return (
            <div>
                <section className="forumFilter">
                    <form className="forumFilter-form" action="https://cursos.alura.com.br/forum/todos/1"></form>

                    <div className="container">

                        <div className="title-and-new-topic">
                            <span className="title">Tópicos mais recentes</span>
                            <a href="https://cursos.alura.com.br/forum/offtopic/novo" className="button-new-topic">Criar novo tópico</a>
                        </div>

                        <div className="categories-restrictions-and-search">
                            <fieldset className="select-filter">
                            <div className={`categoryFilter cs-select ${this.state.seletorDeCatoriaAtivo ? 'cs-active' : ''}`} 
                                onClick={this.toggleDropDownCategoria} 
                                tabIndex="0">
                    
                                <span className={`cs-placeholder ${categoriaAtiva.menuClass}`}>{categoriaAtiva.nome}</span>
                                <div className="cs-options">
                                    <ul>
                                        <li className="menuTodasCategorias" data-link="/api/topics" data-option="" data-value="todos" >
                                            <span onClick={() => this.selecionaCategoria('TODAS')}>Todas as categorias</span>
                                        </li>
                                        <li className="menuMobile"data-option="" data-value="mobile">
                                            <span onClick={() => this.selecionaCategoria('MOBILE')}>Mobile</span>
                                        </li>
                                        <li className="menuProgramacao" data-option="" data-value="programacao">
                                            <span onClick={() => this.selecionaCategoria('PROGRAMACAO')}>Programação</span>
                                        </li>
                                        <li className="menuFrontEnd" data-option="" data-value="front-end">
                                            <span onClick={() => this.selecionaCategoria('FRONT')}>Front-end</span>
                                        </li>
                                        <li className="menuInfraestrutura" data-option="" data-value="infraestrutura">
                                            <span onClick={() => this.selecionaCategoria('INFRA')}>Infraestrutura</span>
                                        </li>
                                        <li className="menuDesign" data-option="" data-value="design-ux">
                                            <span onClick={() => this.selecionaCategoria('DESIGN')}>Design</span>
                                        </li>
                                        <li className="menuBusiness" data-option="" data-value="business">
                                            <span onClick={() => this.selecionaCategoria('BUSINESS')}>Business</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </fieldset>

                            <fieldset className="restrictions">
                                <input className="restrictionsInput--all" type="radio"  name="restriction" value="todos" id="todos"/>
                                <label className="restrictionsLabel restrictionsLabel--all" htmlFor="todos" onClick={() => this.toggleRestricoes('')}>
                                    Todos
                                </label>

                                <input className="restrictionsInput--all" type="radio" name="restriction" value="sem-resposta" id="sem-resposta"/>
                                <label className="restrictionsLabel restrictionsLabel--all" htmlFor="sem-resposta" onClick={() => this.toggleRestricoes('not-answered')}>
                                    Sem resposta
                                </label>

                                <input className="restrictionsInput--all" type="radio" name="restriction" value="sem-solucao" id="sem-solucao"/>
                                <label className="restrictionsLabel restrictionsLabel--all" htmlFor="sem-solucao" onClick={() => this.toggleRestricoes('not-solved')}>
                                    Sem solução
                                </label>
                            </fieldset>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
} 

export default MenuDuvidasForum;