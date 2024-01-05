import * as React from "react";
import {Card, CardContent, CardHeader, CardProps} from "@mui/material";

export default function TitledCard({title, children, CardProps}: {
    title: string,
    children: React.ReactNode,
    CardProps?: CardProps
}) {
    return (
        <Card sx={{marginBottom: "1em"}} {...CardProps}>
            <CardHeader title={title}/>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}