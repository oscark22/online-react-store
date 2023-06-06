import React from 'react';
import { 
    Typography, 
    Container, 
    Grid, 
    Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Button, 
    ImageList, 
    ImageListItem, 
    ImageListItemBar, 
    List, 
    ListItem, 
    ListItemAvatar, 
    Avatar, 
    ListItemText } from '@mui/material';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  age: string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <ImageList cols={3} rowHeight={200} gap={10}>
                {images.map((image) => (
                <ImageListItem key={image.id}>
                    <img src={image.img} alt={image.title} />
                    <ImageListItemBar title={image.title} subtitle={<span>by: {image.author}</span>} />
                </ImageListItem>
                ))}
            </ImageList>
            <List dense>
                {data.map((item) => (
                    <ListItem key={item.id} alignItems='center'>
                        <ListItemText primary={item.name} secondary={item.description} />
                    </ListItem>
                    ))}
                </List>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button size="small" color="primary" href='/dashboard'>
                Adoptar
                </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;

const images = [
  {
    id: 1,
    img: 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg',
    title: 'Imagen 1',
    author: 'Autor 1'
  },
  {
    id: 2,
    img: 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg',
    title: 'Imagen 2',
    author: 'Autor 2'
  },
  {
    id: 3,
    img: 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg',
    title: 'Imagen 3',
    author: 'Autor 3'
  }
];

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      
    </Container>
  );
};

const data = [
  {
    id: 1,
    name: 'Edad:',
    description: '5 años de edad.',
  },
  {
    id: 2,
    name: 'Raza:',
    description: 'Husky.',
  },
  {
    id: 3,
    name: 'Color:',
    description: 'Gris',
  }
];