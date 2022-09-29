import React from 'react'
import {
  Card as CardUI,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'

export const Card: React.FC = () => {
  return (
    <CardUI>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/assets/default.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardUI>
  )
}

export default Card
