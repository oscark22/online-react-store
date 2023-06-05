import { Button, Grid, Typography, capitalize } from '@mui/material';
import * as React from 'react';
import DoggoCard from './DoggoCard';

export default function DoggoDisplay() {
  const [filteredDogs, setFilteredDogs] = React.useState(doggos);
  const [numMostradosPorRaza, setNumMostradosPorRaza] = React.useState<{ [breed: string]: number }>({});

  const mostrarMasElementos = (breed: string) => {
    setNumMostradosPorRaza((prevNumMostradosPorRaza) => ({
      ...prevNumMostradosPorRaza,
      [breed]: (prevNumMostradosPorRaza[breed] || 0) + 4
    }));
  };

  const dogsByBreed: Record<string, any[]> = filteredDogs.reduce((acc: any, doggo) => {
    const breed = doggo.details.breed;
    if (!acc[breed]) {
      acc[breed] = [];
    }
    acc[breed].push(doggo);
    return acc;
  }, {});


  const menuDogs = Object.keys(dogsByBreed).map((breed) => (
    <Grid container key={breed}>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginTop: "2rem", fontWeight: "bold", textAlign: "center"}}>
          {capitalize(breed)}
        </Typography>
      </Grid>
      {dogsByBreed[breed].slice(0, numMostradosPorRaza[breed] || 4).map((doggo, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <div className="between-cards">
            <DoggoCard
              datePublication={doggo.datePublication}
              description={doggo.description}
              srcImg={doggo.srcImg}
              details={doggo.details}
            />
          </div>
        </Grid>
      ))}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        {dogsByBreed[breed].length > (numMostradosPorRaza[breed] || 4) && (
          <Button variant="outlined" onClick={() => mostrarMasElementos(breed)}>
            Mostrar más
          </Button>
        )}
      </Grid>
    </Grid>
    ));
  
    return (
      <div style={{ marginBottom: '2rem' }}>
        <Grid container spacing={2}>
          {menuDogs}
        </Grid>
    </div>
    );
}

const doggos: any[] | (() => any[]) = [];

const descripcion = 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica';
const srcImg = 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg';

for (let i = 0; i < 100; i++) {
  const nombre = generarNombre();
  const color = generarColor();
  const raza = generarRaza();
  const edad = generarEdad();
  const fechaPublicacion = generarFecha();

  const ejemplo = {
    datePublication: fechaPublicacion,
    description: descripcion,
    srcImg: srcImg,
    details: {
      name: nombre,
      color: color,
      breed: raza,
      age: edad
    }
  };

  doggos.push(ejemplo);
}

function generarColor() {
  const colores = ['Negro', 'Blanco', 'Marron', 'Gris', 'Dorado'];
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
}

function generarRaza() {
  const razas = ['Husky', 'Labrador', 'Bulldog', 'Pastor Alemán', 'Golden Retriever'];
  const indice = Math.floor(Math.random() * razas.length);
  return razas[indice];
}

function generarEdad() {
  return Math.floor(Math.random() * 10) + 1;
}

function generarFecha() {
  const fechaActual = new Date();
  const fechaInicio = new Date(fechaActual.getFullYear() - 2, fechaActual.getMonth(), fechaActual.getDate());
  const fechaAleatoria = new Date(fechaInicio.getTime() + Math.random() * (fechaActual.getTime() - fechaInicio.getTime()));
  return fechaAleatoria;
}

function generarNombre() {
  const nombres = ['Rocky', 'Betsy', 'Lucas', 'Mike', 'Roxy', 'Buddy', 'Pepe', 'Ron', 'Max', 'Sadie', 'Lily', 'Oliver', 'Lola', 'Duke', 'Zoey', 'Charlie', 'Lola'];
  const indice = Math.floor(Math.random() * nombres.length);
  return nombres[indice];
}