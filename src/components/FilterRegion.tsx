import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { countriesMethod, getStatusRegion } from '../store/slices/countriesAllSlice'
import { Countries } from '../types/countries';
import '../styles/components/_filter.scss'

export default function FilterRegion() {
    // const dispatchReact = useDispatch();
    const dispatch = useAppDispatch();
    const countriesAll = useAppSelector((state) => state.countriesAll.countriesAll);
    useEffect(() => {
        dispatch(
            countriesMethod.fecthcountriesAll()
        );
    }, [])
    const arrRegion = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const [value, setValue] = React.useState<string | null>(arrRegion[0]);
    const [inputValue, setInputValue] = React.useState('');
    //Này là bên MUI hỗ trợ list lại các attribute để dể sử dụng:
    //Dùng cái nào cũng được    value kết hợp với onChange
    //Dùng ''            ''     inputValue kết hợp với onInputChange
    //Nút SearchInput sẽ tìm kiếm và fill ra "renderInput"
    //Nút SearchInput, MUI hỗ trợ quá tốt!!!
    console.log(value);
    console.log(inputValue);



    const newArray: Countries[] = []
    for (let items of countriesAll) {
        if (items.region === value) {
            newArray.push(items)
        }
    }
    console.log(newArray);

    // const newData = countriesAll.map((item) => item.region === value)
    // const [contentRender, setContentRender] = React.useState(newArray)
    dispatch(
        countriesMethod.getRegion(newArray),
        // getStatusRegion('test'),
    )

    return (
        <>
            <div id='filter_'>
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
            </div>

        </>
    )
}
