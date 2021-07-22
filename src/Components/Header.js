import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import {HeaderContainer} from './Header.style';
import {HeaderLeft} from './Header.style';
import {HeaderRight} from './Header.style';
import {HeaderAvatar} from './Header.style';
import {HeaderSearch} from './Header.style';


function Header() {
    return (
   <HeaderContainer>

<HeaderLeft>
<HeaderAvatar/>
<AccessTimeIcon className='cursor'/>  
</HeaderLeft>

<HeaderSearch>

  <SearchIcon/>
  <input type='text' placeholder='Enter Search'/> 
 </HeaderSearch>

<HeaderRight>
<HelpIcon className='cursor'/>
</HeaderRight>


   </HeaderContainer>
    );
}

export default Header;

