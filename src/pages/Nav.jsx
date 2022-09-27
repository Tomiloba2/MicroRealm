import {
     AppBar,
     Toolbar,
     Typography,
    Box,
    Badge,
    Avatar,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    Mail,
    Notifications,
    Menu as MenuIcon,
    Home,
    PlayCircle,
    PhotoCamera,
    MenuBook,
    ModeNight,
} from '@mui/icons-material'
import { useState } from "react";

const Nav = ({setMode,mode}) => {
    const [open,setOpen]=useState(false)
    // to handle click
    const handleclick=()=>{
        setOpen(true)
    }
    return ( 
        <div className="Nav">
            <AppBar position="fixed" color="info">
                <Toolbar sx={{
                    display:'flex',
                    justifyContent:"space-around",
                    marginLeft:{xs:'0vw', sm:'12vw'}
                }}>
                <MenuIcon onClick={handleclick} sx={{display:{xs:'block',sm:'none'},}}/>
                    <Box sx={{
                        display:'flex',

                    }}>
                        <Typography variant="h5" sx={{
                            fontFamily:'algerian',
                            marginLeft:{xs:'0vw',sm:'4vw',md:"0vw"}
                        }}>MicroRealm</Typography>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        position:'relative',
                        right:{xs:'-6vw', md:'-7vw'}

                    }}>
                        <Badge badgeContent={3} color='success' sx={{
                            display:{xs:'none',sm:'block'}
                        }}><Mail /></Badge>
                        <Badge badgeContent={1} color='error' sx={{
                            display:{xs:'none',sm:'block'}
                        }}><Notifications /></Badge>
                        <Avatar alt={""} src='https://source.unsplash.com/random'/>
                    </Box>
                </Toolbar>
                <Menu
                open={open}
                onClose={()=>{setOpen(false)}}
                anchorOrigin={{
                    vertical:'top',
                    horizontal:'left'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'left'
                }}
                sx={{
                    display:{xs:"block",sm:'none'}
                }}
                >
                    <MenuItem component='a' href="/">
                        Home <Home/>
               </MenuItem>
               <MenuItem component='a' href="/image">
                        Images <PhotoCamera/>
               </MenuItem>
               <MenuItem component='a' href="/movie">
                        Movies <PlayCircle/>
               </MenuItem>
               <MenuItem component='a' href="/book">
                        Books <MenuBook/>
                 </MenuItem>
                 <MenuItem onClick={e=>setMode(mode==='dark'?'light':'dark')}>
                                lightmode
                              <ModeNight/>
               </MenuItem>
                </Menu>
            </AppBar>
        </div>
     ); 
}
 
export default Nav;