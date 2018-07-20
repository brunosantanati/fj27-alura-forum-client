import React, { Component } from 'react';
import './style.css';
import './prettify.css';

class RespostaTopico extends Component {

    render() {
        return (
            <section itemProp="suggestedAnswer" itemScope="" itemType="http://schema.org/Answer" className="topic-post" id="690911">
                <div className="container">

                    {this.props.isSolution && 
                        <div className="topic-post-solved">
                            <span className="topic-post-solved-text">solução</span>
                        </div>
                    }

                    <section className="topic-post-header">
                        <section itemProp="author" itemScope="" itemType="http://schema.org/Person" className="topic-post-author">
                            <a href="/user/wandersonmaceds" className="topic-post-author-photo">
                                <img src="https://www.gravatar.com/avatar/3660fcfb961d50410221b91c335353e9.png?r=PG&amp;size=60x60&amp;d=https%3A%2F%2Fcursos.alura.com.br%2Fimages%2Fforum%2Favatar_w.png"
                                    alt="" className="topic-post-author-photo-img" />
                            </a>

                            <div className="topic-post-author-details">
                                <a href="/user/wandersonmaceds" itemProp="name" className="topic-post-author-name">
                                    Wanderson Macêdo
                                </a>
                                <div className="topic-post-author-exp">(2412.4k
                                    <span>xp</span>, 4824
                                    <span>posts</span>)</div>
                                <span className="topic-post-author-moderator">Moderador</span>
                                <span className="topic-post-author-desc">Monitor em Fórum</span>
                            </div>
                        </section>

                        <time itemProp="dateCreated" dateTime="2018-07-20 14:26">
                            <span className="topic-post-date">1 hora atrás</span>
                        </time>
                    </section>

                    <section itemProp="text" className="topic-post-content">
                        <p>Oi Kelvin, o caminho para o javadoc command depende um pouco, você está no Windows? Seu Java está no PATH do
                            sistema? O Eclipse deveria conseguir achar seu javadoc</p>
                    </section>

                    <div className="topic-post-actions answer-options">
                        <a className="topic-button topic-post-editButton" role="button" href="/forum/editar/post/690911">Editar</a>
                        
                        {!this.props.isSolution && 
                            <form className="topic-post-solveForm" action="/forum/solucao" method="POST">
                                <input type="hidden" value="690911" name="post.id" />
                                <button type="submit" className="topic-button topic-post-solveButton">
                                    <span className="topic-post-solveButton-hideMobile">Marcar como</span> solução</button>
                            </form>
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default RespostaTopico;