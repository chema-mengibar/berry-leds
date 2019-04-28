import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import MainCSS from 'style/main.map';
import theme from 'shared/theme.map'
import BlockLed from './components/BlockLed/BlockLed';
import BlockControl from './components/BlockControl/BlockControl';



const AppWrapper = styled.div`
  background-color: red;
  height:100%;
  width:100%;  
 
  @media (max-width: 700px) {
    background-color: ${theme.color.green};
  }
`

class App extends Component{
  render(){
    return(
      <AppWrapper>
        <MainCSS/>
        <BlockLed />
        <BlockControl />
      </AppWrapper>
    )
  }
}

export default App;