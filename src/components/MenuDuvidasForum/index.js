import React, { Component } from 'react';
import './style.css';

class MenuDuvidasForum extends Component {

    constructor() {
        super();
        this.state = {
            categoriaAtiva: CategoriasDoForum['TODAS'],
            seletorDeCatoriaAtivo: false
        }
    }

    toggleDropDownCategoria = () => {
        this.setState({seletorDeCatoriaAtivo: !this.state.seletorDeCatoriaAtivo})
    }
    
    selecionaCategoria = (categoria) => {
        this.setState({categoriaAtiva: CategoriasDoForum[categoria]})
    }

    buscaDuvidas = (recurso) => {
        var { atualizaDuvidasCallback } = this.props;
    
        const uri = `http://localhost:8080/${recurso}`;
    
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
                                            <span onClick={() => this.selecionaCategoria('DESIGN')}>Design &amp; UX</span>
                                        </li>
                                        <li className="menuBusiness" data-option="" data-value="business">
                                            <span onClick={() => this.selecionaCategoria('BUSINESS')}>Business</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </fieldset>

                            <fieldset className="restrictions">
                                <input className="restrictionsInput--all" type="radio"  name="restriction" value="todos" id="todos" onChange={() => this.buscaDuvidas('api/topics')}/>
                                <label className="restrictionsLabel restrictionsLabel--all" htmlFor="todos">
                                    Todos
                                </label>

                                <input className="restrictionsInput--all" type="radio" name="restriction" value="sem-resposta" id="sem-resposta" onChange={() => this.buscaDuvidas('api/topics/not-answered')} />
                                <label className="restrictionsLabel restrictionsLabel--all" htmlFor="sem-resposta">
                                    Sem resposta
                                </label>

                                <input className="restrictionsInput--all" type="radio" name="restriction" value="sem-solucao" id="sem-solucao" onChange={() => this.buscaDuvidas('api/topics/not-solved')}/>
                                <label className="restrictionsLabel restrictionsLabel--all" htmlFor="sem-solucao">
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


const CategoriasDoForum = {
    'TODAS': {nome: 'Todas as categorias', menuClass: 'menuTodasCategorias'},
    'MOBILE': {nome: 'Mobile', menuClass: 'menuMobile'},
    'PROGRAMACAO': {nome: 'Programação', menuClass: 'menuProgramacao'},
    'FRONT': {nome: 'Front-end', menuClass: 'menuFrontEnd'},
    'INFRA': {nome: 'Infraestrutura', menuClass: 'menuInfraestrutura'},
    'DESIGN': {nome: 'Design & UX', menuClass: 'menuDesign'},
    'BUSINESS': {nome: 'Business', menuClass: 'menuBusiness'}
};