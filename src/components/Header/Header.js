import React from 'react';
import Container from '@material-ui/core/Container';


const Header = () => {
    return(
        <Container style={{backgroundColor:'#01b4e4', color:'white', fontFamily:'Raleway, sans-serif'}}>
            <header>
             <nav >
                 <ul style={{display:'flex'}}>
                     <li style={{listStyle:'none', paddingRight:'16px'}}>
                       <img src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" width="50px"style={{padding: "10px"}} alt="logo"/> 
                     </li>
                     <li style={{listStyle:'none'}}>
                         <h1>Movie Buff</h1>
                     </li>
                 </ul>
             </nav>
            </header>
        </Container>
    ) 

}

export default Header