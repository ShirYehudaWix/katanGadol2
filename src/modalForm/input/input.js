import * as React from 'react';
import style from './input.module.css'
import TextField from '@mui/material/TextField';

export const Input=(props)=>{
const [valid,setValid]=React.useState(true)
    const validate=(input)=>{
    return true
    }
    const onChange=(event)=>{
    if(validate(event.target.value)){
        setValid(true)
        return
    }
    setValid(false)
    }
   return  <div className={style.input}>
    <TextField fullWidth error={!valid  } onChange={onChange} id="outlined-basic" label={props.label} variant="outlined" />
</div>
}