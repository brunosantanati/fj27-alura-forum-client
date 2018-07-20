import React, { Component } from 'react';
import './style.css';
import './prettify.css';

class DuvidaTopico extends Component {

    render() {
        return (
            <section className="topic-post" id="686943">
                <div className="container">
                    <section className="topic-post-header">
                        <section itemProp="author" itemScope="" itemType="http://schema.org/Person" className="topic-post-author">
                            <a href="/user/pedronunesfx" className="topic-post-author-photo">
                                <img src="https://www.gravatar.com/avatar/b0095a2788875ff47afea7ddb801e5f3.png?r=PG&amp;size=60x60&amp;d=https%3A%2F%2Fcursos.alura.com.br%2Fimages%2Fforum%2Favatar_p.png"
                                    alt="" className="topic-post-author-photo-img" />
                            </a>
                            <div className="topic-post-author-details">
                                <a href="/user/pedronunesfx" itemProp="name" className="topic-post-author-name">
                                    pedronunesfx
                                </a>
                                <div className="topic-post-author-exp">(1.8k
                                    <span>xp</span>, 5
                                    <span>posts</span>)
                                </div>
                                <span className="topic-post-author-desc"></span>
                            </div>
                        </section>
                    </section>

                    <section itemProp="text" className="topic-post-content">
                        <p>Olá meus amigos. Estou travado em um erro talvez muito estúpido. Eu faço uma Post Request (Http) e em seguida
                            eu precisava exibir a string de resposta em um alertController, mas a resposta demora alguns milisegundos
                            para chegar e só chega depois que o alertController foi exibido.</p>
                        <p>Existe alguma maneira de forçar o meu código a parar e esperar a chegada da resposta da minha chamada? Vi alguns
                            comentários sobre Promises e Callbacks porém não entendi muito bem como implementá-los de maneira prática.</p>
                        <p>Se alguém puder ajudar, aqui está o meu código simplificado:</p>
                        <pre className="prettyprint"><code><span className="pln">      verifica</span><span className="pun">(</span><span className="pln">address</span><span className="pun">,</span><span className="pln"> password</span><span className="pun">)&#123;</span><span className="pln">      
                        </span><span className="kwd">this</span><span className="pun">.</span><span className="pln">getTreinadorPokemon</span><span className="pun">(</span><span className="pln">address</span><span className="pun">);</span><span className="pln">
                </span><span className="com">//AQUI ELE DEVIA ESPERAR O RESULTADO DA FUNÇÃO</span><span className="pln">
                </span><span className="com">//getTreinadorPokemon ANTES DE CONTINUAR</span><span className="pln">
                        let alert </span><span className="pun">=</span><span className="pln"> </span><span className="kwd">this</span><span className="pun">.</span><span className="pln">alertCtrl</span><span className="pun">.</span><span className="pln">create</span><span className="pun">(&#123;</span><span className="pln">
                            title</span><span className="pun">:</span><span className="pln"> </span><span className="str">'Achei'</span><span className="pun">,</span><span className="pln">
                            subTitle</span><span className="pun">:</span><span className="pln"> </span><span className="str">'Seu Pokemon é:'</span><span className="pln"> </span><span className="pun">+</span><span className="pln"> </span><span className="kwd">this</span><span className="pun">.</span><span className="pln">dados</span><span className="pun">,</span><span className="pln">
                            buttons</span><span className="pun">:</span><span className="pln"> </span><span className="pun">[</span><span className="str">'Ok'</span><span className="pun">]</span><span className="pln">
                        </span><span className="pun">&#125;);</span><span className="pln">
                        alert</span><span className="pun">.</span><span className="pln">present</span><span className="pun">();</span><span className="pln">
                        </span><span className="kwd">return</span><span className="pun">;</span><span className="pln">
                        </span><span className="pun">&#125;</span><span className="pln">
                    </span><span className="pun">&#125;</span><span className="pln">
                
                
                    getTreinadorPokemon</span><span className="pun">(</span><span className="pln">address</span><span className="pun">)&#123;</span><span className="pln">
                    let body </span><span className="pun">=</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln">
                    </span><span className="str">"email"</span><span className="pln"> </span><span className="pun">:</span><span className="pln"> address
                    </span><span className="pun">};</span><span className="pln">
                    </span><span className="kwd">this</span><span className="pun">.</span><span className="pln">db</span><span className="pun">.</span><span className="pln">getDados</span><span className="pun">(</span><span className="str">'GetTreinadorPokemon'</span><span className="pun">,</span><span className="pln">body</span><span className="pun">).</span><span className="pln">subscribe</span><span className="pun">(</span><span className="pln">
                    </span><span className="pun">(</span><span className="pln">data</span><span className="pun">)</span><span className="pln"> </span><span className="pun">=&gt;</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln">
                        </span><span className="kwd">this</span><span className="pun">.</span><span className="pln">dados </span><span className="pun">=</span><span className="pln"> data</span><span className="pun">.</span><span className="pln">pokemon</span><span className="pun">;</span><span className="pln">
                    </span><span className="pun">},</span><span className="pln">
                    </span><span className="pun">(</span><span className="pln">err</span><span className="pun">)</span><span className="pln"> </span><span className="pun">=&gt;</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln">
                        console</span><span className="pun">.</span><span className="pln">log</span><span className="pun">(</span><span className="str">"Você não possui um Pokémon ainda :("</span><span className="pun">);</span><span className="pln">
                    </span><span className="pun">}</span><span className="pln">
                    </span><span className="pun">);</span><span className="pln">
                </span><span className="pun">}</span></code></pre>
                        <p>Agradeço desde já! Um abraço a todos!</p>
                    </section>

                    <div className="topic-post-actions">
                        <a className="topic-button topic-post-editButton" role="button" href="/forum/editar/post/686943">Editar</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default DuvidaTopico;