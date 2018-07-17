import React, { Component } from 'react';
import './style.css';

import HeaderForum from '../../components/HeaderForum';
import BannerForum from '../../components/BannerForum';
import MenuForum from '../../components/MenuForum';

class HomePage extends Component {
  
  render() {
    return (
      <div>
        <HeaderForum />
        <BannerForum />
        <MenuForum />
      </div>
    );
  }
}

export default HomePage;