import './App.css';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Slider from './components/slider';
import { Link } from 'react-scroll';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './components/fonts.css';

const drawerWidth = 100;
const navItems = ['About', 'Portfolio', 'Contact'];


function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} style={{color:'#D59B33'}}>
              <Link activeClass="active" smooth spy to={item}>
                <ListItemText primary={item} style={{ color: '#D59B33'}} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: 'black' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >

            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Link activeClass="active" smooth spy to={item}>

                  <Button key={item} sx={{ color: '#D59B33', fontFamily: 'dosis-medium', fontSize: '16px' }}>
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'black' },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>


      <section id="About">
        <About></About>
      </section>
      <section id="Portfolio">
        <Portfolio />
        <Slider />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
      <footer>
        <div class="container">
          <ul class="breadcrumb">
            <Link activeClass="active" smooth spy to='About'>

              <li class="breadcrumb__item breadcrumb__item-firstChild">
                <span class="breadcrumb__inner">
                  <span class="breadcrumb__title">About</span>
                </span>
              </li>
            </Link>
            <Link activeClass="active" smooth spy to='Portfolio'>

              <li class="breadcrumb__item">

                <span class="breadcrumb__inner">
                  <span class="breadcrumb__title">Portfolio</span>
                </span>

              </li>
            </Link>
            <Link activeClass="active" smooth spy to='Contact'>

              <li class="breadcrumb__item">
                <span class="breadcrumb__inner">
                  <span class="breadcrumb__title">Contact</span>
                </span>
              </li>
            </Link>
          </ul>
          <h6 style={{ color: 'white', marginTop: '-50px', marginBottom: '30px' }}>Sarah Kulbersh Web development & design 2023</h6>

        </div>

      </footer>
    </div>
  );
}

export default App;
