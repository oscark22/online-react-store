import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, TextField, ThemeProvider, Typography, capitalize, createTheme } from '@mui/material';
import * as React from 'react';
import DoggoCard from './DoggoCard';

export default function DoggoDisplay() {
  const [doggos, setDoggos] = React.useState<any[]>([]);
  const [breedFilter, setBreedFilter] = React.useState("");
  const [nameFilter, setNameFilter] = React.useState("");
  const [colorFilter, setColorFilter] = React.useState("");
  const [numMostradosPorRaza, setNumMostradosPorRaza] = React.useState<{ [breed: string]: number }>({});
  const [filteredDogs, setFilteredDogs] = React.useState<any[]>([]);

  React.useEffect(() => {
    const descripcion = 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica';
    const srcImg = 'http://cdn0.wideopenpets.com/wp-content/uploads/2017/05/AdobeStock_126472771.jpeg';

    for (let i = 0; i < 100; i++) {
      const nombre = generarNombre();
      const color = generarColor();
      const raza = generarRaza();
      const edad = generarEdad();
      const fechaPublicacion = generarFecha();

      const doggy = {
        id: i + 1,
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

      setDoggos((prevDoggos) => [...prevDoggos, doggy]);
    }
  }, []);

  React.useEffect(() => {
    const filtered = doggos.filter((doggo) => {
      const details = doggo.details;
      const breedMatch = breedFilter ? details.breed.toLowerCase().includes(breedFilter.toLowerCase()) : true;
      const nameMatch = nameFilter ? details.name.toLowerCase().includes(nameFilter.toLowerCase()) : true;
      const colorMatch = colorFilter ? details.color.toLowerCase().includes(colorFilter.toLowerCase()) : true;
      return breedMatch && nameMatch && colorMatch;
    });
    setFilteredDogs(filtered);
  }, [doggos, breedFilter, nameFilter, colorFilter]);

  const handleChangeBreedFilter = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBreedFilter(event.target.value as string);
  };
  
  const handleChangeNameFilter = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNameFilter(event.target.value as string);
  };

  const handleChangeColorFilter = (event: React.ChangeEvent<{ value: unknown }>) => {
    setColorFilter(event.target.value as string);
  };

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

  const breedOptions = [...new Set(doggos.map((doggo) => doggo.details.breed))];
  const nameOptions = [...new Set(doggos.map((doggo) => doggo.details.name))];
  const colorOptions = [...new Set(doggos.map((doggo) => doggo.details.color))];

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
              id={doggo.id}
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
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
        <FormControl>
          <FormLabel sx={{ color: "black" }} id="form-filter"> 
            Filtros: 
          </FormLabel>
          <Box>
            <Select
              labelId="form-filter"
              id="filter-select"
              value={nameFilter}
              onChange={handleChangeNameFilter}
              sx={{ minWidth: 120, mr: 2 }}
              label="Nombre"
            >
              <MenuItem value="">Todos los nombres</MenuItem>
              {nameOptions.map((name, index) => (
                <MenuItem value={name} key={index}>{name}</MenuItem>
              ))}
            </Select>
            <Select
              labelId="form-filter"
              id="filter-select"
              value={breedFilter}
              onChange={handleChangeBreedFilter}
              sx={{ minWidth: 120, mr: 2 }}
              label="Raza"
            >
              <MenuItem value="">Todas las razas</MenuItem>
              {breedOptions.map((breed, index) => (
                <MenuItem value={breed} key={index}>{breed}</MenuItem>
              ))}
            </Select>
            <Select
              labelId="form-filter"
              id="color-filter-select"
              value={colorFilter}
              onChange={handleChangeColorFilter}
              sx={{ minWidth: 120 }}
              label="Color"
            >
              <MenuItem value="">Todos los colores</MenuItem>
              {colorOptions.map((color, index) => (
                <MenuItem value={color} key={index}>{color}</MenuItem>
              ))}
            </Select>
          </Box>
        </FormControl>
      </Box>
      <Container maxWidth="lg">
      {filteredDogs.length === 0 ? (
        <Typography variant="h5" style={{ marginTop: '2rem', textAlign: 'center' }}>
          No encontramos resultados coincidentes
        </Typography>
      ) : (
        menuDogs
      )}
    </Container>
    </div>
  );
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