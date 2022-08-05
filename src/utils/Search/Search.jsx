import React from 'react'
import { TabTitle, Path } from '../../Components/Common/CommonFunction'
import SearchIcon from '@mui/icons-material/Search'
import './search.css'

const Search = ({path}) => {
    
    TabTitle(`${path} | Kitsxi`)
    
    return (
        <>
            <Path path={path} />
            <div className="search_container_outter">
                <div className='search_inner'>
                    <div className='search_hearder'>Search</div>
                    <div className='search_input_section flex js ac row'>
                        <input type="text" placeholder="Search our store" className='search_input' />
                        <span className='search_input_icon flex jc ac'><SearchIcon className='icon_search' /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search