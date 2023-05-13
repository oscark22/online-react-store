import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const SearchUI = ({ options, searchOption, onOptionChange, searchValue, onValueChange, onSearch }) => {
  return (
    <div>
      <TextField
        select
        label="Buscar por"
        value={searchOption}
        onChange={(event) => onOptionChange(event.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Valor de búsqueda"
        value={searchValue}
        onChange={(event) => onValueChange(event.target.value)}
      />
      <Button onClick={onSearch}>Buscar</Button>
    </div>
  );
};

export default SearchUI;