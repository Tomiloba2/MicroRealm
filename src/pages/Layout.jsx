import {Outlet,Link} from 'react-router-dom';
import { 
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Tooltip,
    Switch,
 } from '@mui/material';
 import {
    Home,
    PhotoCamera,
    MenuBook,
    ModeNight,
    PlayCircle,
 } from "@mui/icons-material"

const Layout = ({mode,setMode}) => {
    const drawerWidth=240
    return ( 
        <div style={{margin:'10vw'}}>
          <Drawer
        variant='permanent'
        anchor='left'
        sx={{
            backgroundColor:'#dde1e7',
            width:drawerWidth,
            flexShrink:0,
            display:{xs:'none',sm:'block'},
            "&.MuiDrawer-paper":{
                width:drawerWidth,
                boxSizing:'border-box'
            }
            //backgroundColor:'#000'
        }}>
        <div className="Layout">
           <List sx={{
            marginTop:{xs:"10vw",sm:'8vw',md:'6vw'},
           }}>
               <ListItem>
                <Link to='/' style={{
                    textDecoration:'none',
                    color:'blue',
                    fontStyle:'italic',
                }}>
                <Tooltip title="home">
                    <ListItemButton>
                        <ListItemIcon sx={{
                            color:'blue',
                        }}><Home /></ListItemIcon>
                        <ListItemText sx={{display:{xs:'none',sm:'block'}}}>Home</ListItemText>
                    </ListItemButton>
                </Tooltip>
                </Link>
               </ListItem><br/><br/>
               <ListItem>
                <Link to='/image' style={{
                    textDecoration:'none',
                    color:'blue',
                    fontStyle:'italic',
                }}>
                 <Tooltip title='Images'>
                    <ListItemButton>
                        <ListItemIcon sx={{
                            color:'blue',
                        }}><PhotoCamera /></ListItemIcon>
                        <ListItemText primary='Images' sx={{display:{xs:'none',sm:'block'}}} />
                    </ListItemButton>
                 </Tooltip>
                </Link>
               </ListItem><br/><br/>
               <ListItem>
                <Link to='/movie' style={{
                    textDecoration:'none',
                    color:'blue',
                    fontStyle:'italic',
                }}>
                    <Tooltip title='Movie'>
                    <ListItemButton>
                        <ListItemIcon sx={{
                            color:'blue'
                        }}><PlayCircle /></ListItemIcon>
                        <ListItemText primary='Movies' sx={{display:{xs:'none',sm:'block'}}}/>
                    </ListItemButton>
                    </Tooltip>
                </Link>
               </ListItem><br/><br/>
               <ListItem>
                <Link to='/book' style={{
                    textDecoration:'none',
                    color:'blue',
                    fontStyle:'italic',
                }}>
                    <Tooltip title='Book'>
                    <ListItemButton>
                        <ListItemIcon sx={{
                            color:'blue',
                        }}>< MenuBook/></ListItemIcon>
                        <ListItemText primary='Books' sx={{display:{xs:'none',sm:'block'}}}/>
                    </ListItemButton>
                   </Tooltip>
                   </Link>
                 </ListItem>
                 <br/><br/>
                 <ListItem>
                    <Tooltip title='lightmode'>
                    <ListItemButton>
                        <ListItemIcon sx={{
                            color:'blue'
                        }}><ModeNight onClick={e=>setMode(mode==='dark'?'light':'dark')}/></ListItemIcon>
                        <Switch onChange={e=>setMode(mode==='dark'?'light':'dark')} sx={{
                            display:{xs:'none', sm:"block"},
                        }}/>
                    </ListItemButton>
                    </Tooltip>
               </ListItem><br/><br/>
               </List> 
               </div>
             </Drawer>
    <Outlet/>
        </div>
     );
}
 
export default Layout;
