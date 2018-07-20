import React, { Component } from 'react';

class NovaRespostaTopico extends Component {

    render() {
        return (
            <div className="container">

                {this.props.solved &&
                    <div className="container">
                        <div className="alert" data-category="alert" role="alert">
                            <img alt="" className="alert-icon" src="/images/gnarus/alert/alert.svg" />
                            <p className="alert-message">Esta dúvida já foi marcada como solucionada, se a dúvida ainda persiste, por favor abra outra discussão.</p>
                        </div>
                    </div>
                }

                <section className="topic-reply">
                    <div className="container">
                        <h2 className="topic-reply-title">O que você acha disso?</h2>

                        <form action="/forum/post/novo" method="post" className="topic-reply-form">
                            <input type="hidden" name="topicId" value="64479" />
                            <input type="hidden" name="authorUsername" value="rafael-rollo" />

                            <div className="markdownEditor isToggled" id="markdownEditor-">
                                {/* <!-- START: changes on this HTML should be replied on MarkDown.java --> */}
                                <div className="markdownEditor-buttons ">
                                    <button className="markdownEditor-button markdownEditor-button-code " data-insert-code="insira seu código aqui" type="button">
                                        Inserir código
                                    </button>
                                    <div className="markdownEditor-buttons-options">
                                        <button className="markdownEditor-button markdownEditor-button-preview isToggled" type="button" data-js-toggle="#markdownEditor-">
                                            Expandir
                                        </button>
                                        <button aria-controls="markdownEditor-help" aria-expanded="false" className="markdownEditor-button markdownEditor-button-format"
                                            type="button" data-js-toggle="#markdownEditor- .markdownEditor-help" aria-label="Abrir instruções de formatação do texto">
                                            Formatação
                                        </button>
                                    </div>
                                </div>

                                <div className="markdownEditor-area">
                                    <aside className="markdownEditor-help formattedText" aria-hidden="true" id="markdownEditor-help" tabIndex="0">

                                        <h2>How to format code</h2>
                                        <ul>
                                            <li>É possível criar blocos de código adicionando três backticks (```) antes e depois do código</li>
                                            <li>Para escapar a formatação, utilize crases `dessa _forma_`</li>
                                            <li>Serão exibidas apenas tags HTML e XML que estiverem entre ``</li>
                                        </ul>

                                        <h2>Formatação básica</h2>
                                        <ul>
                                            <li>**
                                                <strong>negrito</strong>**</li>
                                            <li>*
                                                <em>itálico</em>*</li>
                                            <li>~~
                                                <del>riscado (Strikethrough)</del>~~ </li>
                                        </ul>

                                        <h2>Como formatar links</h2>
                                        <ul>
                                            <li>&lt;http://google.com&gt;</li>
                                            <li>[Google](http://google.com)</li>
                                        </ul>
                                    </aside>

                                    <textarea aria-live="polite" aria-atomic="true" className="markdownEditor-source markdownEditor-textArea " placeholder="" name="text"
                                        maxLength="5000" id="markdownEditor--ta"></textarea>

                                    <output className="markdownEditor-preview formattedText markdownEditor-textArea " htmlFor="markdownEditor--ta"></output>
                                </div>
                                {/* <!-- END: changes on this HTML should be replied on MarkDown.java --> */}
                            </div>
                            <input className="topic-reply-form-submit" type="submit" value="Responder" />
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default NovaRespostaTopico;