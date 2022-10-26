import { COMPARISON_RESET, COMPARISON_SET_ACTIVE_ELEMENTS, COMPARISON_SET_AUXILIARY_ELEMENTS, COMPARISON_SET_SORTED_ELEMENTS, COMPARISON_SET_SORTING_SPEED, COMPARISON_TOGGLE_SORT } from './../constants'
const initialState = {
  inProgress: false,
  sortingSpeed: 1,
  activeElements: [],
  sortedElements: [],
  auxiliaryElements: []
}

export const comparisonReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case COMPARISON_RESET:
      return { ...initialState, sortingSpeed: state.sortingSpeed }

    case COMPARISON_TOGGLE_SORT:
      return { ...state, inProgress: action.value }

    case COMPARISON_SET_SORTING_SPEED:
      return { ...state, sortingSpeed: action.value }

    case COMPARISON_SET_ACTIVE_ELEMENTS:
      return { ...state, activeElements: action.value }

    case COMPARISON_SET_AUXILIARY_ELEMENTS:
      return { ...state, auxiliaryElements: action.value }

    case COMPARISON_SET_SORTED_ELEMENTS:
      return { ...state, sortedElements: action.value }

    default:
      return state
  }
}
