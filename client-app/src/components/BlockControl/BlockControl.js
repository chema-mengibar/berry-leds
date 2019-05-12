import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import theme from 'shared/theme.shared';
import ColorBarWrapper from './ColorBarWrapper.BlockControl';
import { connect } from 'react-redux';
import { setMode } from 'store/actions.store';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  mode: state.appState.mode,
});

const mapDispatchToProps = {
  storeSetMode: setMode
}

const BlockControlWrapper = styled.div`
  height:250px;
  width:100%;  
  padding:30px 0 0;
  background-color: rgb(${theme.color.grey_dark});
  flex-grow:1;
  box-sizing: border-box;
`

const BlockControlLabel = styled.div`
  padding-left:30px;
  margin-bottom:20px;

  .title{
    color:rgb( ${theme.color.light} );
    font-weight: ${theme.fontWeigth.primary};
    font-size:28px;
    text-transform: uppercase;
  }
`
const MenuMode = styled.div`
  height:30px;
  width:100%;
  display:flex;
  flex-direction:row;
`
const Tab = styled.div`
  flex-grow:1;
  text-align:center;
  line-height:30px;
  background: rgba( ${theme.color.light} , .04);
  color: rgb(${theme.color.light});
  cursor:pointer;
  -webkit-transition: background-color 400ms ease-in;
  -ms-transition: background-color 400ms ease-in;
  transition: background-color 400ms ease-in;
  
  // ${ (props) => props.active && css`
  //   background: rgba( ${theme.color.light}, 1.0);
  //   color: rgb(${theme.color.grey_dark});
  // `}
  
  &.active{
    background: rgba( ${theme.color.light}, 1.0);
    color: rgb(${theme.color.grey_dark});
  }
`

const RgbSelector = styled.div`
  background-color:rgb( ${theme.color.light} );
  height:100%;
  width:100%;
`

const BlockControl = (props) => {

  const tabs = [
    { id:0, label:'PWM', mode:'pwm' },
    { id:1, label:'DEC', mode:'dec' },
    { id:2, label:'HEX', mode:'hex' }
  ];

  const rgb = [
    { name:'red', color: '#ff0000'}, 
    { name:'green', color: '#00FF00'}, 
    { name:'blue', color: '#00FFFF'}, 
  ];

  const mode = props.mode;

  return(
    <BlockControlWrapper>
      <BlockControlLabel> <span className="title">rgb Control</span> </BlockControlLabel>
      <MenuMode>
        {
          tabs && tabs[0] &&
          tabs.map((item)=>{
            return (
              <Tab
                key={uniqueId('tab_')}
                tab={item} 
                className={ item.mode === mode ? 'active' : '' }
                onClick={ ()=> { 
                  props.storeSetMode( item.mode );
                 } } 
              >
                {item.label}
              </Tab>
            );
          })
        }
      </MenuMode>
      <RgbSelector>
        {
          rgb && rgb[0] &&
          rgb.map((rgbColor) =>{
            return (
              <ColorBarWrapper mode={mode} rgbColor={rgbColor} key={uniqueId('rgb-color_')}/>
            )
          } )
        }
      </RgbSelector>
    </BlockControlWrapper>
  )
}

export default connect( mapStateToProps, mapDispatchToProps )( BlockControl )