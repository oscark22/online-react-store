import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, CardActionArea } from '@mui/material';


interface Props {
  nameDoggo: string,
  datePublication: Date,
  description: string,
  srcImg: string,
  age: number,
  tags: string[]
}

const DoggoCard: React.FC<Props> = ({ nameDoggo, datePublication, description, srcImg, age, tags }) => {
  return (
    <div className="App">
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
              { nameDoggo }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { datePublication.toString().slice(0, 15) }
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            { description }
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default DoggoCard;
