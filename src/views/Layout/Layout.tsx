"use client";
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '../AppBar'
import navigationLinks from "../../navigation/drawerNavigation.json"
import Link from "next/link";
import {Box} from "@mui/material";

export default function Layout({children}: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <Box sx={{maxHeight:"100vh"}}>
            <AppBar logoText={"MUI + NextJS"} handleDrawerOpen={handleDrawerToggle}/>
            <Drawer
                open={open}
                onClose={handleDrawerToggle}
                variant={'temporary'}
            >
                <List>
                    {navigationLinks.map((link, index) => (
                        <ListItem key={link.text}>
                            <Link href={link.url}>
                                <ListItemText primary={link.text}/>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {children}
        </Box>
    );
}