/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { SORTING_BUBBLE_SORT } from '../../data/constants'
import { RootState, AppDispatch } from '../../data/store'
import { ArrayItemStyled, ArrayListStyled, ButtonContainer, PlaygroundContainer } from './playground.style'

const ACTIVE_COLOR = '#ff5555'
const SORTED_COLOR = '#4ed26c'
const AUXILIARY_COLOR = '#bd93f9'
const DEFAULT_COLOR = '#ffb86c'

const bubbleSort = (): any => {
  return ({ type: SORTING_BUBBLE_SORT })
}

const resetArray = (): any => ({ type: 'CONTROLS/RESET_ARRAY' })

export const Playground: React.FC = () => {
  const { activeElements, auxiliaryElements, sortedElements } = useSelector(({ comparison }: RootState) => ({
    activeElements: comparison.activeElements,
    auxiliaryElements: comparison.auxiliaryElements,
    sortedElements: comparison.sortedElements
  }), shallowEqual)

  const array = useSelector(({ array }: RootState) => array.array)

  const dispatch = useDispatch()

  const onSort = (): AppDispatch => dispatch(bubbleSort())
  const createArray = (): any => dispatch(resetArray())

  useEffect(() => {
    createArray()
  }, [])

  return (
    <PlaygroundContainer>
        <ButtonContainer>
          <Button variant="contained" onClick={onSort}>Sort</Button>
          <Button variant="outlined" onClick={createArray}>Mix</Button>
        </ButtonContainer>
        <ArrayListStyled>
            {array.map((item: number, index: number) => {
              const color = (sortedElements.includes(index) && SORTED_COLOR) ||
                (activeElements.includes(index) && ACTIVE_COLOR) ||
                (auxiliaryElements.includes(index) && AUXILIARY_COLOR) ||
                DEFAULT_COLOR
              return (
                <ArrayItemStyled key={index} height={item} color={color}>
                    <Typography variant="h5">{item}</Typography>
                </ArrayItemStyled>
              )
            }

            )}
        </ArrayListStyled>
      </PlaygroundContainer>
  )
}

export default Playground
