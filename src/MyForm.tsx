import { TextField } from '@mui/material';
import * as React from 'react';

interface Props{
    onSubmit: () => void;
}

export const MyForm: React.FC<Props> = () =>{
    return <TextField />
} 