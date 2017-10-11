import React from 'react';
import SearchForm from './Search';
import TitleComp from './Title';
import Filter from './Filter';

class Header extends React.Component{
  render = () => {
    return (
      <div className = "App-header">
        <TitleComp />
        <SearchForm />
        <Filter />
      </div>
    );
  }
};

export default Header;