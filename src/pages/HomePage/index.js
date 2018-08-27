import React, { Component } from 'react';
import './style.css';

import HeaderForum from '../../components/HeaderForum';
import BannerForum from '../../components/BannerForum';
import MenuDuvidasForum from '../../components/MenuDuvidasForum';
import ItemDuvidaForum from '../../components/ItemDuvidaForum';
import PaginacaoForum from '../../components/PaginacaoForum';
import FooterForum from '../../components/FooterForum';
import DashboardCategoriasForum from '../../components/DashboardCategoriasForum';
import FetchAluraForumService from '../../services/FetchAluraForumService';

class HomePage extends Component {
  
  constructor() {
    super();
    this.state = {
      duvidas: [] 
    }
  }
  
  componentDidMount = () => {  
    FetchAluraForumService.get('topics/')
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