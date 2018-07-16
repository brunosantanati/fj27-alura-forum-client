import React, { Component } from 'react';
import './style.css';

import IconeBusca from './resources/icon-busca.svg';
import Avatar from './resources/avatar.svg';
import IconeNotificacoes from './resources/icon-news-bell.svg';
import LogoAlura from './resources/logo-alura.svg';

class HeaderForum extends Component {
  
  render() {
    return (
      <div>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TN542JN" height="0" width="0" className="googleIframe-style"></iframe>
        </noscript>
        
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <div className="natural-header natural-header-style">
            <button className="header-hamburguinho" aria-controls="headerMobile" aria-expanded="false"></button>
            <a href="#">
                <img className="header-logo" src={IconeBusca} alt="alura" />
            </a>

        </div>

        <header id="headerMobile" className="header headerMobile headerMobile--collapsed headerMobile-style" aria-hidden="true">

            <section id="headerBusca" className="headerBusca ">
                <div className="container">

                    <a href="#" aria-label="busca" className="headerBusca-icon" role="button" aria-expanded="false"
                        aria-controls="headerBusca-form">
                        <img className="headerBusca-icon-svg" src={IconeBusca} alt=""/>
                    </a>
                    <form action="#" id="headerBusca-form" className="headerBusca-form headerBusca-form--retratil"
                        aria-hidden="true">
                        <label htmlFor="headerBusca-campoBusca">Qual curso procura?</label>
                        <input type="search" className="skipKeyPress headerBusca-form-input" id="headerBusca-campoBusca" name="query" placeholder="Digite aqui a busca" />
                        <button className="headerBusca-submit" type="submit">Buscar</button>
                    </form>

                </div>
            </section>

            <div className="headerMobile-collapsed-top">
                <button className="header-hamburguinho header-hamburguinho--branco" aria-controls="headerMobile" aria-expanded="true"></button>
            </div>

            <div className="headerMobile-content">

                <section className="headerMobile-content-headline">
                    <div className="content-headline-profile ">
                        <img src={Avatar} alt="Foto de Fulano de Tal" className="headline-profile-avatar" />
                        <span className="headline-profile-info">
                            <p className="profile-info-name">Fulano</p>
                            <a href="#" className="points-link header-profile-pontos" aria-label="seu total de pontos é 414.1k">
                                <div className="levelMenu-header-user-points-xp" aria-hidden="true">
                                    414.1k
                                    <span className="levelMenu-header-user-points-xp-name">xp</span>
                                </div>

                                <div className="pointsGrid pointsGrid--small" aria-label="total de pontos por dia">
                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 13/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1000 pontos</strong>
                                            em 14/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 15/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 16/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 17/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 18/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>400 pontos</strong>
                                            em 19/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>200 pontos</strong>
                                            em 20/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>200 pontos</strong>
                                            em 21/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1000 pontos</strong>
                                            em 22/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 23/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 24/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--medium-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>2000 pontos</strong>
                                            em 25/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 26/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1000 pontos</strong>
                                            em 27/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>200 pontos</strong>
                                            em 28/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 29/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 30/06/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 01/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1300 pontos</strong>
                                            em 02/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span className="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1000 pontos</strong>
                                            em 03/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 04/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 05/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 06/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 07/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 08/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 09/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 10/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 11/07/2018
                                        </span>
                                    </div>

                                    <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span className="pointsGrid-cell-details">
                                            não ganhou pontos em 12/07/2018
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </span>
                    </div>

                    <button aria-label="novidades" className="header-news-button notification-not-seen" aria-controls="headerNews" aria-expanded="false">
                        <img src={IconeNotificacoes} alt=""/>
                    </button>
                    <div id="headerNews" className="header-news header-nav" aria-hidden="true" tabIndex="-1" data-last-seen="37206" data-history-code="38828">
                        <span className="header-news-text">Novos Cursos</span>
                        <ul className="header-news-list">

                            <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                <a className="header-news-item-link " href="https://cursos.alura.com.br/course/android-boas-praticas-e-cenarios-testes" tabIndex="-1">
                                    <img className="header-news-item-link-icon" src="./forum-todos_files/android-boas-praticas-e-cenarios-testes.svg" alt="Ícone do curso Android parte 2: Boas práticas e novos cenários de testes"
                                        width="45px" height="45px" />
                                    <span>Android parte 2: Boas práticas e novos cenários de testes</span>
                                </a>
                            </li>

                            <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                <a className="header-news-item-link " href="https://cursos.alura.com.br/course/prototipagem-ux-link-com-telas-no-adobe-xd" tabIndex="-1">
                                    <img className="header-news-item-link-icon" src="./forum-todos_files/prototipagem-ux-link-com-telas-no-adobe-xd.svg" alt="Ícone do curso Prototipagem e UX parte 2: linkando telas no Adobe XD"
                                        width="45px" height="45px" />
                                    <span>Prototipagem e UX parte 2: linkando telas no Adobe XD</span>
                                </a>
                            </li>

                            <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                <a className="header-news-item-link " href="https://cursos.alura.com.br/course/vfx-video-composite" tabIndex="-1">
                                    <img className="header-news-item-link-icon" src="./forum-todos_files/vfx-video-composite.svg" alt="Ícone do curso Adobe Photoshop e Adobe After Effects: Trabalhando com vídeo composite no vfx"
                                        width="45px" height="45px" />
                                    <span>Adobe Photoshop e Adobe After Effects: Trabalhando com vídeo composite no vfx</span>
                                </a>
                            </li>

                            <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                <a className="header-news-item-link " href="https://cursos.alura.com.br/course/raspberry-pi-node-red" tabIndex="-1">
                                    <img className="header-news-item-link-icon" src="./forum-todos_files/raspberry-pi-node-red.svg" alt="Ícone do curso Raspberry Pi: Elabore aplicações com o Node-RED"
                                        width="45px" height="45px" />
                                    <span>Raspberry Pi: Elabore aplicações com o Node-RED</span>
                                </a>
                            </li>

                            <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                <a className="header-news-item-link " href="https://cursos.alura.com.br/course/angular-autenticacao" tabIndex="-1">
                                    <img className="header-news-item-link-icon" src="./forum-todos_files/angular-autenticacao.svg" alt="Ícone do curso Angular parte 2: Autenticação, Forms e lazy loading"
                                        width="45px" height="45px" />
                                    <span>Angular parte 2: Autenticação, Forms e lazy loading</span>
                                </a>
                            </li>

                        </ul>
                        <a className="header-news-text" href="https://cursos.alura.com.br/latest-courses" tabIndex="-1">Ver mais lançamentos</a>
                    </div>
                </section>

                <menu className="header-content-menu" role="navigation">
                    <section className="content-menu-section">
                        <h2 className="content-menu-title" tabIndex="0">
                            <a className="content-menu-button menu-button-mobile">
                                Cursos
                            </a>
                        </h2>

                        <nav id="courseList" className="header-nav" aria-hidden="true" role="region" tabIndex="-1" aria-labelledby="courseLabel">
                            <a className="header-nav-link header-item-link--dashboard" href="https://cursos.alura.com.br/dashboard" tabIndex="-1">Dashboard</a>
                            <a className="header-nav-link header-item-link--careers" href="https://cursos.alura.com.br/careers" tabIndex="-1">Carreiras</a>
                            <a href="https://cursos.alura.com.br/formacoes" className="header-nav-link header-item-link--degrees" tabIndex="-1">Formações</a>
                            <a href="https://cursos.alura.com.br/recommendations" className="header-nav-link header-item-link--recommendations" tabIndex="-1">Recomendações</a>

                            <nav className="header-nav-subLinks">
                                <a className="header-subLinks-firstLink header-nav-link--courses" href="https://cursos.alura.com.br/courses/mine" tabIndex="-1">Meus Cursos</a>
                                <a className="header-subLinks-secondLink" href="https://cursos.alura.com.br/latest-courses" tabIndex="-1">Novos Cursos</a>
                            </nav>

                            <a className="header-nav-link header-nav-link--dashboardAdmin" href="https://cursos.alura.com.br/instructor/dashboard" tabIndex="-1">
                                Dashboard Instrutor
                                <span className="header-link-admin">Admin</span>
                            </a>
                        </nav>
                    </section>

                    <section className="content-menu-section">
                        <h2 className="content-menu-title" tabIndex="0">
                            <a className="content-menu-button menu-button-mobile">
                                Comunidade
                            </a>
                        </h2>

                        <nav id="communityList" className="header-nav" aria-hidden="true" tabIndex="-1">
                            <nav className="header-nav-subLinks">
                                <a className="header-subLinks-firstLink header-item-link--forum" href="https://cursos.alura.com.br/forum" tabIndex="-1">Fórum</a>
                                <a className="header-subLinks-secondLink" href="https://cursos.alura.com.br/forum/participacao" tabIndex="-1">Minhas discussões</a>
                            </nav>
                            <a className="header-nav-link header-nav-link--ranking" href="https://cursos.alura.com.br/user/rafael-rollo/rank/monthly" tabIndex="-1">Ranking</a>
                            <a className="header-nav-link header-nav-link--news" href="https://cursos.alura.com.br/news/latest" tabIndex="-1">Últimas notícias</a>
                            <a className="header-nav-link header-nav-link--reviews" href="https://cursos.alura.com.br/suggestions" tabIndex="-1">
                                Revisões
                                <span className="header-link-admin">Admin</span>
                            </a>
                        </nav>
                    </section>

                    <section className="content-menu-section">
                        <h2 className="content-menu-title" tabIndex="0">
                            <a className="content-menu-button menu-button-mobile button-mobile--collapsed">
                                Meu Perfil
                            </a>
                        </h2>

                        <nav id="profileList" className="header-nav header-nav-profile" aria-hidden="true" tabIndex="-1">
                            <nav className="header-nav-subLinks">
                                <a className="header-subLinks-firstLink header-nav-link--profile" href="https://cursos.alura.com.br/user/rafael-rollo" tabIndex="-1">Perfil &amp; Certificados</a>
                                <a className="header-subLinks-secondLink" href="https://cursos.alura.com.br/my_profile" tabIndex="-1">Editar perfil</a>
                            </nav>

                            <a className="header-nav-link header-nav-link--activities" href="https://cursos.alura.com.br/user/rafael-rollo/actions" tabIndex="-1">
                                Minhas Atividades
                            </a>
                            <a className="header-nav-link header-nav-link--purchases" href="https://cursos.alura.com.br/user/payments" tabIndex="-1">
                                Minhas compras
                            </a>
                            <a className="header-nav-link header-nav-link--logout" href="https://cursos.alura.com.br/signout" tabIndex="-1">
                                Sair
                            </a>
                        </nav>
                    </section>
                </menu>
            </div>
        </header>

        <section id="headerBusca" className="headerBusca headerBusca-desktop">
            <div className="container">

                <a href="#" aria-label="busca" className="headerBusca-icon" role="button" aria-expanded="false"
                    aria-controls="headerBusca-form">
                    
                    <img className="headerBusca-icon-svg" src={IconeBusca} alt=""/>
                </a>
                <form action="#" id="headerBusca-form" className="headerBusca-form headerBusca-form--retratil"
                    aria-hidden="true">
                    <label htmlFor="headerBusca-campoBusca">Qual curso procura?</label>
                    <input type="search" className="skipKeyPress headerBusca-form-input" id="headerBusca-campoBusca" name="query" placeholder="Digite aqui a busca" />
                    <button className="headerBusca-submit" type="submit">Buscar</button>
                </form>

            </div>
        </section>

        <header className="header headerDesktop headerDesktop-style">
            <div className="container">
                <a href="#">
                    <img className="header-logo" src={LogoAlura} alt="alura" />
                </a>

                <nav className="headerDesktop-content-menu" role="navigation" aria-label="menu principal">
                    <div className="content-menu-section content-menu-section-courses">
                        <a role="button" tabIndex="0" className="content-menu-title content-menu-button menu-button-desktop" aria-expanded="false" aria-controls="courseList"
                            id="courseLabel">
                            Cursos
                        </a>

                        <nav id="courseList" className="header-nav" aria-hidden="true" role="region" tabIndex="-1" aria-labelledby="courseLabel">
                            <a className="header-nav-link header-item-link--dashboard" href="https://cursos.alura.com.br/dashboard" tabIndex="-1">Dashboard</a>
                            <a className="header-nav-link header-item-link--careers" href="https://cursos.alura.com.br/careers" tabIndex="-1">Carreiras</a>
                            <a href="https://cursos.alura.com.br/formacoes" className="header-nav-link header-item-link--degrees" tabIndex="-1">Formações</a>
                            <a href="https://cursos.alura.com.br/recommendations" className="header-nav-link header-item-link--recommendations" tabIndex="-1">Recomendações</a>

                            <nav className="header-nav-subLinks">
                                <a className="header-subLinks-firstLink header-nav-link--courses" href="https://cursos.alura.com.br/courses/mine" tabIndex="-1">Meus Cursos</a>
                                <a className="header-subLinks-secondLink" href="https://cursos.alura.com.br/latest-courses" tabIndex="-1">Novos Cursos</a>
                            </nav>

                            <a className="header-nav-link header-nav-link--dashboardAdmin" href="https://cursos.alura.com.br/instructor/dashboard" tabIndex="-1">
                                Dashboard Instrutor
                                <span className="header-link-admin">Admin</span>
                            </a>
                        </nav>
                    </div>

                    <div className="content-menu-section content-menu-section-community">
                        <a role="button" tabIndex="0" className="content-menu-title content-menu-button menu-button-desktop" aria-expanded="false" aria-controls="communityList">
                            Comunidade
                        </a>

                        <nav id="communityList" className="header-nav" aria-hidden="true" tabIndex="-1">
                            <nav className="header-nav-subLinks">
                                <a className="header-subLinks-firstLink header-item-link--forum" href="https://cursos.alura.com.br/forum" tabIndex="-1">Fórum</a>
                                <a className="header-subLinks-secondLink" href="https://cursos.alura.com.br/forum/participacao" tabIndex="-1">Minhas discussões</a>
                            </nav>
                            <a className="header-nav-link header-nav-link--ranking" href="https://cursos.alura.com.br/user/rafael-rollo/rank/monthly" tabIndex="-1">Ranking</a>
                            <a className="header-nav-link header-nav-link--news" href="https://cursos.alura.com.br/news/latest" tabIndex="-1">Últimas notícias</a>

                            <a className="header-nav-link header-nav-link--reviews" href="https://cursos.alura.com.br/suggestions" tabIndex="-1">
                                Revisões
                                <span className="header-link-admin">Admin</span>
                            </a>
                        </nav>
                    </div>

                    <div className="content-menu-section content-menu-section-news">
                        <button aria-label="novidades" className="header-news-button notification-not-seen" aria-controls="headerNews" aria-expanded="false">
                            <img src={IconeNotificacoes} alt=""/>
                        </button>
                        <div id="headerNews" className="header-news header-nav" aria-hidden="true" tabIndex="-1" data-last-seen="37206" data-history-code="38828">

                            <span className="header-news-text">Novos Cursos</span>
                            <ul className="header-news-list">

                                <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                    <a className="header-news-item-link " href="https://cursos.alura.com.br/course/android-boas-praticas-e-cenarios-testes" tabIndex="-1">
                                        <img className="header-news-item-link-icon" src="./forum-todos_files/android-boas-praticas-e-cenarios-testes.svg" alt="Ícone do curso Android parte 2: Boas práticas e novos cenários de testes"
                                            width="45px" height="45px" />
                                        <span>Android parte 2: Boas práticas e novos cenários de testes</span>
                                    </a>
                                </li>

                                <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                    <a className="header-news-item-link " href="https://cursos.alura.com.br/course/prototipagem-ux-link-com-telas-no-adobe-xd" tabIndex="-1">
                                        <img className="header-news-item-link-icon" src="./forum-todos_files/prototipagem-ux-link-com-telas-no-adobe-xd.svg" alt="Ícone do curso Prototipagem e UX parte 2: linkando telas no Adobe XD"
                                            width="45px" height="45px" />
                                        <span>Prototipagem e UX parte 2: linkando telas no Adobe XD</span>
                                    </a>
                                </li>

                                <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                    <a className="header-news-item-link " href="https://cursos.alura.com.br/course/vfx-video-composite" tabIndex="-1">
                                        <img className="header-news-item-link-icon" src="./forum-todos_files/vfx-video-composite.svg" alt="Ícone do curso Adobe Photoshop e Adobe After Effects: Trabalhando com vídeo composite no vfx"
                                            width="45px" height="45px" />
                                        <span>Adobe Photoshop e Adobe After Effects: Trabalhando com vídeo composite no vfx</span>
                                    </a>
                                </li>

                                <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                    <a className="header-news-item-link " href="https://cursos.alura.com.br/course/raspberry-pi-node-red" tabIndex="-1">
                                        <img className="header-news-item-link-icon" src="./forum-todos_files/raspberry-pi-node-red.svg" alt="Ícone do curso Raspberry Pi: Elabore aplicações com o Node-RED"
                                            width="45px" height="45px" />
                                        <span>Raspberry Pi: Elabore aplicações com o Node-RED</span>
                                    </a>
                                </li>

                                <li className="header-news-item header-news-item--highlighted" tabIndex="-1">
                                    <a className="header-news-item-link " href="https://cursos.alura.com.br/course/angular-autenticacao" tabIndex="-1">
                                        <img className="header-news-item-link-icon" src="./forum-todos_files/angular-autenticacao.svg" alt="Ícone do curso Angular parte 2: Autenticação, Forms e lazy loading"
                                            width="45px" height="45px" />
                                        <span>Angular parte 2: Autenticação, Forms e lazy loading</span>
                                    </a>
                                </li>

                            </ul>
                            <a className="header-news-text" href="https://cursos.alura.com.br/latest-courses" tabIndex="-1">Ver mais lançamentos</a>

                        </div>
                    </div>

                    <div className="content-menu-section content-menu-section-levelMenu">
                        <a href="#" className="points-link header-profile-pontos" aria-label="seu total de pontos é 414.1k">
                            <div className="levelMenu-header-user-points-xp" aria-hidden="true">
                                414.1k
                                <span className="levelMenu-header-user-points-xp-name">xp</span>
                            </div>

                            <div className="pointsGrid pointsGrid--small" aria-label="total de pontos por dia">

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 13/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1000 pontos</strong>
                                        em 14/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 15/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 16/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 17/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 18/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>400 pontos</strong>
                                        em 19/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>200 pontos</strong>
                                        em 20/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>200 pontos</strong>
                                        em 21/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1000 pontos</strong>
                                        em 22/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 23/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 24/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--medium-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>2000 pontos</strong>
                                        em 25/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 26/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1000 pontos</strong>
                                        em 27/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>200 pontos</strong>
                                        em 28/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 29/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 30/06/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 01/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1300 pontos</strong>
                                        em 02/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span className="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1000 pontos</strong>
                                        em 03/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 04/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 05/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 06/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 07/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 08/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 09/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 10/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 11/07/2018
                                    </span>
                                </div>

                                <div className="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span className="pointsGrid-cell-details">
                                        não ganhou pontos em 12/07/2018
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="content-menu-section content-menu-section-profile ">
                        <a role="button" tabIndex="0" aria-label="minha conta" className="content-menu-button menu-button-desktop profile-info-name"
                            aria-expanded="false" aria-controls="profileList">
                            <img src={Avatar} alt="Foto do Fulano de Tal" className="headline-profile-avatar headline-profile-avatar"/>
                            <span className="screenReader-only">perfil de</span>Fulano
                        </a>

                        <nav id="profileList" className="header-nav header-nav-profile" aria-hidden="true" tabIndex="-1">
                            <nav className="header-nav-subLinks">
                                <a className="header-subLinks-firstLink header-nav-link--profile" href="https://cursos.alura.com.br/user/rafael-rollo" tabIndex="-1">Perfil &amp; Certificados</a>
                                <a className="header-subLinks-secondLink" href="https://cursos.alura.com.br/my_profile" tabIndex="-1">Editar perfil</a>
                            </nav>

                            <a className="header-nav-link header-nav-link--activities" href="https://cursos.alura.com.br/user/rafael-rollo/actions" tabIndex="-1">
                                Minhas Atividades
                            </a>
                            <a className="header-nav-link header-nav-link--purchases" href="https://cursos.alura.com.br/user/payments" tabIndex="-1">
                                Minhas compras
                            </a>
                            <a className="header-nav-link header-nav-link--logout" href="https://cursos.alura.com.br/signout" tabIndex="-1">
                                Sair
                            </a>
                        </nav>
                    </div>
                </nav>
            </div>
        </header>
      </div>
    );
  }
}

export default HeaderForum;