import styled, { css } from 'styled-components';
import React from 'react';
import theme from 'shared/theme.map'

const BlockControlWrapper = styled.div`
  height:250px;
  width:100%;  
  padding:30px 0 0;
  background-color: ${theme.color.grey_dark};
`

const BlockControlLabel = styled.div`
  padding-left:30px;
  margin-bottom:20px;

  .title{
    color: ${theme.color.light};
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
  background: rgba( ${theme.color.alight} , .04);
  color: ${theme.color.light};

  
  // ${ (props) => props.active && css`
  //   background: rgba( ${theme.color.alight}, 1.0);
  //   color: ${theme.color.grey_dark};
  // `}
  
  &.active{
    background: rgba( ${theme.color.alight}, 1.0);
    color: ${theme.color.grey_dark};
  }
  
  

`

const RgbSelector = styled.div`

`
const RgbColorRange = styled.div`

`
const ColorRangeBar = styled.div`

  .color-range-bar__cursor{

  }
`

const ColorRangeValue = styled.div`

`

const setMode = ( _mode ) => {
  console.log( _mode )
}


const BlockControl = ({
  tabs = [
    { id:0, label:'PWM', mode:'pwm' },
    { id:1, label:'DEC', mode:'dec' },
    { id:2, label:'HEX', mode:'hex' }
  ],
  currentMode ='pwm',
}) => {

  return(
    <BlockControlWrapper>
      <BlockControlLabel> <span class="title">rgb Control</span> </BlockControlLabel>
      <MenuMode tabs={tabs}>
        {
          tabs.map((item)=>{
            return <Tab tab={item} 
                        className={ item.mode === currentMode ? 'active' : '' }
                        onClick={ ()=> { setMode( item.mode ) } } 
                    >{item.label}</Tab>

          })
        }
      </MenuMode>
      <RgbSelector>
        <RgbColorRange>
          <ColorRangeBar>
            <div class="color-range-bar__cursor"></div>
          </ColorRangeBar>
          <ColorRangeValue></ColorRangeValue>
        </RgbColorRange>
      </RgbSelector>
    </BlockControlWrapper>
  )
}

export default BlockControl