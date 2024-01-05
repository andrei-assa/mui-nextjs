"use client";
import React from "react";
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText, ListItemButton, Divider
} from "@mui/material";
import Link from "next/link";
import sideNavigation from "../../navigation/sideNavigation.json";
import {usePathname, useRouter} from "next/navigation"; // Update the path as necessary

export default function App({children}: {children: React.ReactNode}) {

    const pathname = usePathname()
    const activeRoute = (item: string) => {
        const route = `/${item.toLowerCase().replace(/\s+/g, '-')}`;
        return pathname === route;
    };
    return (
        <Box sx={{marginTop: "2em"}}>
            <Container maxWidth={'xl'}>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Paper sx={{padding: "2em"}} variant={'outlined'}>
                            <List component="nav">
                                {sideNavigation.sections.map((section) => (
                                    <React.Fragment key={section.title}>
                                        <Typography variant="subtitle1" gutterBottom component="div"
                                                    sx={{fontWeight: 'medium', color: 'text.secondary'}}>
                                            {section.title}
                                        </Typography>
                                        {section.items.map((item) => (
                                            <ListItemButton component={Link} key={item}
                                                            href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                            sx={{
                                                                backgroundColor: activeRoute(item) ? 'action.selected' : 'background.paper',
                                                                ':hover': {
                                                                    backgroundColor: 'action.hover',
                                                                },
                                                                fontWeight: activeRoute(item) ? 'fontWeightMedium' : 'fontWeightRegular',
                                                            }}>
                                                <ListItemText primary={item}/>
                                            </ListItemButton>
                                        ))}
                                        <Divider component="li"/>
                                    </React.Fragment>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
