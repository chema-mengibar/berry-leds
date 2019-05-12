import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'shared/theme.shared'

import { connect } from 'react-redux';
import { setColor } from 'store/actions.store';

const mapStateToProps = state => ({
  color: channelsToHex( state.appState.channels )
});

const mapDispatchToProps = {
  setColor: setColor
}

const channelsToHex = channels => {

  const rangeTo255Hex = value =>{ 
    let hexStr = Math.round(( value * 255)/ 100).toString(16).toUpperCase();
    return ( hexStr.length === 1 )? '0' + hexStr : hexStr;
  };

  let r = rangeTo255Hex(channels.red)
  let g = rangeTo255Hex(channels.green)
  let b = rangeTo255Hex(channels.blue)
  return '#' + r + g + b;
}

const BlockLedWrapper = styled.div`

  background: rgb(${theme.color.grey_dark});
  // background: -moz-linear-gradient(-45deg, rgb(${theme.color.grey_light}) 0%, rgb(${theme.color.grey_dark}) 63%); 
  // background: -webkit-linear-gradient(-45deg, rgb(${theme.color.grey_light}) 0%, rgb(${theme.color.grey_dark}) 63%);
  background: linear-gradient( 165deg, rgb(${theme.color.grey_light}) 0%, rgb(${theme.color.grey_dark}) 63%);
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgb(${theme.color.grey_light})', endColorstr='rgb(${theme.color.grey_dark})',GradientType=1 );
  overflow:auto;
  min-height:200px;
  width:100%;  
  padding:30px 20px 0;
  box-sizing: border-box;
`

const BlockLedLabel = styled.div`
  margin:0;
  padding:0;
  height:20px;
  width:100%;
  height:auto;
  float:left;
`;

const Span = styled.span`
    color:rgb( ${theme.color.light});
    font-weight: ${theme.fontWeigth.primary};
    font-size:28px;
    text-transform: uppercase;
`;

const ColorInfo = styled.div`
  float:left;
  min-height:100px;
  height:auto;
  overflow:hidde;
  width:100%;
  margin-top:10px;
`;

const ColorInfoIcon = styled.div`
  float:left;
  height:100px;
  width:100px;
  border:10px solid rgba(12,12,12,.5);
  border-radius: 0px 30px 30px 30px;
  background-color: ${(props) => props.hexcolor };
  margin-right:20px;
`

const ColorInfoData = styled.div`

  color: rgb(${theme.color.light});
  text-transform: uppercase;
  line-height: 100px;
  
  .color-info-data__label{
    font-weight: ${theme.fontWeigth.primary};
    margin-right:7px;
  }

  .color-info-data__value{
    font-weight: ${theme.fontWeigth.bold};
  }
`

const BlockLed = (props) => {
  return(
    <BlockLedWrapper>
      <BlockLedLabel> 
        <Span>Led</Span>
      </BlockLedLabel>
      <ColorInfo>
        <ColorInfoIcon hexcolor={props.color}></ColorInfoIcon>
        <ColorInfoData>
          <span className="color-info-data__label">HEX</span>
          <span className="color-info-data__value"> {props.color} </span>
        </ColorInfoData>
      </ColorInfo>
    </BlockLedWrapper>
  )
}

export default connect( mapStateToProps, mapDispatchToProps )( BlockLed )