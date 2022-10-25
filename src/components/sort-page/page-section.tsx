/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Typography, Button } from '@mui/material'
import React from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { SORTING_BUBBLE_SORT } from '../../data/constants'
import { AppDispatch, RootState } from '../../data/store'
// import { newArray } from '../../utils/sorting'
import { ArrayItemStyled, ArrayListStyled, PlaygroundContainer } from './page-section.style'

const ACTIVE_COLOR = '#ff5555'
// const SORTED_COLOR = '#4ed26c'
const AUXILIARY_COLOR = '#bd93f9'
const DEFAULT_COLOR = '#ffb86c'

const bubbleSort = (): any => {
  console.log(1)
  return ({ type: SORTING_BUBBLE_SORT })
}

export const PageSection: React.FC = () => {
  const { activeElements, auxiliaryElements } = useSelector(({ comparison }: RootState) => ({
    activeElements: comparison.activeElements,
    auxiliaryElements: comparison.auxiliaryElements,
    sortedElements: comparison.sortedElements
  }), shallowEqual)

  console.log(useSelector(({ comparison }: RootState) => ({
    activeElements: comparison.activeElements,
    auxiliaryElements: comparison.auxiliaryElements,
    sortedElements: comparison.sortedElements
  }), shallowEqual))

  // const [unsortArray, setArray] = useState(newArray)

  const array = useSelector(({ array }: RootState) => array.array)

  const dispatch = useDispatch()

  const onSort = (): AppDispatch => dispatch(bubbleSort())

  // const handleClick = (): void => {
  //   const arr = unsortArray.concat()
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     for (let j = 0; j < i; j++) {
  //       if (comparator(arr[j], arr[j + 1]) > 0) {
  //         swap(arr, j, j + 1)
  //       }
  //     }
  //   }
  //   setArray(arr)
  // }

  // const handleMix = (): void => {
  //   setArray(newArray)
  // }

  return (
    <PlaygroundContainer>
      <ArrayListStyled>
          {array.map((item: number, index: number) => {
            const color = (activeElements.includes(index) && ACTIVE_COLOR) ||
              (auxiliaryElements.includes(index) && AUXILIARY_COLOR) ||
              DEFAULT_COLOR
            return (
              <ArrayItemStyled key={item} height={item} color={color}>
                  <Typography variant="h5">{item}</Typography>
              </ArrayItemStyled>
            )
          }

          )}
      </ArrayListStyled>
      <Button variant="contained" onClick={onSort}>Sort</Button>
      {/* <Button variant="outlined" onClick={() => handleMix()}>Mix</Button> */}
    </PlaygroundContainer>
  )
}

export default PageSection
