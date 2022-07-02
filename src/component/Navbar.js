import React from 'react'
import logo from './homepage/ProjectHero.svg';
import { Container,
    Typography,
    Toolbar,
    Button,
    AppBar
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Navbar() {
    
  return (
    <Container>
        <AppBar color = 'inherit'>
        <Toolbar>
        <Typography style={{flexGrow: 1 }}> <img src={logo} alt="logo"   /></Typography>
        <Button  color = 'inherit'>Plans</Button>
        <Button color = 'inherit'>About Us</Button>
        <Button endIcon={<ArrowDropDownIcon /> } color = 'inherit'>Support</Button>
        <Button color = 'inherit'>FAQs</Button>
        <Button variant = 'outlined'>Book Workers</Button>
      </Toolbar>
        </AppBar>
    </Container>
  )
}

export default Navbar;