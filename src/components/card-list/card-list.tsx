import React from 'react'
import Card from '../card/card'
import { CardListStyled, ListItem } from './card-list.style'

export const CardList: React.FC = () => {
  return (
    <CardListStyled>
        <ListItem>
            <Card/>
        </ListItem>
        <ListItem>
            <Card/>
        </ListItem>
        <ListItem>
            <Card/>
        </ListItem>
    </CardListStyled>
  )
}

export default CardList
