// import * as React from "@types/react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import style from './modalForm.module.css'
import {MapsInput} from "./mapsInput/mapsInput";
import {Input} from "./input/input";

export const ModalForm=()=>{
    const style1 = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const fields = ["Full Name",'Phone number', 'Email Address']
    return <Box sx={style1}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
        </Typography>
        <div className={style.inputs}>
        {fields.map(field=><Input label={field}/>)}</div>
<MapsInput/>

    </Box>
}