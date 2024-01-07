import * as React from "react";
import {Box, Card, CardContent, CardHeader, CardProps, Typography} from "@mui/material";

export default function TitledCard({title, description, children, CardProps}: {
    title: string,
    description?: string,
    children: React.ReactNode,
    CardProps?: CardProps
}) {
    return (
        <Card sx={{marginBottom: "1em"}} {...CardProps}>
            <CardHeader
                title={
                    <Typography variant={'h6'} fontWeight={'bold'}>{title}</Typography>
                }/>
            <CardContent>
                {description ? <Box sx={{marginBottom: "1em"}}>
                    <Typography variant={'body1'}>{description}</Typography>
                </Box> : null}
                <Box>
                    {children}
                </Box>
            </CardContent>
        </Card>
    )
}