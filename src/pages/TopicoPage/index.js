import React, { Component } from 'react';
import './style.css';

import HeaderForum from '../../components/HeaderForum';
import BannerForum from '../../components/BannerForum';
import FooterForum from '../../components/FooterForum';

import HeaderTopico from '../../components/HeaderTopico';
import DuvidaTopico from '../../components/DuvidaTopico';
import RespostaTopico from '../../components/RespostaTopico';
import NovaRespostaTopico from '../../components/NovaRespostaTopico';
import FetchAluraForumService from '../../services/FetchAluraForumService';

class TopicoPage extends Component {

    constructor() {
        super();
        this.state = {
            topico: {
                answers: []
            }
        };
    }

    componentDidMount() {
        const { idTopico } = this.props.history.location.state;

        FetchAluraForumService.get(`topics/${idTopico}`)
            .then(topico => this.setState({topico}));
    }

    marcaSolucao = (event, idTopico, idResposta) => {
        event.preventDefault();
        
        const uri = `topics/${idTopico}/answers/${idResposta}/solution`;
        FetchAluraForumService.post(uri)
            .then(solution => {

                const listaAtualizada = this.state.topico.answers
                    .map(answer => answer.id === solution.id ? solution : answer)

                const topico = {
                    ...this.state.topico,
                    status: 'SOLVED',
                    answers: listaAtualizada
                }

                this.setState({topico})
            })
            .catch(error => alert('Não foi possível marcar resposta como solução'))
    }

    fechaTopico = () => {
        const uri = `topics/${this.state.topico.id}/close`;

        FetchAluraForumService.post(uri)
            .catch(error => alert('Não foi possível fechar tópico.'))
    }
    
    showSolvedLabel() {
        const { topico } = this.state;
        if (topico.status === 'SOLVED') {
            return (
                <div className="allTopics topic-solved">
                    <div className="container">
                        <p className="topic-solved-text">Solucionado</p>
                    </div>
                </div>
            );
        }
    }

    atualizaRepostas = (novaResposta) => {
        const novaLista = [
            ...this.state.topico.answers,
            novaResposta
        ]

        const topicoAtualizado = {
            ...this.state.topico,
            answers: novaLista,
        }

        this.setState({topico: topicoAtualizado})
    }

    renderAnswers = () => {
        const { id, answers } = this.state.topico;
        answers.sort((x, y) => x.id - y.id)

        return answers.map(resposta => 
            <RespostaTopico key={String(resposta.id)} 
                idTopico={id} resposta={resposta} marcaSolucaoCallback={this.marcaSolucao}/>)
    }
    
    render() {
        const { topico } = this.state;

        return (
            <div>
                <HeaderForum />
                <BannerForum />

                {this.showSolvedLabel()}
                <section className="allTopics container">
                    <HeaderTopico topico={topico} fechaTopicoCallback={this.fechaTopico}/>
                    <DuvidaTopico topico={topico}/>
                </section>

                <div className="topic-answers-banner">
                    <div className="container">
                        {topico.answers.length} <span>respostas</span>
                    </div>
                </div>

                <section className="allTopics container">
                    {this.renderAnswers()}
                </section>

                <NovaRespostaTopico idTopico={topico.id} solved={topico.status === 'SOLVED'} 
                        atualizaRespostas={this.atualizaRepostas}/>
                <FooterForum />
            </div>
        );
    }
}

export default TopicoPage;