import { Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { comparator, newArray, swap } from '../../utils/sorting'
import { ArrayItemStyled, ArrayListStyled, PlaygroundContainer } from './page-section.style'

export const PageSection: React.FC = () => {
  const [unsortArray, setArray] = useState(newArray)

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
    setArray(newArray)
  }

  return (
    <PlaygroundContainer>
      <ArrayListStyled>
          {unsortArray.map((item) =>
              <ArrayItemStyled key={item} height={item}>
                  <Typography variant="h5">{item}</Typography>
              </ArrayItemStyled>
          )}
      </ArrayListStyled>
      <Button variant="contained" onClick={() => handleClick()}>Sort</Button>
      <Button variant="outlined" onClick={() => handleMix()}>Mix</Button>
    </PlaygroundContainer>
  )
}

export default PageSection
