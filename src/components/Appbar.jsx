import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useDispatch, useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar({web3Handler}) {
  const account = useSelector((state) => state.solidity.account)
  return (
    <Box sx={{}}>
      <AppBar position="static">
        <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{display:'flex', justifyContent: 'space-between'}}>
            <Typography sx={{display:'flex', justifyContent: 'space-between', alignItems:"center", marginRight: "30px"}}>
              <BorderColorIcon sx={{marginRight: "4px"}}/>
              Create
            </Typography>

            <Typography sx={{display:'flex', justifyContent: 'space-between', alignItems:"center", marginRight: "30px"}}>
              <BloodtypeIcon sx={{marginRight: "4px"}}/>
              Donate
            </Typography>
            <Typography onClick={()=>{account ? console.log('') : web3Handler()}} sx={{display:'flex', justifyContent: 'space-between', alignItems:"center", marginRight: "30px", cursor:"pointer"}}>
              {account? `${account.slice(0, 5) + '...' + account.slice(38, 42)}` : 'Connect Wallet'}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}