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
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TN542JN" height="0" width="0" class="googleIframe-style"></iframe>
        </noscript>
        
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <div class="natural-header natural-header-style">
            <button class="header-hamburguinho" aria-controls="headerMobile" aria-expanded="false"></button>
            <a href="#">
                <img class="header-logo" src={IconeBusca} alt="alura" />
            </a>

        </div>

        <header id="headerMobile" class="header headerMobile headerMobile--collapsed headerMobile-style" aria-hidden="true">

            <section id="headerBusca" class="headerBusca ">
                <div class="container">

                    <a href="#" aria-label="busca" class="headerBusca-icon" role="button" aria-expanded="false"
                        aria-controls="headerBusca-form">
                        <img class="headerBusca-icon-svg" src={IconeBusca} alt=""/>
                    </a>
                    <form action="https://cursos.alura.com.br/search" id="headerBusca-form" class="headerBusca-form headerBusca-form--retratil"
                        aria-hidden="true">
                        <label for="headerBusca-campoBusca">Qual curso procura?</label>
                        <input type="search" class="skipKeyPress headerBusca-form-input" id="headerBusca-campoBusca" name="query" placeholder="Digite aqui a busca" />
                        <button class="headerBusca-submit" type="submit">Buscar</button>
                    </form>

                </div>
            </section>

            <div class="headerMobile-collapsed-top">
                <button class="header-hamburguinho header-hamburguinho--branco" aria-controls="headerMobile" aria-expanded="true"></button>
            </div>

            <div class="headerMobile-content">

                <section class="headerMobile-content-headline">
                    <div class="content-headline-profile ">
                        <img src={Avatar} alt="Foto de Fulano de Tal" class="headline-profile-avatar" />
                        <span class="headline-profile-info">
                            <p class="profile-info-name">Fulano</p>
                            <a href="#" class="points-link header-profile-pontos" aria-label="seu total de pontos é 414.1k">
                                <div class="levelMenu-header-user-points-xp" aria-hidden="true">
                                    414.1k
                                    <span class="levelMenu-header-user-points-xp-name">xp</span>
                                </div>

                                <div class="pointsGrid pointsGrid--small" aria-label="total de pontos por dia">
                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 13/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1000 pontos</strong>
                                            em 14/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 15/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 16/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 17/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 18/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>400 pontos</strong>
                                            em 19/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>200 pontos</strong>
                                            em 20/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>200 pontos</strong>
                                            em 21/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1000 pontos</strong>
                                            em 22/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 23/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 24/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--medium-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>2000 pontos</strong>
                                            em 25/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 26/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1000 pontos</strong>
                                            em 27/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>200 pontos</strong>
                                            em 28/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 29/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 30/06/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 01/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1300 pontos</strong>
                                            em 02/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                        <span class="pointsGrid-cell-details">
                                            ganhou
                                            <strong>1000 pontos</strong>
                                            em 03/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 04/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 05/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 06/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 07/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 08/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 09/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 10/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 11/07/2018
                                        </span>
                                    </div>

                                    <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                        <span class="pointsGrid-cell-details">
                                            não ganhou pontos em 12/07/2018
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </span>
                    </div>

                    <button aria-label="novidades" class="header-news-button notification-not-seen" aria-controls="headerNews" aria-expanded="false">
                        <img src={IconeNotificacoes} alt=""/>
                    </button>
                    <div id="headerNews" class="header-news header-nav" aria-hidden="true" tabindex="-1" data-last-seen="37206" data-history-code="38828">
                        <span class="header-news-text">Novos Cursos</span>
                        <ul class="header-news-list">

                            <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                <a class="header-news-item-link " href="https://cursos.alura.com.br/course/android-boas-praticas-e-cenarios-testes" tabindex="-1">
                                    <img class="header-news-item-link-icon" src="./forum-todos_files/android-boas-praticas-e-cenarios-testes.svg" alt="Ícone do curso Android parte 2: Boas práticas e novos cenários de testes"
                                        width="45px" height="45px" />
                                    <span>Android parte 2: Boas práticas e novos cenários de testes</span>
                                </a>
                            </li>

                            <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                <a class="header-news-item-link " href="https://cursos.alura.com.br/course/prototipagem-ux-link-com-telas-no-adobe-xd" tabindex="-1">
                                    <img class="header-news-item-link-icon" src="./forum-todos_files/prototipagem-ux-link-com-telas-no-adobe-xd.svg" alt="Ícone do curso Prototipagem e UX parte 2: linkando telas no Adobe XD"
                                        width="45px" height="45px" />
                                    <span>Prototipagem e UX parte 2: linkando telas no Adobe XD</span>
                                </a>
                            </li>

                            <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                <a class="header-news-item-link " href="https://cursos.alura.com.br/course/vfx-video-composite" tabindex="-1">
                                    <img class="header-news-item-link-icon" src="./forum-todos_files/vfx-video-composite.svg" alt="Ícone do curso Adobe Photoshop e Adobe After Effects: Trabalhando com vídeo composite no vfx"
                                        width="45px" height="45px" />
                                    <span>Adobe Photoshop e Adobe After Effects: Trabalhando com vídeo composite no vfx</span>
                                </a>
                            </li>

                            <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                <a class="header-news-item-link " href="https://cursos.alura.com.br/course/raspberry-pi-node-red" tabindex="-1">
                                    <img class="header-news-item-link-icon" src="./forum-todos_files/raspberry-pi-node-red.svg" alt="Ícone do curso Raspberry Pi: Elabore aplicações com o Node-RED"
                                        width="45px" height="45px" />
                                    <span>Raspberry Pi: Elabore aplicações com o Node-RED</span>
                                </a>
                            </li>

                            <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                <a class="header-news-item-link " href="https://cursos.alura.com.br/course/angular-autenticacao" tabindex="-1">
                                    <img class="header-news-item-link-icon" src="./forum-todos_files/angular-autenticacao.svg" alt="Ícone do curso Angular parte 2: Autenticação, Forms e lazy loading"
                                        width="45px" height="45px" />
                                    <span>Angular parte 2: Autenticação, Forms e lazy loading</span>
                                </a>
                            </li>

                        </ul>
                        <a class="header-news-text" href="https://cursos.alura.com.br/latest-courses" tabindex="-1">Ver mais lançamentos</a>
                    </div>
                </section>

                <menu class="header-content-menu" role="navigation">
                    <section class="content-menu-section">
                        <h2 class="content-menu-title" tabindex="0">
                            <a class="content-menu-button menu-button-mobile">
                                Cursos
                            </a>
                        </h2>

                        <nav id="courseList" class="header-nav" aria-hidden="true" role="region" tabindex="-1" aria-labelledby="courseLabel">
                            <a class="header-nav-link header-item-link--dashboard" href="https://cursos.alura.com.br/dashboard" tabindex="-1">Dashboard</a>
                            <a class="header-nav-link header-item-link--careers" href="https://cursos.alura.com.br/careers" tabindex="-1">Carreiras</a>
                            <a href="https://cursos.alura.com.br/formacoes" class="header-nav-link header-item-link--degrees" tabindex="-1">Formações</a>
                            <a href="https://cursos.alura.com.br/recommendations" class="header-nav-link header-item-link--recommendations" tabindex="-1">Recomendações</a>

                            <nav class="header-nav-subLinks">
                                <a class="header-subLinks-firstLink header-nav-link--courses" href="https://cursos.alura.com.br/courses/mine" tabindex="-1">Meus Cursos</a>
                                <a class="header-subLinks-secondLink" href="https://cursos.alura.com.br/latest-courses" tabindex="-1">Novos Cursos</a>
                            </nav>

                            <a class="header-nav-link header-nav-link--dashboardAdmin" href="https://cursos.alura.com.br/instructor/dashboard" tabindex="-1">
                                Dashboard Instrutor
                                <span class="header-link-admin">Admin</span>
                            </a>
                        </nav>
                    </section>

                    <section class="content-menu-section">
                        <h2 class="content-menu-title" tabindex="0">
                            <a class="content-menu-button menu-button-mobile">
                                Comunidade
                            </a>
                        </h2>

                        <nav id="communityList" class="header-nav" aria-hidden="true" tabindex="-1">
                            <nav class="header-nav-subLinks">
                                <a class="header-subLinks-firstLink header-item-link--forum" href="https://cursos.alura.com.br/forum" tabindex="-1">Fórum</a>
                                <a class="header-subLinks-secondLink" href="https://cursos.alura.com.br/forum/participacao" tabindex="-1">Minhas discussões</a>
                            </nav>
                            <a class="header-nav-link header-nav-link--ranking" href="https://cursos.alura.com.br/user/rafael-rollo/rank/monthly" tabindex="-1">Ranking</a>
                            <a class="header-nav-link header-nav-link--news" href="https://cursos.alura.com.br/news/latest" tabindex="-1">Últimas notícias</a>
                            <a class="header-nav-link header-nav-link--reviews" href="https://cursos.alura.com.br/suggestions" tabindex="-1">
                                Revisões
                                <span class="header-link-admin">Admin</span>
                            </a>
                        </nav>
                    </section>

                    <section class="content-menu-section">
                        <h2 class="content-menu-title" tabindex="0">
                            <a class="content-menu-button menu-button-mobile button-mobile--collapsed">
                                Meu Perfil
                            </a>
                        </h2>

                        <nav id="profileList" class="header-nav header-nav-profile" aria-hidden="true" tabindex="-1">
                            <nav class="header-nav-subLinks">
                                <a class="header-subLinks-firstLink header-nav-link--profile" href="https://cursos.alura.com.br/user/rafael-rollo" tabindex="-1">Perfil &amp; Certificados</a>
                                <a class="header-subLinks-secondLink" href="https://cursos.alura.com.br/my_profile" tabindex="-1">Editar perfil</a>
                            </nav>

                            <a class="header-nav-link header-nav-link--activities" href="https://cursos.alura.com.br/user/rafael-rollo/actions" tabindex="-1">
                                Minhas Atividades
                            </a>
                            <a class="header-nav-link header-nav-link--purchases" href="https://cursos.alura.com.br/user/payments" tabindex="-1">
                                Minhas compras
                            </a>
                            <a class="header-nav-link header-nav-link--logout" href="https://cursos.alura.com.br/signout" tabindex="-1">
                                Sair
                            </a>
                        </nav>
                    </section>
                </menu>
            </div>
        </header>

        <section id="headerBusca" class="headerBusca headerBusca-desktop">
            <div class="container">

                <a href="#" aria-label="busca" class="headerBusca-icon" role="button" aria-expanded="false"
                    aria-controls="headerBusca-form">
                    
                    <img class="headerBusca-icon-svg" src={IconeBusca} alt=""/>
                </a>
                <form action="https://cursos.alura.com.br/search" id="headerBusca-form" class="headerBusca-form headerBusca-form--retratil"
                    aria-hidden="true">
                    <label for="headerBusca-campoBusca">Qual curso procura?</label>
                    <input type="search" class="skipKeyPress headerBusca-form-input" id="headerBusca-campoBusca" name="query" placeholder="Digite aqui a busca" />
                    <button class="headerBusca-submit" type="submit">Buscar</button>
                </form>

            </div>
        </section>

        <header class="header headerDesktop headerDesktop-style">
            <div class="container">
                <a href="#">
                    <img class="header-logo" src={LogoAlura} alt="alura" />
                </a>

                <nav class="headerDesktop-content-menu" role="navigation" aria-label="menu principal">
                    <div class="content-menu-section content-menu-section-courses">
                        <a role="button" tabindex="0" class="content-menu-title content-menu-button menu-button-desktop" aria-expanded="false" aria-controls="courseList"
                            id="courseLabel">
                            Cursos
                        </a>

                        <nav id="courseList" class="header-nav" aria-hidden="true" role="region" tabindex="-1" aria-labelledby="courseLabel">
                            <a class="header-nav-link header-item-link--dashboard" href="https://cursos.alura.com.br/dashboard" tabindex="-1">Dashboard</a>
                            <a class="header-nav-link header-item-link--careers" href="https://cursos.alura.com.br/careers" tabindex="-1">Carreiras</a>
                            <a href="https://cursos.alura.com.br/formacoes" class="header-nav-link header-item-link--degrees" tabindex="-1">Formações</a>
                            <a href="https://cursos.alura.com.br/recommendations" class="header-nav-link header-item-link--recommendations" tabindex="-1">Recomendações</a>

                            <nav class="header-nav-subLinks">
                                <a class="header-subLinks-firstLink header-nav-link--courses" href="https://cursos.alura.com.br/courses/mine" tabindex="-1">Meus Cursos</a>
                                <a class="header-subLinks-secondLink" href="https://cursos.alura.com.br/latest-courses" tabindex="-1">Novos Cursos</a>
                            </nav>

                            <a class="header-nav-link header-nav-link--dashboardAdmin" href="https://cursos.alura.com.br/instructor/dashboard" tabindex="-1">
                                Dashboard Instrutor
                                <span class="header-link-admin">Admin</span>
                            </a>
                        </nav>
                    </div>

                    <div class="content-menu-section content-menu-section-community">
                        <a role="button" tabindex="0" class="content-menu-title content-menu-button menu-button-desktop" aria-expanded="false" aria-controls="communityList">
                            Comunidade
                        </a>

                        <nav id="communityList" class="header-nav" aria-hidden="true" tabindex="-1">
                            <nav class="header-nav-subLinks">
                                <a class="header-subLinks-firstLink header-item-link--forum" href="https://cursos.alura.com.br/forum" tabindex="-1">Fórum</a>
                                <a class="header-subLinks-secondLink" href="https://cursos.alura.com.br/forum/participacao" tabindex="-1">Minhas discussões</a>
                            </nav>
                            <a class="header-nav-link header-nav-link--ranking" href="https://cursos.alura.com.br/user/rafael-rollo/rank/monthly" tabindex="-1">Ranking</a>
                            <a class="header-nav-link header-nav-link--news" href="https://cursos.alura.com.br/news/latest" tabindex="-1">Últimas notícias</a>

                            <a class="header-nav-link header-nav-link--reviews" href="https://cursos.alura.com.br/suggestions" tabindex="-1">
                                Revisões
                                <span class="header-link-admin">Admin</span>
                            </a>
                        </nav>
                    </div>

                    <div class="content-menu-section content-menu-section-news">
                        <button aria-label="novidades" class="header-news-button notification-not-seen" aria-controls="headerNews" aria-expanded="false">
                            <img src={IconeNotificacoes} alt=""/>
                        </button>
                        <div id="headerNews" class="header-news header-nav" aria-hidden="true" tabindex="-1" data-last-seen="37206" data-history-code="38828">

                            <span class="header-news-text">Novos Cursos</span>
                            <ul class="header-news-list">

                                <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                    <a class="header-news-item-link " href="https://cursos.alura.com.br/course/android-boas-praticas-e-cenarios-testes" tabindex="-1">
                                        <img class="header-news-item-link-icon" src="./forum-todos_files/android-boas-praticas-e-cenarios-testes.svg" alt="Ícone do curso Android parte 2: Boas práticas e novos cenários de testes"
                                            width="45px" height="45px" />
                                        <span>Android parte 2: Boas práticas e novos cenários de testes</span>
                                    </a>
                                </li>

                                <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                    <a class="header-news-item-link " href="https://cursos.alura.com.br/course/prototipagem-ux-link-com-telas-no-adobe-xd" tabindex="-1">
                                        <img class="header-news-item-link-icon" src="./forum-todos_files/prototipagem-ux-link-com-telas-no-adobe-xd.svg" alt="Ícone do curso Prototipagem e UX parte 2: linkando telas no Adobe XD"
                                            width="45px" height="45px" />
                                        <span>Prototipagem e UX parte 2: linkando telas no Adobe XD</span>
                                    </a>
                                </li>

                                <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                    <a class="header-news-item-link " href="https://cursos.alura.com.br/course/vfx-video-composite" tabindex="-1">
                                        <img class="header-news-item-link-icon" src="./forum-todos_files/vfx-video-composite.svg" alt="Ícone do curso Adobe Photoshop e Adobe After Effects: Trabalhando com vídeo composite no vfx"
                                            width="45px" height="45px" />
                                        <span>Adobe Photoshop e Adobe After Effects: Trabalhando com vídeo composite no vfx</span>
                                    </a>
                                </li>

                                <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                    <a class="header-news-item-link " href="https://cursos.alura.com.br/course/raspberry-pi-node-red" tabindex="-1">
                                        <img class="header-news-item-link-icon" src="./forum-todos_files/raspberry-pi-node-red.svg" alt="Ícone do curso Raspberry Pi: Elabore aplicações com o Node-RED"
                                            width="45px" height="45px" />
                                        <span>Raspberry Pi: Elabore aplicações com o Node-RED</span>
                                    </a>
                                </li>

                                <li class="header-news-item header-news-item--highlighted" tabindex="-1">
                                    <a class="header-news-item-link " href="https://cursos.alura.com.br/course/angular-autenticacao" tabindex="-1">
                                        <img class="header-news-item-link-icon" src="./forum-todos_files/angular-autenticacao.svg" alt="Ícone do curso Angular parte 2: Autenticação, Forms e lazy loading"
                                            width="45px" height="45px" />
                                        <span>Angular parte 2: Autenticação, Forms e lazy loading</span>
                                    </a>
                                </li>

                            </ul>
                            <a class="header-news-text" href="https://cursos.alura.com.br/latest-courses" tabindex="-1">Ver mais lançamentos</a>

                        </div>
                    </div>

                    <div class="content-menu-section content-menu-section-levelMenu">
                        <a href="#" class="points-link header-profile-pontos" aria-label="seu total de pontos é 414.1k">
                            <div class="levelMenu-header-user-points-xp" aria-hidden="true">
                                414.1k
                                <span class="levelMenu-header-user-points-xp-name">xp</span>
                            </div>

                            <div class="pointsGrid pointsGrid--small" aria-label="total de pontos por dia">

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 13/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1000 pontos</strong>
                                        em 14/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 15/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 16/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 17/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 18/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>400 pontos</strong>
                                        em 19/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>200 pontos</strong>
                                        em 20/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>200 pontos</strong>
                                        em 21/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1000 pontos</strong>
                                        em 22/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 23/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 24/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--medium-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>2000 pontos</strong>
                                        em 25/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 26/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1000 pontos</strong>
                                        em 27/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>200 pontos</strong>
                                        em 28/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 29/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 30/06/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 01/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1300 pontos</strong>
                                        em 02/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--low-score">
                                    <span class="pointsGrid-cell-details">
                                        ganhou
                                        <strong>1000 pontos</strong>
                                        em 03/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 04/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 05/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 06/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 07/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 08/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 09/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 10/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 11/07/2018
                                    </span>
                                </div>

                                <div class="pointsGrid-cell pointsGrid-cell--no-score" aria-hidden="true">
                                    <span class="pointsGrid-cell-details">
                                        não ganhou pontos em 12/07/2018
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="content-menu-section content-menu-section-profile ">
                        <a role="button" tabindex="0" aria-label="minha conta" class="content-menu-button menu-button-desktop profile-info-name"
                            aria-expanded="false" aria-controls="profileList">
                            <img src={Avatar} alt="Foto do Fulano de Tal" class="headline-profile-avatar headline-profile-avatar"/>
                            <span class="screenReader-only">perfil de</span>Fulano
                        </a>

                        <nav id="profileList" class="header-nav header-nav-profile" aria-hidden="true" tabindex="-1">
                            <nav class="header-nav-subLinks">
                                <a class="header-subLinks-firstLink header-nav-link--profile" href="https://cursos.alura.com.br/user/rafael-rollo" tabindex="-1">Perfil &amp; Certificados</a>
                                <a class="header-subLinks-secondLink" href="https://cursos.alura.com.br/my_profile" tabindex="-1">Editar perfil</a>
                            </nav>

                            <a class="header-nav-link header-nav-link--activities" href="https://cursos.alura.com.br/user/rafael-rollo/actions" tabindex="-1">
                                Minhas Atividades
                            </a>
                            <a class="header-nav-link header-nav-link--purchases" href="https://cursos.alura.com.br/user/payments" tabindex="-1">
                                Minhas compras
                            </a>
                            <a class="header-nav-link header-nav-link--logout" href="https://cursos.alura.com.br/signout" tabindex="-1">
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