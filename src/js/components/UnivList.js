import React from 'react';

const univs = [
  {
    location: '서울',
    university: '00대학교',
    image: '',
    svgFile: '',
    pngFile: '',
  },
  {
    location: '서울',
    university: '00대학교',
    image: '',
    svgFile: '',
    pngFile: '',
  },
  {
    location: '경기',
    university: '00대학교',
    image: '',
    svgFile: '',
    pngFile: '',
  },
  {
    location: '제주도',
    university: '00대학교',
    image: '',
    svgFile: '',
    pngFile: '',
  },
]

class UnivItem extends React.Component{
  render = () => {
    return (
        <div className="card">
          <div className="content">
            {/* <img className="left floated mini ui image" src="/images/avatar/large/elliot.jpg" /> */}
            <div className="meta left">{this.props.location}</div>
            <div className="header">{this.props.university}</div>
          </div>
          <div className="extra content">
            <div className="ui fluid button">
              <img src="" alt=""/>
              로고 규정 확인하기
            </div>
            <div className="ui two buttons"
              sytle ={{
                marginTop : "10px"
              }}
            >
              <a href="./img/png/PNG_1.png" download className="ui basic yellow button">SVG</a>
              <div className="ui basic olive button">PNG</div>
            </div>
          </div>
        </div>
    );
  };
}

class UnivList extends React.Component{
  render = () =>{
    return (
      <div className="ui four link stackable cards">
      {univs.map((univ)=>{
        return (
          <UnivItem 
            location = {univ.location}
            university = {univ.university}
          />
        )
      })}
      </div>
    )
  }
}
export default UnivList;