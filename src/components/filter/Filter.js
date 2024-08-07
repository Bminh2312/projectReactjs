import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

export default function Filter() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Type" />}
    />
  )
}
