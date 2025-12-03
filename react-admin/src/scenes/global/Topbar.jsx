import {Box, IconButton, useTheme} from "@mui/material";
import {useContext} from "react";
import {ColorModeContext, tokens} from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlineIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlineIcon from "@mui/icons-material/LightModeOutlined"
import NotificationsOutlineIcon from "@mui/icons-material/LightModeOutlined"
import SettingsOutlineIcon from "@mui/icons-material/LightModeOutlined"
import PersonOutlineIcon from "@mui/icons-material/LightModeOutlined"
import SearchIcon from "@mui/icons-material/LightModeOutlined"


const Topbar = () => {
  const theme =useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  
  return (
    <Box display="flex" justifyContent="space-between" p={2}>

      {/*SEARCH BAR */}

<Box
 display="flex"
backgroundColor={colors.primary[400]} 
borderRadius="3px"> 

<InputBase sx= {{ml:2, flex:1}} placeholder = "Search"></InputBase>

<IconButton type="button " sx={{p:1}}>
  <SearchIcon></SearchIcon>
</IconButton>

</Box>
{/*ICONS*/}

<Box display="flex">
  <IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode === 'dark' ? (<DarkModeOutlineIcon></DarkModeOutlineIcon>) : (<LightModeOutlineIcon></LightModeOutlineIcon>)} </IconButton>
  <IconButton> <NotificationsOutlineIcon></NotificationsOutlineIcon></IconButton>
  <IconButton> <SettingsOutlineIcon></SettingsOutlineIcon></IconButton>
  <IconButton><PersonOutlineIcon></PersonOutlineIcon></IconButton>
  <IconButton></IconButton>

</Box>


    </Box>
  )
}
export default Topbar