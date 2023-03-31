import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getCountry } from '../store/slices/countriesAllSlice';
import '../styles/components/_searchInput.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function SearchInput() {
  const dispatch = useAppDispatch()
  const countriesAll = useAppSelector((state) => state.countriesAll.countriesAll);
  // const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState<any | null>();

  // console.log(inputValue);
  console.log(value);
  dispatch(getCountry(value));

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: 'hsl(0, 0%, 100%)',
      },
    },
  });
  return (
    <div id='searchInput_'>
      <Stack spacing={2} sx={{ width: 300 }} className='searchInput_content'>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={countriesAll.map((option) => option.name.common)}
          value={value || null}
          onChange={(event: any, newValue: any | null) => {
            setValue(newValue);
          }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
          //     setInputValue(newInputValue);
          //   }}
          renderInput={(params) => (
            <ThemeProvider theme={theme}>
              <TextField
                {...params}
                label="Search for a country..."
                color="primary"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            </ThemeProvider>
          )}
        />
      </Stack>
    </div>
  );
}