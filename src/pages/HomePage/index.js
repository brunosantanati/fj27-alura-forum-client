import React, { Component } from 'react';
import './style.css';

import HeaderForum from '../../components/HeaderForum';
import BannerForum from '../../components/BannerForum';
import MenuForum from '../../components/MenuForum';
import ForumItem from '../../components/ForumItem';

class HomePage extends Component {
  
  render() {
    return (
      <div>
        <HeaderForum />
        <BannerForum />
        <section class="allTopics container">
          <MenuForum />
          <ForumItem />
          <ForumItem/>
          <ForumItem />
          <ForumItem />
        </section>  
      </div>
    );
  }
}

export default HomePage;