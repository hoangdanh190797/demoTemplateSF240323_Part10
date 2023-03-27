import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fecthcountriesAll } from '../store/slices/countriesAllSlice'
import { Countries } from '../types/countries';

export default function FilterRegion() {
    const dispatch = useAppDispatch();
    const countriesAll = useAppSelector((state) => state.countriesAll.countriesAll);
    useEffect(() => {
      dispatch(fecthcountriesAll());
    }, [])
    const arrRegion = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    const [value, setValue] = React.useState<string | null>(arrRegion[0]);
    const [inputValue, setInputValue] = React.useState('');
    //Dùng cái nào cũng được    value kết hợp với onChange
    //Dùng ''            ''     inputValue kết hợp với onInputChange
    console.log(value);
    console.log(inputValue);
    const newArray:Countries[] = []
    for(let items of countriesAll){
        if(items.region === value){
            newArray.push(items)
        }
    }

    // const newData = countriesAll.map((item) => item.region === value)
    // const [contentRender, setContentRender] = React.useState(newArray)
    

    // console.log(newArray); 
    
    return (
        <>
            <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                    setValue(newValue);
                  }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                disablePortal
                id="combo-box-demo"
                options={arrRegion}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Region" />}
            />
        </>
    )
}
