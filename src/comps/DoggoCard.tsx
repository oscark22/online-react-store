import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';


export interface Props {
  datePublication: Date,
  description: string,
  srcImg: string,
  details: {
    name: string,
    color: string,
    breed: string,
    age: number
  }
}

const capitalize = (text: string): string => {
  return text[0].toUpperCase() + text.slice(1)
}

const DoggoCard: React.FC<Props> = ({ datePublication, description, srcImg, details }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 194 }}
        image={ srcImg }
        alt="a doggo image"
      />

      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div">
            { capitalize(details.name) }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { datePublication.toString().slice(0, 15) }
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Age: {details.age} {details.age == 1 ? "year" : "years"} old.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          { description }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed: { capitalize(details.breed) }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Color: { details.color }
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default DoggoCard;
