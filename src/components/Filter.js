import React from 'react';

const korean = ["ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅅ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"]
const english = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

class Filter extends React.Component{
  render = () => {
    return(
      <div>
        <p>
          {korean.map((korean) => {
            return(<span>{korean} </span> )
          })}
        </p>
        <p>
          {english.map((english) => {
            return(<span>{english} </span>)
          })}
        </p>
      </div>
    )
  }
}

export default Filter;