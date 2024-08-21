
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CheckboxCom() {
    return (
        <div>
            <div className='h4 ms-2'>Checkbox</div>


            <FormControl>
                <FormLabel >Food</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        value="Pasta"
                        control={<Checkbox defaultChecked />}
                        label="Pasta"
                        labelPlacement="end"

                    />
                    <FormControlLabel
                        value="Chicken"
                        control={<Checkbox />}
                        label="Chicken"

                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Rice"
                        control={<Checkbox />}
                        label="Rice"

                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}
