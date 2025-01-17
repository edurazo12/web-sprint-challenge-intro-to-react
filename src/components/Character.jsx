import React from 'react'
import styled from 'styled-components';


function Character(props) {
    const characterDeets = props.props;
    console.log(characterDeets);
    
    const newList = characterDeets.map(i => {
        return (
            <MainDiv>
            
                <HeaderFour>My name is {i.name} </HeaderFour>
                <HeaderFive>Check out my stats</HeaderFive>
                <p>Gender: {i.gender}</p>
                <p>Birth: {i.birth_year}
                <p>Eyes: {i.eye.color}</p>
                <p>Height in cm: {i.height}</p>
            </MainDiv>
        )
});
return newList 
}

export default Character

const MaiDiv = styled.div`
  height: 100%;
  text-content: center;
  background-color: #e0dcda;
  color: #2e1e18;
  margin: 1% 40%;
  padding: 10px;
  border: 1px solid #b0a9a5;
  margin-top: none!important;
  margin-bottom: none!important;
  
  ;
  const HeaderFour = styled.h4`
  text-shadow: 1px 1px 5px #fff;d
  
 `;
 
 const HeaderFive = styled.h5`
  text-shadow: 1px 1px 5px #fff;
`;
  
  
  
  
  
  
                                 
