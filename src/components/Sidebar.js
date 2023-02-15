import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import About from './About';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import PlansandPrices from './PlansandPrices';
import Bookslots from './Bookslots';
import Users from './Users';
import Bookings from './Bookings';
import Logout from './Logout';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./Style.css";
import { CardMedia, Container } from '@mui/material';
import { useNavigate } from 'react-router';


const drawerWidth = 252;

function ResponsiveDrawer(props) {
  const history = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [menudata, setMenudata] = React.useState("About");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <Container>
      <Toolbar />
      <Divider />
      <List>
        
          <ListItem  disablePadding onClick={()=>setMenudata("About")}>
            <ListItemButton>
              <ListItemIcon>
                 < InfoIcon/> 
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding onClick={()=>setMenudata("Plans & Price")}>
            <ListItemButton>
              <ListItemIcon>
                 < MonetizationOnIcon/> 
              </ListItemIcon>
              <ListItemText primary="Plans & Price"  />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding onClick={()=>setMenudata("Book Slots")}>
            <ListItemButton>
              <ListItemIcon>
                 < BookOnlineIcon/> 
              </ListItemIcon>
              <ListItemText primary="Book Slots" />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding onClick={()=>setMenudata("Users")}>
            <ListItemButton>
              <ListItemIcon>
                 < AccountCircleIcon/> 
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding onClick={()=>setMenudata("Bookings")}>
            <ListItemButton>
              <ListItemIcon>
                 < CalendarMonthIcon/> 
              </ListItemIcon>
              <ListItemText primary="Bookings" />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding onClick={()=>history("/")}>
            <ListItemButton>
              <ListItemIcon>
                 < LogoutIcon/> 
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>

        
      </List>
      <Divider />
      
      <CardMedia
        sx={{ height: 160}}
        image="./img/analysis-gdb1f695c1_1920.jpg"
        title="green iguana"
        alt="error"
      />
      <strong><p>Welcome to clinic</p></strong>
    
      </Container>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline sx={{ color:'white' }} />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
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
          <Typography variant="h6" noWrap component="div" className='m'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end',color:'white'}}>
        <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
       Mounika
           </Box>
            </Typography>
            </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
     {menudata==="About" && <About />}
     {menudata==="Plans and Prices" && <PlansandPrices />}
     {menudata==="Book Slots" && <Bookslots />}
     {menudata==="Users" && <Users />}
     {menudata==="Bookings" && <Bookings />}
     
       
       
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;