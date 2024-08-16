import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

interface VisualFilterProps {
  visualFilter? : boolean;
  setVisualFilter: (input: boolean) => void;
}

const ListFilter = ({visualFilter, setVisualFilter} : VisualFilterProps) => {
  return (
    <div className={`flex rounded-lg p-3 text-base  ${ visualFilter ?  "bg-sky-500 text-white" : "bg-slate-300 text-gray-800" }`} onClick={()=>setVisualFilter(true)}>
        <FormatListBulletedIcon/>
    </div>
  )
}

export default ListFilter
