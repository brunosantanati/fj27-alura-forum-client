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
  
  render() {
    return (
      <div>
        <HeaderForum />
        <BannerForum />
        <section className="allTopics container">
          <DashboardCategoriasForum />
          <MenuDuvidasForum />
          <ItemDuvidaForum />
          <ItemDuvidaForum/>
          <ItemDuvidaForum />
          <ItemDuvidaForum />
          <PaginacaoForum />
        </section>
        <FooterForum />  
      </div>
    );
  }
}

export default HomePage;