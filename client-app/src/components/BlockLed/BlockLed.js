import styled, { css } from 'styled-components';
import React from 'react';
import theme from 'shared/theme.map'

const BlockLedWrapper = styled.div`

  background: ${theme.color.grey_dark};
  // background: -moz-linear-gradient(-45deg, ${theme.color.grey_light} 0%,${theme.color.grey_dark} 63%); 
  // background: -webkit-linear-gradient(-45deg, ${theme.color.grey_light} 0%,${theme.color.grey_dark} 63%);
  background: linear-gradient( 165deg, ${theme.color.grey_light} 0%,${theme.color.grey_dark} 63%);
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${theme.color.grey_light}', endColorstr='${theme.color.grey_dark}',GradientType=1 );
  height:auto;
  overflow:auto;
  min-height:200px;
  width:100%;  
  padding:30px 20px 0;
`

const BlockLedLabel = styled.div`
  margin:0;
  padding:0;
  height:20px;
  width:100%;
  height:auto;
  float:left;

  .title{
    color: ${theme.color.light};
    font-weight: ${theme.fontWeigth.primary};
    font-size:28px;
    text-transform: uppercase;
  }
`

const ColorInfo = styled.div`
  float:left;
  min-height:100px;
  height:auto;
  overflow:hidde;
  width:100%;
  margin-top:10px;
`

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

  color: ${theme.color.light};
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

const BlockLed = ({
  hexColor = '#00FFFF'
}) => {
  return(
    <BlockLedWrapper>
      <BlockLedLabel> <span class="title">Led</span> </BlockLedLabel>
      <ColorInfo>
        <ColorInfoIcon hexcolor={hexColor}></ColorInfoIcon>
        <ColorInfoData>
          <span class="color-info-data__label">HEX</span>
          <span class="color-info-data__value"> {hexColor} </span>
        </ColorInfoData>
      </ColorInfo>
    </BlockLedWrapper>
  )
}

export default BlockLed