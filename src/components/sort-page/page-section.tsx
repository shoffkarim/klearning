import { Typography } from '@mui/material'
import React from 'react'
import { ArrayItemStyled, ArrayListStyled } from './page-section.style'

const unSortedArray = [3, 2, 1, 4]

export const PageSection: React.FC = () => {
  return (
    <ArrayListStyled>
        {unSortedArray.map((item, index) =>
            <ArrayItemStyled key={index}>
                <Typography variant="h4">{item}</Typography>
            </ArrayItemStyled>
        )}

    </ArrayListStyled>
  )
}

export default PageSection
