import React, { Component } from 'react';
import './style.css';
import IconeNotSolved from './resources/icon-not-solved.svg';
import FotoPerfil from './resources/0f4657fc82d9fbe2d15eb29daaf7daa7.png';

class ItemDuvidaForum extends Component {
    render() {
        const { duvida } = this.props;

        return (
        <div>

            <li className="forumList-item" itemID="/forum/topico-respostas-iguais-na-questao-sobre-fluxo-binario-65105" itemScope="" itemType="http://schema.org/DiscussionForumPosting">
                <div className="forumList-item-subject">
                    <div className="forumList-item-icon">
                        <img height="30px" width="30px" className="forumList-icon-notsolved" src={IconeNotSolved} alt="" />
                    </div>

                    <div className="forumList-item-subject-info">
                        <h2 className="forumList-item-subject-info-title">
                            <a itemProp="about" className="forumList-item-subject-info-title-link" href="https://cursos.alura.com.br/forum/topico-respostas-iguais-na-questao-sobre-fluxo-binario-65105">{duvida.shortDescription}</a>
                        </h2>


                        <nav className="topic-breadCrumb">
                            <ol className="topic-breadCrumb-list">

                                <li className="topic-breadCrumb-item">
                                    <a id="topic-breadCrumb-item-category-65105" href="#" className="topic-breadCrumb-item-link">{duvida.course.subcategory.category.name}</a>
                                </li>

                                <li className="topic-breadCrumb-item">
                                    <a id="topic-breadCrumb-item-subcategory-65105" href="#" className="topic-breadCrumb-item-link">{duvida.course.subcategory.name}</a>
                                </li>

                                <li className="topic-breadCrumb-item">
                                    <a id="topic-breadCrumb-item-course-65105" href="#" className="topic-breadCrumb-item-link">{duvida.course.name}</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="forumList-item-wrapper">
                    <div className="forumList-item-infoGroup">
                        <a href="https://cursos.alura.com.br/user/clecio1201" className="forumList-item-info" itemProp="author" itemScope="" itemType="http://schema.org/Person">
                            <img className="forumList-item-info-avatar" src={FotoPerfil} alt="" />
                            <div className="forumList-item-info-description">
                                <p className="forumList-item-info-name">por
                                    <strong itemProp="name">{duvida.owner.name}</strong>
                                </p>
                                <time itemProp="dateModified" dateTime="2018-07-12 15:38">
                                    <p className="forumList-item-info-updatedAt">atualizado 5 minutos atrás</p>
                                </time>
                            </div>
                        </a>
                    </div>

                    <div className="forumList-item-answers" itemProp="interactionStatistic" itemScope="" itemType="http://schema.org/InteractionCounter">
                        <link itemProp="interactionType" href="http://schema.org/CommentAction"/>
                        <span className="forumList-item-answers-number" itemProp="userInteractionCount">{duvida.answers.length}</span>
                        <span className="forumList-item-answers-description">
                            respostas
                        </span>
                    </div>
                </div>
            </li>


        </div>
        );
    }
} export default ItemDuvidaForum;