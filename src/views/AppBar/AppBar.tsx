import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import config from "../../config"
import {Box} from "@mui/material";

interface IAppBarProps {
    logoText: string;
    handleDrawerOpen: () => void;
}

const AppBarComponent: React.FC<IAppBarProps> = ({logoText, handleDrawerOpen}) => (
    <Box>
        <AppBar position="fixed" color={'primary'} sx={{height: config.appBarHeight}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}>
                    <MenuIcon/>
                </IconButton>
                <Link href={'/'} style={{color: "inherit", textDecoration: "none"}}>
                    <Typography variant="h6">
                        {logoText}
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
        <Toolbar/>
    </Box>
);

export default AppBarComponent;