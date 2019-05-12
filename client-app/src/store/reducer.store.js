import { combineReducers } from 'redux'

const initialState = {
  color: '#000000',
  channels:{
    red:0,
    green:0,
    blue:0
  }
}

const appState = (state = initialState , action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return { ...state, color: action.color}
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