import React, { Component } from 'react';
import './style.css';

class HeaderTopico extends Component {

    render() {
        return (
            <header className="topic-header">
                <div className="topic-header-container">
                    <div className="topic-header-container-info">
                        <h1 itemprop="name" className="topic-header-container-title">
                            Como resolver o assincronismo de uma Post Request no Ionic?
                        </h1>

                        <nav className="topic-breadCrumb">
                            <ol className="topic-breadCrumb-list">

                                <li className="topic-breadCrumb-item">
                                    <a id="topic-breadCrumb-item-category-64479" href="/forum/categoria-mobile" className="topic-breadCrumb-item-link">Mobile</a>
                                </li>

                            </ol>
                        </nav>

                        <div className="topic-container-details-moderator">

                            <a href="/forum/modify/breadcrumb/64479">Mudar categoria</a> |

                            <a id="close-link" href="/forum/topic/toggle-status/64479">
                                Fechar tópico
                            </a>
                        </div>
                    </div>

                    <div className="topic-header-container-details">
                        <div className="topic-header-container-details-date">
                            <time itemprop="dateCreated" datetime="03/07/18">
                                2 semanas atrás
                            </time>
                        </div>

                        <div className="topic-header-container-details-edit">
                            <a className="topic-header-container-details-edit-link" href="/forum/topic/edit/64479">Editar tópico</a>
                        </div>

                        <div className="topic-header-container-details-watch">
                            <label className="topic-header-container-details-labelFollow" for="follow">acompanhar tópico</label>
                            <input className="topic-header-container-details-input" id="follow" type="checkbox" name="follow" data-topic="64479" />
                        </div>

                        <div className="topic-header-container-details-pin">
                            <label className="topic-header-container-details-labelPin" for="pin">pinar tópico</label>
                            <input className="topic-header-container-details-input" id="pin" type="checkbox" name="pin" data-topic="64479" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderTopico;