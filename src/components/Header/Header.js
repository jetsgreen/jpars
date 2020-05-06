import React from 'react';
import './Header';
import Container from '@material-ui/core/Container'

const Header = () => {
    return(
        <Container style={{backgroundColor:'black', color:'white'}}>
            <header>
             <nav >
                 <ul style={{display:'flex'}}>
                     <li style={{listStyle:'none', paddingRight:'16px'}}>
                         <h1>Logo</h1>
                     </li>
                     <li style={{listStyle:'none'}}>
                         <h1>Movie Search</h1>
                     </li>
                 </ul>
             </nav>
            </header>
        </Container>
    ) 

}

export default Header