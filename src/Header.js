import React, { useEffect } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import { useDataLayerValue } from './DataLayer';



function Header() {

    const [{user}, dispatch] = useDataLayerValue();

    return(

        <div className="header">
            <h1>I am a header</h1>
            <div className="header__left">
                <SearchIcon/>
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )


}

export default Header
