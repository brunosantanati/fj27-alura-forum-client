import React, { Component } from 'react';
import './style.css';

import HeaderForum from '../../components/HeaderForum';
import BannerForum from '../../components/BannerForum';
import MenuDuvidasForum from '../../components/MenuDuvidasForum';
import ItemDuvidaForum from '../../components/ItemDuvidaForum';
import PaginacaoForum from '../../components/PaginacaoForum';
import FooterForum from '../../components/FooterForum';
import DashboardCategoriasForum from '../../components/DashboardCategoriasForum';

class HomePage extends Component {
  
  constructor() {
    super();
    this.state = {
      duvidas: [] 
    }
  }
  
  componentDidMount = () => {
    const uri = 'http://localhost:8080/api/topics';
    
    fetch(uri)
      .then(response => {
        if(response.ok)
          return response.json();

        throw new Error('Não foi possível obter dados da API');
      })
      .then(json => this.setState({duvidas: json}))
      .catch(e => alert(e.message));
  }

  recarregaDuvidas = (duvidas) => {
    this.setState({duvidas: duvidas})
  }

  render() {
    return (
      <div>
        <HeaderForum hasLoggedUser={true}/>
        <BannerForum />
        <section className="allTopics container">
          <DashboardCategoriasForum />
          <MenuDuvidasForum atualizaDuvidasCallback={this.recarregaDuvidas}/>

          {
            this.state.duvidas.map(duvida => <ItemDuvidaForum duvida={duvida} key={String(duvida.id)}/>)
          }
          
          <PaginacaoForum />
        </section>
        <FooterForum /> 
 
      </div>
    );
  }
}

export default HomePage;