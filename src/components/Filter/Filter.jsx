import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter() {
  const [age, setAge] = React.useState(30);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

const menuStyle={
    color:'#7A7A7A',
    fontSize:'12px',
    fontWeight: 500,

}

  return (
    <div className='flex items-center gap-[26px]'>
      <FormControl size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        sx={{ background:'white',boxShadow:'2px 5px 14px rgba(0, 0, 0, 0.03)',minWidth: '162px',height:'41px',borderRadius:'5px',color:'#7A7A7A',
        fontSize:'12px',
        fontWeight: 500,}}
        onChange={handleChange}
      >
       <MenuItem sx={menuStyle} value="">
          <em>None</em>
        </MenuItem>
       <MenuItem sx={menuStyle} value={10}>Ten</MenuItem>
       <MenuItem sx={menuStyle} value={20}>Twenty</MenuItem>
       <MenuItem sx={menuStyle} value={30}>Filter Activity 21/25</MenuItem>
      </Select>
    </FormControl>
    <FormControl size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        sx={{ background:'white',boxShadow:'2px 5px 14px rgba(0, 0, 0, 0.03)',minWidth: '93px',height:'41px',borderRadius:'5px',color:'#7A7A7A',
        fontSize:'12px',
        fontWeight: 500,}}
        onChange={handleChange}
      >
       <MenuItem sx={menuStyle} value="">
          <em>None</em>
        </MenuItem>
       <MenuItem sx={menuStyle} value={10}>Ten</MenuItem>
       <MenuItem sx={menuStyle} value={20}>Twenty</MenuItem>
       <MenuItem sx={menuStyle} value={30}>All User</MenuItem>
      </Select>
    </FormControl>
    </div>
  );
}