import { combineReducers } from 'redux'

const initialState = {
  mode:'pwm',
  color: '#000000',
  channels:{
    red:0,
    green:0,
    blue:0,
    max:100
  }
}

const appState = (state = initialState , action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return { ...state, color: action.color}
    case 'SET_MODE':
      return { ...state, mode: action.mode}
    case 'SET_CHANNEL':
      return { ...state, 
        channels:{ 
          ...state.channels,
          [ action.channel ]: action.value
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  appState
})