import React, { Component } from 'react';
import './style.css';

import HeaderForum from '../../components/HeaderForum';
import BannerForum from '../../components/BannerForum';
import FooterForum from '../../components/FooterForum';

import HeaderTopico from '../../components/HeaderTopico';
import DuvidaTopico from '../../components/DuvidaTopico';
import RespostaTopico from '../../components/RespostaTopico';

class TopicoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            solved: true //this.props.solved
        };
    }

    showSolvedLabel() {
        if (this.state.solved) {
            return (
                <div className="allTopics topic-solved">
                    <div className="container">
                        <p className="topic-solved-text">Solucionado <a href="#687145">(ver solução)</a></p>
                    </div>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div>
                <HeaderForum />
                <BannerForum />
                {this.showSolvedLabel()}
                <section className="allTopics container">
                    <HeaderTopico />
                    <DuvidaTopico />
                </section>

                <div className="topic-answers-banner">
                    <div className="container">
                            2 <span>respostas</span>
                    </div>
                </div>

                <section className="allTopics container">
                    <RespostaTopico isSolution={true}/>
                    <RespostaTopico />
                </section>

                <FooterForum />
            </div>
        );
    }
}

export default TopicoPage;