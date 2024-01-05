"use client";
import * as React from "react";
import {Box, Button, Typography} from "@mui/material";
import {useRouter} from "next/navigation";

export default function ErrorPage() {
    const router = useRouter();

    return (
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
            <Typography variant={'h5'}>Ooops, the page you are looking for cannot be found</Typography>
            <Button
                sx={{marginTop:"2em"}}
                variant={'contained'}
                onClick={() => {
                    router.push('/')
                }}>Go To Homepage</Button>
        </Box>
    );
}