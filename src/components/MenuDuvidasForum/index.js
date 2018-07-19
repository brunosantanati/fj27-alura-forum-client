import React, { Component } from 'react';
import './style.css';

class MenuDuvidasForum extends Component {
    render() {
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
                        <div className="categoryFilter cs-select" tabIndex="0">
                            <span className="cs-placeholder todasCategorias">Todas as categorias</span>
                            <div className="cs-options">
                                <ul>
                                    <li className="menuTodasCategorias" data-link="/forum/todos" data-option="" data-value="todos" >
                                        <span>Todas as categorias</span>
                                    </li>
                                    <li className="menuMobile"data-option="" data-value="mobile">
                                        <span>Mobile</span>
                                    </li>
                                    <li className="menuProgramacao" data-option="" data-value="programacao">
                                        <span>Programação</span>
                                    </li>
                                    <li className="menuFrontEnd" data-option="" data-value="front-end">
                                        <span>Front-end</span>
                                    </li>
                                    <li className="menuInfraestrutura" data-option="" data-value="infraestrutura">
                                        <span>Infraestrutura</span>
                                    </li>
                                    <li className="menuDesign" data-option="" data-value="design-ux">
                                        <span>Design &amp; UX</span>
                                    </li>
                                    <li className="menuBusiness" data-option="" data-value="business">
                                        <span>Business</span>
                                    </li>
                                    <li className="menuOffTopic" data-option="" data-value="offtopic">
                                        <span>Off Topic</span>
                                    </li>
                                </ul>
                            </div>

                            <select className="categoryFilter cs-select" name="category.id">
                                <option value="todos" data-color="#697074" data-link="/forum/todos">Todas as categorias</option>

                                <option data-color="#fdc14a" value="mobile">Mobile</option>

                                <option data-color="#00c86f" value="programacao">Programação</option>

                                <option data-color="#009bdd" value="front-end">Front-end</option>

                                <option data-color="#f1634b" value="infraestrutura">Infraestrutura</option>

                                <option data-color="#9d60b8" value="design-ux">Design &amp; UX</option>

                                <option data-color="#0079ac" value="business">Business</option>

                                <option data-color="#9eb3c1" value="offtopic">Off Topic</option>

                            </select>
                        </div>
                        </fieldset>

                        <fieldset className="restrictions">
                            <input type="radio" className="restrictionsInput--all" name="restriction" value="todos" id="todos" checked=""/>
                            <label className="restrictionsLabel restrictionsLabel--all" htmlFor="todos">
                                Todos
                            </label>

                            <input className="restrictionsInput--all" type="radio" name="restriction" value="sem-resposta" id="sem-resposta"/>
                            <label className="restrictionsLabel restrictionsLabel--all" htmlFor="sem-resposta">
                                Sem resposta
                            </label>

                            <input className="restrictionsInput--all" type="radio" name="restriction" value="sem-solucao" id="sem-solucao"/>
                            <label className="restrictionsLabel restrictionsLabel--all" htmlFor="sem-solucao">
                                Sem solução
                            </label>
                        </fieldset>

                       
                        <form id="headerBusca-form" className="forumSearch" action="https://cursos.alura.com.br/forum/search">
                            <label htmlFor="forumSearch-input" className="forumSearch-label">Busque por assunto</label>
                            <input id="forumSearch-input" className="forumSearch-input" type="text" name="term" placeholder="Busque por assunto"/>
                            <button className="forumSearch-submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
        );
    }
} export default MenuDuvidasForum;
