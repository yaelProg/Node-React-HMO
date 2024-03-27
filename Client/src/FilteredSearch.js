import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DataArray } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const filter = createFilterOptions();

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Filtered_search = () => {
  const [value, setValue] = React.useState(null);
  const arrayData = useSelector((myStore) => myStore.MemberSlice.memberArray)

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
          // } else if (newValue && newValue.inputValue) {
          //   // Create a new value from the user input
          //   setValue({
          //     title: newValue.inputValue,
          //   });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `No results found for "${inputValue}""`,
          });
        }

        const StyledInputBase = styled(InputBase)(({ theme }) => ({
          color: 'inherit',
          width: '100%',
          '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
              width: '12ch',
              '&:focus': {
                width: '20ch',
              },
            },
          },
        }));

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={arrayData}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 200 }}
      // freeSolo
      renderInput={(params) => (
        <TextField {...params} placeholder="Search…"
          position = 'relative'
          // borderRadius = {theme.shape.borderRadius}
          // backgroundColor =  {alpha(theme.palette.common.white, 0.15)}
          // '&:hover' = {
          //   backgroundColor = alpha(theme.palette.common.white, 0.25)
          // }
          //marginLeft = 0
          // width = '100%'
          // [theme.breakpoints.up('sm')] = {
          //   marginLeft = theme.spacing(1),
          //   width = 'auto'
          // }
        >
          // שש 1
                {/* <InputBase                   
                 placeholder="Search…"  > 
                 */}
                  {/* // inputProps={{ 'aria-label': 'search' }}   */}
                  
                    </TextField> 
                // {/* </InputBase> */}
      )}

    />
  );
}

export default Filtered_search;
