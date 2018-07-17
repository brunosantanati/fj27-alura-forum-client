import React, { Component } from 'react';
import './style.css';
import MobileIcon from './resources/mobile.svg';
import ProgracaoIcon from './resources/programacao.svg';
import FrontEndIcon from './resources/front-end.svg';
import InfraestruturaIcon from './resources/infraestrutura.svg';
import DesignIcon from './resources/design-ux.svg';
import BusinessIcon from './resources/business.svg';

class CategoriaForum extends Component {
    render() {
        return(
            <div>
                <main class="dashboard">
                    <div class="container">
                        <ul class="dashboard-categoryList">

                        <li class="dashboard-categoryList-category categoriaListaBordaMobile">
                            <img class="dashboard-categoryList-category-icon" src={MobileIcon} alt="Categoria Mobile" aria-hidden="true"/>

                        <div class="dashboard-categoryList-category-name">
                            <a class="dashboard-category-name-text categoriaListaMobile" href="https://cursos.alura.com.br/forum/categoria-mobile/todos">
                                Mobile
                            </a>
                        </div>

                        <ul class="dashboard-categoryList-category-stats">
                            <li class="categoryList-category-stats-item dashboard-category-stats-topics">
                                <span class="category-stats-item-number dashboard-stats-topics-number">4353</span>
                                <a class="category-stats-item-text dashboard-stats-topics-text" href="https://cursos.alura.com.br/forum/categoria-mobile/todos">tópicos</a>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-lastWeek">
                                <span class="category-stats-item-number dashboard-stats-lastWeek-number">40</span>
                                <span class="category-stats-item-text dashboard-stats-lastWeek-text">na última semana</span>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-noReply">
                                <span class="category-stats-item-number dashboard-stats-noReply-number">9</span>
                                <a class="category-stats-item-text dashboard-stats-noReply-text" href="https://cursos.alura.com.br/forum/categoria-mobile/sem-resposta">sem resposta</a>
                            </li>
                        </ul>

                        <div class="dashboard-categoryList-category-subcategories">
                            <ul class="dashboard-category-subcategories-list">

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-android/todos">
                                        Android
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-multiplataforma/todos">
                                        Multiplataforma
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-jogos/todos">
                                        Jogos
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-ios/todos">
                                        iOS
                                    </a>
                                </li>

                            </ul>

                            <button tabindex="0" class="dashboard-category-subcategories-dropdownButton">
                                <span class="dashboard-subcategories-dropdownButton-text">ver subcategorias</span>
                            </button>
                        </div>

                    </li>

                    <li class="dashboard-categoryList-category categoriaListaBordaProgramacao">
                        <img class="dashboard-categoryList-category-icon" src={ProgracaoIcon} alt="Categoria Programação" aria-hidden="true"/>

                        <div class="dashboard-categoryList-category-name">
                            <a class="dashboard-category-name-text categoriaListaProgramacao" href="https://cursos.alura.com.br/forum/categoria-programacao/todos">
                                Programação
                            </a>
                        </div>

                        <ul class="dashboard-categoryList-category-stats">
                            <li class="categoryList-category-stats-item dashboard-category-stats-topics">
                                <span class="category-stats-item-number dashboard-stats-topics-number">24062</span>
                                <a class="category-stats-item-text dashboard-stats-topics-text" href="https://cursos.alura.com.br/forum/categoria-programacao/todos">tópicos</a>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-lastWeek">
                                <span class="category-stats-item-number dashboard-stats-lastWeek-number">199</span>
                                <span class="category-stats-item-text dashboard-stats-lastWeek-text">na última semana</span>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-noReply">
                                <span class="category-stats-item-number dashboard-stats-noReply-number">17</span>
                                <a class="category-stats-item-text dashboard-stats-noReply-text" href="https://cursos.alura.com.br/forum/categoria-programacao/sem-resposta">sem resposta</a>
                            </li>
                        </ul>

                        <div class="dashboard-categoryList-category-subcategories">
                            <ul class="dashboard-category-subcategories-list">

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-java/todos">
                                        Java
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-computacao/todos">
                                        Computação
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-integracoes-em-java/todos">
                                        Integrações em Java
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-logica-de-programacao/todos">
                                        Lógica de programação
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-dotnet-para-web/todos">
                                        .NET para web
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-analise-de-dados/todos">
                                        Análise de dados
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-linguagem-c/todos">
                                        Linguagem C
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-csharp/todos">
                                        C#
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-boas-praticas-csharp/todos">
                                        Boas práticas em C#
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-boas-praticas-em-java/todos">
                                        Boas práticas em Java
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-funcional/todos">
                                        Programação Funcional
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-certificacao-java/todos">
                                        Certificação Java
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-java-para-web/todos">
                                        Java para Web
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-java-e-persistencia/todos">
                                        Java e persistência
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-testes-em-java/todos">
                                        Testes em Java
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-testes-em-csharp/todos">
                                        Testes em C#
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-ruby/todos">
                                        Ruby
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-php/todos">
                                        PHP
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-python/todos">
                                        Python
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-ruby-on-rails/todos">
                                        Ruby on Rails
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-integracoes-em-net/todos">
                                        Integrações em .NET
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-persistencia-com-net/todos">
                                        Persistência com .NET
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-desenvolvimento-de-jogos/todos">
                                        Desenvolvimento de jogos
                                    </a>
                                </li>

                            </ul>

                            <button tabindex="0" class="dashboard-category-subcategories-dropdownButton">
                                <span class="dashboard-subcategories-dropdownButton-text">ver subcategorias</span>
                            </button>
                        </div>

                    </li>

                    <li class="dashboard-categoryList-category categoriaListaBordaFrontEnd">
                        <img class="dashboard-categoryList-category-icon" src={FrontEndIcon} alt="Categoria Front-end" aria-hidden="true"/>

                        <div class="dashboard-categoryList-category-name">
                            <a class="dashboard-category-name-text categoriaListaFrontEnd"  href="https://cursos.alura.com.br/forum/categoria-front-end/todos">
                                Front-end
                            </a>
                        </div>

                        <ul class="dashboard-categoryList-category-stats">
                            <li class="categoryList-category-stats-item dashboard-category-stats-topics">
                                <span class="category-stats-item-number dashboard-stats-topics-number">9955</span>
                                <a class="category-stats-item-text dashboard-stats-topics-text" href="https://cursos.alura.com.br/forum/categoria-front-end/todos">tópicos</a>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-lastWeek">
                                <span class="category-stats-item-number dashboard-stats-lastWeek-number">94</span>
                                <span class="category-stats-item-text dashboard-stats-lastWeek-text">na última semana</span>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-noReply">
                                <span class="category-stats-item-number dashboard-stats-noReply-number">3</span>
                                <a class="category-stats-item-text dashboard-stats-noReply-text" href="https://cursos.alura.com.br/forum/categoria-front-end/sem-resposta">sem resposta</a>
                            </li>
                        </ul>

                        <div class="dashboard-categoryList-category-subcategories">
                            <ul class="dashboard-category-subcategories-list">

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-front-end/todos">
                                        HTML e CSS
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-frameworks-mvc-em-javascript/todos">
                                        Frameworks MVC
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-javascript/todos">
                                        JavaScript
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-automacao-front-end/todos">
                                        Automação e Performance
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-jquery/todos">
                                        jQuery
                                    </a>
                                </li>

                            </ul>

                            <button tabindex="0" class="dashboard-category-subcategories-dropdownButton">
                                <span class="dashboard-subcategories-dropdownButton-text">ver subcategorias</span>
                            </button>
                        </div>

                    </li>

                    <li class="dashboard-categoryList-category categoriaListaBordaInfra">
                        <img class="dashboard-categoryList-category-icon" src={InfraestruturaIcon} alt="Categoria Infraestrutura"
                            aria-hidden="true"/>

                        <div class="dashboard-categoryList-category-name">
                            <a class="dashboard-category-name-text categoriaListaInfra" href="https://cursos.alura.com.br/forum/categoria-infraestrutura/todos">
                                Infraestrutura
                            </a>
                        </div>

                        <ul class="dashboard-categoryList-category-stats">
                            <li class="categoryList-category-stats-item dashboard-category-stats-topics">
                                <span class="category-stats-item-number dashboard-stats-topics-number">4601</span>
                                <a class="category-stats-item-text dashboard-stats-topics-text" href="https://cursos.alura.com.br/forum/categoria-infraestrutura/todos">tópicos</a>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-lastWeek">
                                <span class="category-stats-item-number dashboard-stats-lastWeek-number">59</span>
                                <span class="category-stats-item-text dashboard-stats-lastWeek-text">na última semana</span>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-noReply">
                                <span class="category-stats-item-number dashboard-stats-noReply-number">15</span>
                                <a class="category-stats-item-text dashboard-stats-noReply-text" href="https://cursos.alura.com.br/forum/categoria-infraestrutura/sem-resposta">sem resposta</a>
                            </li>
                        </ul>

                        <div class="dashboard-categoryList-category-subcategories">
                            <ul class="dashboard-category-subcategories-list">

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-linux-comandos-e-processos/todos">
                                        Linux
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-build-e-versionamento/todos">
                                        Builds e versionamento
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-entrega-continua/todos">
                                        Entrega Contínua
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-sql/todos">
                                        SQL
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-nosql/todos">
                                        NoSQL
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-redes/todos">
                                        Redes
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-windows/todos">
                                        Windows
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-internet-das-coisas/todos">
                                        Internet das coisas
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-embarcados/todos">
                                        Embarcados
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-cloud-computing/todos">
                                        Cloud Computing
                                    </a>
                                </li>

                            </ul>

                            <button tabindex="0" class="dashboard-category-subcategories-dropdownButton">
                                <span class="dashboard-subcategories-dropdownButton-text">ver subcategorias</span>
                            </button>
                        </div>

                    </li>

                    <li class="dashboard-categoryList-category categoriaListaBordaDesign" >
                        <img class="dashboard-categoryList-category-icon" src={DesignIcon} alt="Categoria Design &amp; UX"
                            aria-hidden="true"/>

                        <div class="dashboard-categoryList-category-name">
                            <a class="dashboard-category-name-text categoriaListaDesign" href="https://cursos.alura.com.br/forum/categoria-design-ux/todos">
                                Design &amp; UX
                            </a>
                        </div>

                        <ul class="dashboard-categoryList-category-stats">
                            <li class="categoryList-category-stats-item dashboard-category-stats-topics">
                                <span class="category-stats-item-number dashboard-stats-topics-number">1595</span>
                                <a class="category-stats-item-text dashboard-stats-topics-text" href="https://cursos.alura.com.br/forum/categoria-design-ux/todos">tópicos</a>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-lastWeek">
                                <span class="category-stats-item-number dashboard-stats-lastWeek-number">21</span>
                                <span class="category-stats-item-text dashboard-stats-lastWeek-text">na última semana</span>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-noReply">
                                <span class="category-stats-item-number dashboard-stats-noReply-number">5</span>
                                <a class="category-stats-item-text dashboard-stats-noReply-text" href="https://cursos.alura.com.br/forum/categoria-design-ux/sem-resposta">sem resposta</a>
                            </li>
                        </ul>

                        <div class="dashboard-categoryList-category-subcategories">
                            <ul class="dashboard-category-subcategories-list">

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-webdesign/todos">
                                        Web Design
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-3d/todos">
                                        3D
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-video/todos">
                                        Vídeo &amp; Motion
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-design/todos">
                                        Introdução ao design
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-impressos/todos">
                                        Impressos
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-fotografia/todos">
                                        Fotografia
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-ux/todos">
                                        UX
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-apresentacoes/todos">
                                        Apresentações
                                    </a>
                                </li>

                            </ul>

                            <button tabindex="0" class="dashboard-category-subcategories-dropdownButton">
                                <span class="dashboard-subcategories-dropdownButton-text">ver subcategorias</span>
                            </button>
                        </div>

                    </li>

                    <li class="dashboard-categoryList-category categoriaListaBordaBusiness">
                        <img class="dashboard-categoryList-category-icon" src={BusinessIcon} alt="Categoria Business" aria-hidden="true"/>

                        <div class="dashboard-categoryList-category-name">
                            <a class="dashboard-category-name-text categoriaListaBusiness" href="https://cursos.alura.com.br/forum/categoria-business/todos">
                                Business
                            </a>
                        </div>

                        <ul class="dashboard-categoryList-category-stats">
                            <li class="categoryList-category-stats-item dashboard-category-stats-topics">
                                <span class="category-stats-item-number dashboard-stats-topics-number">2813</span>
                                <a class="category-stats-item-text dashboard-stats-topics-text" href="https://cursos.alura.com.br/forum/categoria-business/todos">tópicos</a>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-lastWeek">
                                <span class="category-stats-item-number dashboard-stats-lastWeek-number">43</span>
                                <span class="category-stats-item-text dashboard-stats-lastWeek-text">na última semana</span>
                            </li>
                            <li class="categoryList-category-stats-item dashboard-category-stats-noReply">
                                <span class="category-stats-item-number dashboard-stats-noReply-number">3</span>
                                <a class="category-stats-item-text dashboard-stats-noReply-text" href="https://cursos.alura.com.br/forum/categoria-business/sem-resposta">sem resposta</a>
                            </li>
                        </ul>

                        <div class="dashboard-categoryList-category-subcategories">
                            <ul class="dashboard-category-subcategories-list">

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-maketing-digital/todos">
                                        Marketing Digital
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-excel/todos">
                                        Excel
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-seo-e-adwords/todos">
                                        SEO e adwords
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-agilidade/todos">
                                        Agilidade
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-documentacao/todos">
                                        Documentação
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-concursos/todos">
                                        Concursos
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-carreira/todos">
                                        Carreira
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-governanca/todos">
                                        Governança
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-social-media/todos">
                                        Social Media
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-construcao-de-sites/todos">
                                        Construção de sites
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-startup/todos">
                                        Startup
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-e-commerce/todos">
                                        E-commerce
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-lideranca/todos">
                                        Liderança
                                    </a>
                                </li>

                                <li class="dashboard-subcategories-list-subcategory">
                                    <a class="dashboard-list-subcategory-link" href="https://cursos.alura.com.br/forum/subcategoria-business-intelligence/todos">
                                        Business Intelligence
                                    </a>
                                </li>

                            </ul>

                            <button tabindex="0" class="dashboard-category-subcategories-dropdownButton">
                                <span class="dashboard-subcategories-dropdownButton-text">ver subcategorias</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </main>


            </div>
        );
    }
} export default CategoriaForum;