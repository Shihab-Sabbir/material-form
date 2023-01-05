import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import assignToUser from '../../asset/assignToUser.png'

function CampaignFilter() {
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
    <div className='flex items-center font-[inter] gap-[38px]'>
        <div className='flex items-center'>
        <div className='flex flex-col justify-center'>
        <p className='text-[#9F9F9F] text-[10px] font-[500]'>Reminder</p>
    <FormControl size="small" variant="standard" sx={{'.css-1hvzhbw-MuiInputBase-root-MuiInput-root-MuiSelect-root:before':{borderBottom:'none'}}}>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={age}
      sx={{ background:'white',width:'fit-content',height:'fit-conten',borderRadius:'5px',color:'#7A7A7A',border:'none',
      fontSize:'12px',fontWeight: 500,paddingTop:'5px'}}
      onChange={handleChange}
    >
     <MenuItem sx={menuStyle} value="">
        <em>None</em>
      </MenuItem>
     <MenuItem sx={menuStyle} value={10}>Ten</MenuItem>
     <MenuItem sx={menuStyle} value={20}>Twenty</MenuItem>
     <MenuItem sx={menuStyle} value={30}>No Reminder</MenuItem>
    </Select>
  </FormControl>
        </div>
        <div className='h-[28px] w-0 border-r pl-[30px]'></div>
        </div>
        <div className='flex items-center'>
        <div className='flex flex-col justify-center'>
        <p className='text-[#9F9F9F] text-[10px] font-[500]'>Task Priority</p>
    <FormControl size="small" variant="standard" sx={{'.css-1hvzhbw-MuiInputBase-root-MuiInput-root-MuiSelect-root:before':{borderBottom:'none'}}}>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={age}
      sx={{ background:'white',width:'fit-content',height:'fit-conten',borderRadius:'5px',color:'#7A7A7A',border:'none',
      fontSize:'12px',fontWeight: 500,paddingTop:'5px'}}
      onChange={handleChange}
    >
     <MenuItem sx={menuStyle} value="">
        <em>None</em>
      </MenuItem>
     <MenuItem sx={menuStyle} value={10}>
     <div className='flex gap-[11px]'>
            <p className='h-[14px] w-[14px] bg-yellow-300'></p>
            <p>Moderate</p>
        </div>
     </MenuItem>
     <MenuItem sx={menuStyle} value={20}>
     <div className='flex gap-[11px]'>
            <p className='h-[14px] w-[14px] bg-blue-600'></p>
            <p>Low</p>
        </div>
     </MenuItem>
     <MenuItem sx={menuStyle} value={30}>
        <div className='flex gap-[11px]'>
            <p className='h-[14px] w-[14px] bg-red-600'></p>
            <p>High</p>
        </div>
     </MenuItem>
    </Select>
  </FormControl>
        </div>
        <div className='h-[28px] w-0 border-r pl-[30px]'></div>
        </div>
        <div className='h-full flex -ml-3'>
        <div className='flex flex-col'>
        <p className='text-[#9F9F9F] text-[10px] font-[500]'>Assigned to</p>
    <div className='flex items-center gap-2'>
        <img src={assignToUser} className='w-[16px] h-[16px]' alt="" />
        <p className='text-[#333333] text-[12px] font-[500] py-[5px]'>James Dean</p>
    </div>
        </div>
        </div>
  </div>
  )
}

export default CampaignFilter;