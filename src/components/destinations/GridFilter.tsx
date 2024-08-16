import React from 'react'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';


interface VisualFilterProps {
    visualFilter? : boolean;
    setVisualFilter: (input: boolean) => void;
}

const GridFilter = ({visualFilter, setVisualFilter} : VisualFilterProps) => {
  return (
    <button className={`flex rounded-lg p-3 text-base  ${ visualFilter ? "bg-slate-300 text-gray-800" :  "bg-sky-500 text-white" }`} onClick={()=>setVisualFilter(false)}>
        <SpaceDashboardIcon/>
    </button>
  )
}

export default GridFilter
