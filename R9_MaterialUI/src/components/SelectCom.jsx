import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { TextField } from '@mui/material';


function SelectCom() {
    const [country, setCountry] = useState('Turkey');
    const [country2, setCountry2] = useState('Turkey');
    const [countries, setCountries] = useState(['Turkey']);
    console.log(country)
    return (
        <div>
            <div className='h4 ms-2'>Select</div>
            <FormControl className='m-1 '>
                <Select
                    labelId="selectLabel"
                    id="selectID"
                    value={country}
                    onChange={(e) => { setCountry(e.target.value) }}
                    label="Country"

                >
                    <MenuItem value={'Turkey'}>Turkey</MenuItem>
                    <MenuItem value={'England'}>England</MenuItem>
                    <MenuItem value={'Germany'}>Germany</MenuItem>
                    <MenuItem value={'France'}>France</MenuItem>
                    <MenuItem value={'USA'}>USA</MenuItem>

                </Select>


            </FormControl>
            {
                //Select with Textfield
            }
            <FormControl className='m-1'>
                <TextField
                    select label="Country"
                    value={country2}
                    color='error'
                    onChange={(e) => { setCountry2(e.target.value) }}
                >
                    <MenuItem value={'Turkey'}>Turkey</MenuItem>
                    <MenuItem value={'England'}>England</MenuItem>
                    <MenuItem value={'Germany'}>Germany</MenuItem>
                    <MenuItem value={'France'}>France</MenuItem>
                    <MenuItem value={'USA'}>USA</MenuItem>
                </TextField>
            </FormControl>
            <FormControl className='m-1'>
                <TextField
                    SelectProps={{ multiple: true }}
                    select label="Countries"
                    value={countries}
                    color='error'
                    onChange={(e) => { setCountries(e.target.value) }}
                >
                    <MenuItem value={'Turkey'}>Turkey</MenuItem>
                    <MenuItem value={'England'}>England</MenuItem>
                    <MenuItem value={'Germany'}>Germany</MenuItem>
                    <MenuItem value={'France'}>France</MenuItem>
                    <MenuItem value={'USA'}>USA</MenuItem>
                </TextField>
            </FormControl>
        </div>
    )
}

export default SelectCom