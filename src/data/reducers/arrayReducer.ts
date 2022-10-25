import { ARRAY_SET_ARRAY, ARRAY_SET_LENGTH } from './../constants'
const initial = {
  array: [50, 200, 300, 500, 250, 100, 450, 350, 150, 400],
  arrayLength: 10
}

export const arrayReducer = (state = initial, action: any): any => {
  switch (action.type) {
    case ARRAY_SET_ARRAY:
      return { ...state, array: action.value }
    case ARRAY_SET_LENGTH:
      return { ...state, arrayLength: action.value }
    default:
      return state
  }
}
