import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { comparator, swap, unSortedArray } from '../../utils/sorting'
import { ArrayItemStyled, ArrayListStyled, PlaygroundContainer, ButtonStyled } from './page-section.style'

export const PageSection: React.FC = () => {
  const [unsortArray, setArray] = useState(unSortedArray)
  const handleClick = (): void => {
    const arr = unsortArray.concat()
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (comparator(arr[j], arr[j + 1]) > 0) {
          swap(arr, j, j + 1)
        }
      }
    }
    setArray(arr)
  }

  const handleMix = (): void => {
    setArray(unSortedArray)
  }

  return (
    <PlaygroundContainer>
      <ArrayListStyled>
          {unsortArray.map((item) =>
              <ArrayItemStyled key={item.index}>
                  <Typography variant="h4">{item.text}</Typography>
              </ArrayItemStyled>
          )}
      </ArrayListStyled>
      <ButtonStyled variant="contained" onClick={() => handleClick()}>Sort</ButtonStyled>
      <ButtonStyled variant="outlined" onClick={() => handleMix()}>Mix</ButtonStyled>
    </PlaygroundContainer>
  )
}

export default PageSection
