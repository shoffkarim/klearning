import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CardList } from '../card-list'
import { SectionStyled, TopSectionStyled } from './main-section.style'

export const MainSection: React.FC = () => {
  return (
    <SectionStyled>
        <TopSectionStyled>
            <Typography variant='h2'>Algorithms</Typography>
            <Link to="/sort">More</Link>
        </TopSectionStyled>
        <CardList/>
    </SectionStyled>
  )
}

export default MainSection
