export const setColor = color => ({
  type: 'SET_COLOR',
  color
})

export const setChannel = ( value, channel ) => {
  return {
    type: 'SET_CHANNEL',
    value,
    channel
  }
}
