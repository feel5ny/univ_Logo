import React from 'react';

class SearchForm extends React.Component{
  render = () => {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="학교 이름을 검색하세요"/>
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    );
  }
};

export default SearchForm;