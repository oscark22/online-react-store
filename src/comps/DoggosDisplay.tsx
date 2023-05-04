import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import DoggoCard from './DoggoCard';

export default function DoggoDisplay() {
  const [breed, setBreed] = React.useState('');
  const [filteredDogs, setFilteredDogs] = React.useState(doggos);

  const handleChangeBreed = (event: SelectChangeEvent) => {
    const breed = event.target.value as string;
    setBreed(breed);
    const filteredDogs = doggos.filter((dog) => dog.details.breed === breed)
    setFilteredDogs(filteredDogs);
  }

  const menuDogs = filteredDogs.map((doggo, index) => (
    <div key={index} className="between-cards">
      <DoggoCard 
        datePublication={doggo.datePublication}
        description={doggo.description}
        srcImg={doggo.srcImg}
        details={doggo.details}
      />
    </div>  
  ))

  return ( 
    <>
      <Grid container spacing={2}>
        {menuDogs}
      </Grid>
    </ >
  );
}


// example data of doggos.
const doggos = [
  {
    datePublication: new Date(2022, 11, 29),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg',
    age: 7,
    details: {
      name: 'chef',
      color: 'brown',
      breed: 'husky',
      age: 7
    }
  },
  {
    datePublication: new Date(2022, 11, 29),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg',
    age: 7,
    details: {
      name: 'chef',
      color: 'brown',
      breed: 'husky',
      age: 7
    }
  },
  {
    datePublication: new Date(2022, 11, 29),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg',
    age: 7,
    details: {
      name: 'chef',
      color: 'brown',
      breed: 'husky',
      age: 7
    }
  },
  {
    datePublication: new Date(2022, 11, 29),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg',
    age: 7,
    details: {
      name: 'chef',
      color: 'brown',
      breed: 'husky',
      age: 7
    }
  },
  {
    datePublication: new Date(2022, 11, 29),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg',
    age: 7,
    details: {
      name: 'chef',
      color: 'brown',
      breed: 'husky',
      age: 7
    }
  },
  {
    datePublication: new Date(2023, 2, 14),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'https://furrybabiesinc.com/wp-content/uploads/2018/07/Husky-puppies-1-1200x896.jpg',
    details: {
      name: 'katherine',
      color: 'white',
      breed: 'husky',
      age: 1
    }
  },
  {
    datePublication: new Date(2023, 3, 20),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'https://animalso.com/wp-content/uploads/2017/02/Golden-Retriever-10.jpg',
    details: {
      name: 'alex',
      color: 'brown',
      breed: 'golden retriever',
      age: 4
    }
  },
  {
    datePublication: new Date(2023, 3, 1),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'http://wallpapercave.com/wp/Z36RaRp.jpg',
    details: {
      name: 'martin',
      color: 'brown',
      breed: 'pitbull',
      age: 6
    }
  },
  {
    datePublication: new Date(2023, 1, 4),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'https://res.cloudinary.com/fwkc-production/image/upload/c_thumb,dpr_3.0,f_auto,g_center,h_430,q_auto,w_768/v1/fwkc-prod/May_1',
    details: {
      name: 'berry',
      color: 'brown',
      breed: 'golden retriever',
      age: 4
    }
  },
  {
    datePublication: new Date(2023, 2, 18),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'http://www.dog-learn.com/dog-breeds/west-highland-white-terrier/images/west-highland-white-terrier-white.jpg',
    details: {
      name: 'bobby',
      color: 'white',
      breed: 'west highland white terrier',
      age: 3
    }
  },
  {
    datePublication: new Date(2023, 2, 27),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'https://www.rover.com/blog/wp-content/uploads/2019/07/cockerspaniel1.jpg',
    details: {
      name: 'coco',
      color: 'brown',
      breed: 'cocker spaniel',
      age: 1
    }
  },
  {
    datePublication: new Date(2023, 1, 22),
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    srcImg: 'https://justusdogs.com.au/wp-content/uploads/2017/08/american-cocker-spaniel.jpg',
    details: {
      name: 'kira',
      color: 'brown',
      breed: 'cocker spaniel',
      age: 2
    }
  },
]

 