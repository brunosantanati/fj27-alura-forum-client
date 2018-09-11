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
import BuscaDuvidasService from '../../services/BuscaDuvidasService';
import PainelDuvidasForum from '../../components/PainelDuvidasForum';

class HomePage extends Component {
  
  render() {

    return (
      <div>
        <HeaderForum hasLoggedUser={true}/>
        <BannerForum />
        <section className="allTopics container">
        
          <DashboardCategoriasForum />
          <PainelDuvidasForum />

        </section>
        <FooterForum /> 
 
      </div>
    );
  }
}

export default HomePage;