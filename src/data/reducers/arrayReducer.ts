const initial = {
  array: [],
  arrayLength: 30
}

export const arrayReducer = (state = initial, action: any): any => {
  switch (action.type) {
    case 'ARRAY/SET_ARRAY':
      return { ...state, array: action.value }
    case 'ARRAY/SET_LENGTH':
      return { ...state, arrayLength: action.value }
    default:
      return state
  }
}
