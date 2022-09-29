import { Link, Typography } from '@mui/material'
import React from 'react'
import { CardList } from '../card-list'
import { SectionStyled, TopSectionStyled } from './main-section.style'

export const MainSection: React.FC = () => {
  return (
    <SectionStyled>
        <TopSectionStyled>
            <Typography variant='h2'>Algorithms</Typography>
            <Link href="#" variant='body1' color='#1976D2'>More</Link>
        </TopSectionStyled>
        <CardList/>
    </SectionStyled>
  )
}

export default MainSection
